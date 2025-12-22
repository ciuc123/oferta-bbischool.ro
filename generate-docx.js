const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, UnderlineType } = require('docx');

// Function to parse simple markdown and convert to DOCX paragraphs
function parseMarkdown(markdown) {
    const lines = markdown.split('\n');
    const paragraphs = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (!line) {
            // Empty line - add spacing
            paragraphs.push(new Paragraph({ text: '' }));
            continue;
        }
        
        // Headers
        if (line.startsWith('# ')) {
            paragraphs.push(new Paragraph({
                text: line.substring(2),
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 400, after: 200 }
            }));
        } else if (line.startsWith('## ')) {
            paragraphs.push(new Paragraph({
                text: line.substring(3),
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 300, after: 150 }
            }));
        } else if (line.startsWith('### ')) {
            paragraphs.push(new Paragraph({
                text: line.substring(4),
                heading: HeadingLevel.HEADING_3,
                spacing: { before: 200, after: 100 }
            }));
        } else if (line.startsWith('#### ')) {
            paragraphs.push(new Paragraph({
                text: line.substring(5),
                heading: HeadingLevel.HEADING_4,
                spacing: { before: 150, after: 75 }
            }));
        }
        // Bullet points
        else if (line.startsWith('- ') || line.startsWith('* ')) {
            const text = line.substring(2).replace(/\*\*(.*?)\*\*/g, '$1'); // Remove bold markers
            paragraphs.push(new Paragraph({
                text: text,
                bullet: { level: 0 },
                spacing: { before: 50, after: 50 }
            }));
        }
        // Horizontal rule
        else if (line === '---' || line === '***') {
            paragraphs.push(new Paragraph({
                text: '─────────────────────────────────────────────────────────────',
                alignment: AlignmentType.CENTER,
                spacing: { before: 200, after: 200 }
            }));
        }
        // HTML tags or special markers - skip
        else if (line.startsWith('<') || line.startsWith('```')) {
            continue;
        }
        // Regular text with bold support
        else {
            const parts = [];
            let currentText = '';
            let i = 0;
            const cleanLine = line;
            
            while (i < cleanLine.length) {
                if (cleanLine.substring(i, i + 2) === '**') {
                    // Save current text if any
                    if (currentText) {
                        parts.push(new TextRun({ text: currentText }));
                        currentText = '';
                    }
                    // Find closing **
                    const endIndex = cleanLine.indexOf('**', i + 2);
                    if (endIndex !== -1) {
                        const boldText = cleanLine.substring(i + 2, endIndex);
                        parts.push(new TextRun({ text: boldText, bold: true }));
                        i = endIndex + 2;
                    } else {
                        currentText += cleanLine[i];
                        i++;
                    }
                } else {
                    currentText += cleanLine[i];
                    i++;
                }
            }
            
            if (currentText) {
                parts.push(new TextRun({ text: currentText }));
            }
            
            if (parts.length > 0) {
                paragraphs.push(new Paragraph({
                    children: parts,
                    spacing: { before: 100, after: 100 }
                }));
            }
        }
    }
    
    return paragraphs;
}

// Read markdown files
console.log('Generating DOCX file...\n');

const files = [
    { path: 'OFERTA.md', title: 'Ofertă Refacere Website BBISchool.ro' },
    { path: 'DESIGN_OPTIONS.md', title: 'Opțiuni Design pentru BBISchool.ro' },
    { path: 'TECHNICAL_SPECS.md', title: 'Specificații Tehnice - BBISchool.ro' },
    { path: 'VISUAL_MOCKUPS.md', title: 'Concepte Vizuale - BBISchool.ro' }
];

const allParagraphs = [];

// Add document title
allParagraphs.push(
    new Paragraph({
        text: 'Ofertă Completă BBISchool.ro',
        heading: HeadingLevel.TITLE,
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 }
    }),
    new Paragraph({
        text: 'Proiect Refacere Website',
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 }
    }),
    new Paragraph({
        text: `Data: ${new Date().toLocaleDateString('ro-RO')}`,
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 }
    }),
    new Paragraph({ text: '' })
);

// Process each file
files.forEach((file, index) => {
    try {
        console.log(`Processing ${file.path}...`);
        const content = fs.readFileSync(file.path, 'utf8');
        
        // Add section separator if not first file
        if (index > 0) {
            allParagraphs.push(
                new Paragraph({ text: '' }),
                new Paragraph({
                    text: '═════════════════════════════════════════════════════════════',
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 400, after: 400 }
                }),
                new Paragraph({ text: '' })
            );
        }
        
        // Parse and add content
        const paragraphs = parseMarkdown(content);
        allParagraphs.push(...paragraphs);
        
        console.log(`✓ Added ${file.title}`);
    } catch (error) {
        console.error(`✗ Error processing ${file.path}:`, error.message);
    }
});

// Create document
const doc = new Document({
    sections: [{
        properties: {},
        children: allParagraphs
    }]
});

// Write to file
Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync('oferta-completa.docx', buffer);
    console.log('\n✓ DOCX file created successfully: oferta-completa.docx');
}).catch(error => {
    console.error('✗ Error creating DOCX:', error.message);
});
