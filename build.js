const fs = require('fs');
const { marked } = require('marked');

// HTML template function
function createHTMLPage(title, content, activeNav) {
    return `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="BBISchool.ro - ${title}">
    <title>${title} - BBISchool.ro</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>🏫 BBISchool.ro</h1>
            <p class="subtitle">Proiect Refacere Website</p>
        </div>
    </header>

    <nav>
        <div class="container">
            <button class="menu-toggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul>
                <li><a href="index.html" ${activeNav === 'home' ? 'class="active"' : ''}>Acasă</a></li>
                <li><a href="oferta.html" ${activeNav === 'oferta' ? 'class="active"' : ''}>Oferta</a></li>
                <li><a href="design-options.html" ${activeNav === 'design' ? 'class="active"' : ''}>Design</a></li>
                <li><a href="technical-specs.html" ${activeNav === 'specs' ? 'class="active"' : ''}>Specificații</a></li>
                <li><a href="visual-mockups.html" ${activeNav === 'mockups' ? 'class="active"' : ''}>Mockup-uri</a></li>
            </ul>
        </div>
    </nav>

    <main class="container">
        <div class="document-header">
            <h2>${title}</h2>
        </div>
        <div class="document-content">
            ${content}
        </div>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2024 BBISchool.ro - Toate drepturile rezervate</p>
            <p>Versiune: 1.0 | Data: Decembrie 2024</p>
        </div>
    </footer>

    <script src="menu.js"></script>
</body>
</html>`;
}

// Convert markdown files to HTML
const files = [
    { md: 'OFERTA.md', html: 'oferta.html', title: 'Oferta Comercială', nav: 'oferta' },
    { md: 'DESIGN_OPTIONS.md', html: 'design-options.html', title: 'Opțiuni Design', nav: 'design' },
    { md: 'TECHNICAL_SPECS.md', html: 'technical-specs.html', title: 'Specificații Tehnice', nav: 'specs' },
    { md: 'VISUAL_MOCKUPS.md', html: 'visual-mockups.html', title: 'Concepte Vizuale', nav: 'mockups' }
];

console.log('Converting markdown files to HTML...\n');

files.forEach(file => {
    try {
        // Read markdown file
        const markdown = fs.readFileSync(file.md, 'utf8');
        
        // Convert to HTML
        const htmlContent = marked(markdown);
        
        // Create full HTML page
        const fullHTML = createHTMLPage(file.title, htmlContent, file.nav);
        
        // Write to file
        fs.writeFileSync(file.html, fullHTML);
        
        console.log(`✓ Created ${file.html}`);
    } catch (error) {
        console.error(`✗ Error processing ${file.md}:`, error.message);
    }
});

console.log('\n✓ All files converted successfully!');
