# GitHub Copilot Instructions for oferta-bbischool.ro

## Project Overview

This repository contains the proposal and documentation for rebuilding the BBISchool.ro website. It's a static site generator that converts markdown documentation into HTML pages for presenting a comprehensive WordPress website redesign proposal to a client.

**Purpose**: Present a professional website redesign proposal including:
- Commercial offer (OFERTA.md)
- Design options (DESIGN_OPTIONS.md)
- Technical specifications (TECHNICAL_SPECS.md)
- Visual mockups (VISUAL_MOCKUPS.md)

**Target Audience**: Client (BBISchool.ro) reviewing website redesign proposal

## Technology Stack

- **Runtime**: Node.js
- **Markdown Parser**: `marked` v17.0.1
- **Build System**: Custom Node.js script (`build.js`)
- **Output**: Static HTML files with shared CSS styling
- **Deployment**: GitHub Pages (via GitHub Actions)
- **Language**: Romanian (content language)

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment workflow
├── *.md                        # Source markdown documentation files
├── build.js                    # Build script to convert MD → HTML
├── index.html                  # Homepage (manually maintained)
├── style.css                   # Shared styles for all pages
├── *.html (generated)          # Generated HTML from markdown
└── package.json                # Node.js dependencies
```

## Build System

### How it works:
1. `build.js` reads markdown files (OFERTA.md, DESIGN_OPTIONS.md, etc.)
2. Converts them to HTML using the `marked` library
3. Wraps content in a consistent page template with navigation
4. Outputs HTML files (oferta.html, design-options.html, etc.)

### Running the build:
```bash
npm install           # Install dependencies (marked)
npm run build         # Generate HTML from markdown
npm run serve         # Start local dev server on port 8080
```

### Important:
- **DO NOT manually edit generated HTML files** (oferta.html, design-options.html, technical-specs.html, visual-mockups.html)
- Always edit the source `.md` files instead
- Run `npm run build` after editing markdown to regenerate HTML
- `index.html` is manually maintained (not generated)

## Code Style & Conventions

### JavaScript (build.js):
- Use ES6+ syntax (const, let, arrow functions)
- Use template literals for HTML generation
- Handle errors gracefully with try-catch
- Provide clear console output for build status

### HTML:
- Use semantic HTML5 elements
- Ensure proper DOCTYPE and meta tags
- Maintain responsive design (mobile-first)
- Keep navigation consistent across pages
- Use Romanian language (lang="ro")

### CSS (style.css):
- Keep styles organized and readable
- Use CSS custom properties for colors/spacing when possible
- Maintain responsive design breakpoints
- Follow existing class naming conventions

### Markdown:
- Use proper heading hierarchy (# → ## → ###)
- Include descriptive alt text for images
- Use code blocks with language specification
- Keep content professional and clear
- Write in Romanian language

## Development Workflow

1. **Editing Content**:
   - Edit source `.md` files for content changes
   - Run `npm run build` to regenerate HTML
   - Test locally with `npm run serve`

2. **Styling Changes**:
   - Edit `style.css` directly
   - Changes apply to all pages automatically

3. **Template Changes**:
   - Edit the `createHTMLPage()` function in `build.js`
   - Run `npm run build` to apply to all pages

4. **Deployment**:
   - Push changes to `main` branch
   - GitHub Actions automatically deploys to GitHub Pages

## Key Files

- **build.js**: Build script - modify to change HTML template or add new pages
- **style.css**: Shared styles - edit for design changes
- **index.html**: Homepage - manually maintained, edit directly
- **OFERTA.md**: Commercial offer - main proposal content
- **DESIGN_OPTIONS.md**: Design variations presented to client
- **TECHNICAL_SPECS.md**: Technical implementation details
- **VISUAL_MOCKUPS.md**: Visual concepts and mockups
- **README.md**: Project summary and overview

## Common Tasks

### Adding a new page:
1. Create new markdown file (e.g., `NEW_PAGE.md`)
2. Add entry to the `files` array in `build.js`:
   ```javascript
   { md: 'NEW_PAGE.md', html: 'new-page.html', title: 'Page Title', nav: 'page-key' }
   ```
3. Update navigation in `createHTMLPage()` template
4. Run `npm run build`

### Updating content:
1. Edit the relevant `.md` file
2. Run `npm run build`
3. Test with `npm run serve`
4. Commit both `.md` and generated `.html` files

### Changing page template:
1. Edit `createHTMLPage()` function in `build.js`
2. Run `npm run build` to regenerate all pages
3. Review changes across all generated pages

## Testing

- **No automated tests**: This is a static site generator for documentation
- **Manual testing**: 
  - Build and serve locally
  - Check all pages render correctly
  - Verify navigation works
  - Test responsive design on different screen sizes
  - Validate HTML if making structural changes

## Dependencies

- **marked**: Markdown to HTML conversion
- **Node.js built-ins**: fs (file system operations)

Keep dependencies minimal - only add if absolutely necessary.

## Language & Content

- All content is in **Romanian**
- Client-facing documentation for school website project
- Maintain professional, clear language
- Technical terms can be in English where appropriate
- Use Romanian diacritics correctly (ă, â, î, ș, ț)

## Deployment

- Automatic deployment via GitHub Actions to GitHub Pages
- Triggered on push to `main` branch
- No build step in workflow - committed HTML files are served directly
- URL: Based on repository GitHub Pages configuration

## Special Considerations

1. **Generated files**: Always regenerate HTML after markdown edits
2. **Romanian content**: Preserve language and cultural context
3. **Professional presentation**: This is client-facing documentation
4. **No database**: Static site, no backend or database
5. **Simple by design**: Keep the build process straightforward
6. **Version control**: Commit both source (.md) and generated (.html) files

## When Making Changes

- ✅ Edit markdown files for content
- ✅ Run build script after markdown changes
- ✅ Edit style.css for styling
- ✅ Test locally before committing
- ✅ Keep Romanian language and professional tone
- ❌ Don't edit generated HTML files directly
- ❌ Don't over-complicate the build process
- ❌ Don't add unnecessary dependencies
- ❌ Don't break the simple static site structure
