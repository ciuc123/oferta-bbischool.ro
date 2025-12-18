# Specificații Tehnice - BBISchool.ro

## Stack Tehnologic

### Platformă Core
- **WordPress:** Versiunea 6.4+ (Latest)
- **PHP:** 8.1+
- **MySQL:** 8.0+ sau MariaDB 10.6+
- **Server:** Apache/Nginx cu HTTPS
- **Hosting:** Recomandat VPS/Cloud (DigitalOcean, AWS, Cloudways)

### Temă WordPress
**Opțiuni recomandate:**
1. **Astra Pro** - rapid, lightweight, SEO optimized
2. **GeneratePress Premium** - performanță excepțională
3. **Kadence Theme** - flexibil, modern, builder inclus

Toate temele sunt:
- GPL licensed
- Compatible cu Gutenberg și page builders
- Mobile-first responsive
- WooCommerce ready (pentru viitoare extensii)
- Translation ready (multilingual support)

---

## Funcționalități Principale

### 1. Showcase Evenimente

#### Plugin Principal: The Events Calendar Pro
**Funcționalități:**
- Calendar vizual interactiv (lunar, săptămânal, listă)
- Categorii evenimente (conferințe, workshopuri, excursii, competiții)
- Filtre avansate (dată, tip, locație)
- Event details: descriere, imagini gallery, organizatori, locație
- Google Maps integration
- Export iCal/Google Calendar
- Event countdown timer
- Featured events în homepage
- Archive pages optimizate

**Alternative:**
- EventON (design mai modern)
- Modern Events Calendar (foarte feature-rich)

#### Customizări:
- Template personalizat pentru single event
- Widget evenimente viitoare în sidebar
- Shortcode pentru embedding events în orice pagină
- Email notifications pentru evenimente noi

---

### 2. Informații Școală

#### A. Calendar Școlar
**Implementare:**
- Calendar Gutenberg block personalizat
- Sincronizare cu Google Calendar
- Categorii: vacanțe, examene, evenimente, zile libere
- View: lunar, anual
- Export/Print functionality
- Color coding pe categorii

#### B. Documente și Fișiere
**Plugin:** Download Manager sau Simple Download Monitor

**Structură:**
- **Regulamente:** regulament intern, regulament elevi, proceduri
- **Formulare:** înscriere, cereri, declarații
- **Programe:** orar, planificare anuală
- **Documente oficiale:** acreditări, statistici
- **Materiale educaționale:** ghiduri, prezentări

**Funcționalități:**
- Upload manager intuitiv
- Categorii și taguri
- Search functionality
- Download counter
- Access control (public/privat)
- Version control pentru documente
- Preview pentru PDF-uri

#### C. Secțiuni Informaționale
- Despre școală (istorie, misiune, valori)
- Echipa (profesori, staff, conducere)
- Infrastructură (clădiri, facilități, laboratoare)
- Rezultate academice (statistici, premii, alumni success)
- Contact (hartă, formular, date contact)

---

### 3. Formular Aplicare Evenimente

#### Plugin: Gravity Forms sau WPForms Pro

**Funcționalități formular:**

**Câmpuri:**
- Informații personale (nume, prenume, email, telefon)
- CNP (cu validare)
- Data nașterii (date picker)
- Adresă completă
- Școala/Clasa actuală
- Părinte/Tutore legal (nume, telefon, email)
- Selectare eveniment (dropdown dinamic)
- Informații suplimentare (textarea)
- Consimțământ GDPR (checkbox obligatoriu)
- Upload documente (foto copie CI, aviz medical - opțional)

**Validări:**
- Email valid
- Telefon format RO
- CNP validare algoritmică
- Câmpuri obligatorii marcate
- File size/type restrictions pentru uploads
- Anti-spam (reCAPTCHA v3)

**Post-submit:**
- Email confirmare către aplicant
- Email notificare către admin
- Save în database cu status (pending, approved, rejected)
- Redirect către pagină thank you
- Entry management în WordPress admin

**Dashboard Admin:**
- Lista aplicații (tabel sortable, filtrabil)
- Export CSV/Excel
- Bulk actions (approve, reject, delete)
- Status management
- Email template customization
- Statistici aplicații (grafice, rapoarte)

#### Alternative Forms:
- Formidable Forms (complex features)
- Fluent Forms (modern UI)
- Contact Form 7 + Addons (free option)

---

## Plugin-uri Esențiale

### SEO & Performance
- **Rank Math SEO** sau Yoast SEO Premium
  - Meta titles/descriptions
  - Schema markup
  - XML sitemap
  - Breadcrumbs
  - Social media integration
  
- **WP Rocket** (caching)
  - Page cache
  - Browser cache
  - GZIP compression
  - Minification (HTML, CSS, JS)
  - Lazy loading
  - Database optimization

- **ShortPixel** sau Imagify (image optimization)
  - Automatic compression
  - WebP conversion
  - Lazy loading images

### Security
- **Wordfence Security**
  - Firewall
  - Malware scanner
  - Login security
  - Two-factor authentication
  
- **UpdraftPlus** (backup)
  - Automatic scheduled backups
  - Cloud storage integration
  - One-click restore

### Functionality
- **Advanced Custom Fields (ACF) Pro**
  - Custom fields pentru evenimente
  - Flexible layouts
  - Repeater fields
  
- **Contact Form 7** sau alternatives
- **Social media plugins** (share buttons, feeds)
- **Google Analytics** integration
- **Cookie consent** (GDPR compliance)

---

## Structură Website

### Pagini Principale

```
Home (/)
├── Despre Noi (/despre)
│   ├── Istorie
│   ├── Misiune & Viziune
│   ├── Echipa
│   └── Facilități
├── Evenimente (/evenimente)
│   ├── Calendar Evenimente
│   ├── Evenimente Viitoare
│   ├── Evenimente Trecute
│   └── [Single Event] (/evenimente/nume-eveniment)
├── Informații (/informatii)
│   ├── Calendar Școlar (/informatii/calendar)
│   ├── Documente (/informatii/documente)
│   │   ├── Regulamente
│   │   ├── Formulare
│   │   └── Programe
│   ├── Admitere (/informatii/admitere)
│   └── FAQ
├── Aplică la Evenimente (/aplicare)
│   └── Formular Aplicare
├── Galerie (/galerie)
├── Blog/Noutăți (/blog)
└── Contact (/contact)
```

### Meniuri
- **Header Menu:** principale
- **Footer Menu:** legal, quick links
- **Sidebar Widgets:** evenimente, calendar, documents

---

## Design Responsive

### Breakpoints
- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1024px
- **Desktop:** 1025px - 1440px
- **Large Desktop:** 1441px+

### Mobile-first Features
- Hamburger menu
- Touch-friendly buttons (min 44x44px)
- Optimized images pentru mobile
- Fast loading (< 3s)
- Readable fonts (min 16px body)
- Simplified forms pentru mobile

---

## SEO Implementation

### On-page SEO
- Semantic HTML5
- Proper heading hierarchy (H1-H6)
- Alt texts for images
- Internal linking strategy
- Breadcrumbs
- URL structure optimized
- Meta descriptions unique

### Technical SEO
- SSL certificate
- Sitemap XML
- Robots.txt optimized
- Schema.org markup:
  - Organization
  - Event
  - BreadcrumbList
  - Educational Organization
- Canonical URLs
- 301 redirects pentru old pages

### Performance SEO
- Page speed < 3s
- Core Web Vitals optimized
- Mobile-friendly test passed
- No mixed content errors
- Minified CSS/JS
- CDN implementation (optional)

### Content SEO
- Keyword research
- Content optimization
- Blog strategy
- Regular updates

---

## Integration & APIs

### Google Services
- Google Analytics 4
- Google Search Console
- Google Maps
- Google Calendar sync
- reCAPTCHA v3

### Social Media
- Facebook Open Graph
- Twitter Cards
- Instagram feed (optional)
- Social sharing buttons
- WhatsApp contact

### Email
- SMTP configuration (SendGrid, Mailgun, or hosting SMTP)
- Transactional emails
- Newsletter signup (optional - Mailchimp/Sendinblue)

---

## Admin Panel Customization

### Custom Dashboard
- Welcoming widgets
- Quick stats (evenimente, aplicații, vizitatori)
- Quick actions
- Recent activity feed
- Documentation links

### User Roles
- **Administrator:** full access
- **Editor:** content management
- **Author:** blog posts
- **Subscriber:** formular submissions, profile management

### Custom Admin Menus
- Evenimente grouping
- Aplicații management
- Documente management
- Settings dedicated page

---

## Testing & Quality Assurance

### Pre-launch Checklist
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness toate devices
- [ ] Forms testing și validation
- [ ] Email notifications funcționează
- [ ] SEO audit (Rank Math/Yoast)
- [ ] Performance test (Google PageSpeed, GTmetrix)
- [ ] Security scan (Wordfence)
- [ ] Backup system functional
- [ ] SSL verificat
- [ ] 404 pages handled
- [ ] Contact forms spam protection
- [ ] GDPR compliance check
- [ ] Accessibility check (WCAG basics)

### Tools
- Google PageSpeed Insights
- GTmetrix
- Pingdom
- Mobile-Friendly Test
- SSL Checker
- Security Headers Check

---

## Maintenance & Support

### Post-Launch Support (3 luni incluse)
- Bug fixes
- Security updates
- WordPress core updates
- Plugin updates
- Content updates assistance
- Technical support (email)

### Optional Maintenance Package
- **Basic:** Monthly updates, monitoring (€50/lună)
- **Standard:** Weekly monitoring, updates, monthly reports (€100/lună)
- **Premium:** Daily monitoring, priority support, performance optimization (€200/lună)

---

## Timeline Implementare

### Faza 1: Planning & Design (1 săptămână)
- Kick-off meeting
- Content gathering
- Design mockups
- Design approval

### Faza 2: Development (2-3 săptămâni)
- WordPress setup
- Theme installation și customization
- Plugin configuration
- Content migration
- Functionality implementation
- Forms setup

### Faza 3: Testing & Launch (1 săptămână)
- QA testing
- Client review
- Feedback implementation
- Training session
- Go live

### Total: 4-6 săptămâni

---

## Deliverables

1. Website complet funcțional
2. Admin training (video/live session)
3. Documentation:
   - User manual (content management)
   - Technical documentation
   - SEO guidelines
4. Source code access (if requested)
5. 3 months support

---

## Budgets Estimative

### Opțiunea 1: Modern Educational
- Design & Development: €1,500 - €2,000
- Premium plugins (annual): €200 - €300
- Theme license (annual): €60 - €100

### Opțiunea 2: Dynamic Interactive
- Design & Development: €2,000 - €2,800
- Premium plugins (annual): €300 - €400
- Theme license (annual): €100 - €150

### Opțiunea 3: Classic Academic
- Design & Development: €1,200 - €1,800
- Premium plugins (annual): €150 - €250
- Theme license (annual): €60 - €100

**Note:**
- Prețurile includ implementarea completă
- Hosting separat (€10-50/lună)
- Domain separat (€10-15/an)
- SSL inclus în majoritatea hosting-urilor

---

## Contact & Next Steps

Pentru a începe proiectul avem nevoie de:
1. Aprobare design option
2. Access la hosting (sau setup nou hosting)
3. Content assets (logo, imagini, texte)
4. Lista evenimente actuale
5. Documente pentru upload

**Timeline start:** 2-3 zile de la aprobare și primirea materialelor
