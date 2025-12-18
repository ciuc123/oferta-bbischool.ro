# 🌐 BBISchool.ro - Website Oferta

Acest repository conține oferta completă pentru proiectul de refacere a website-ului BBISchool.ro.

## 📋 Conținut

- **[Oferta Comercială](oferta.html)** - Ofertă completă pentru refacere website, optimizare design, încărcare materiale, implementare funcționalități și SEO
- **[Opțiuni Design](design-options.html)** - Trei variante de design: Modern Educational, Dynamic Interactive și Classic Academic
- **[Specificații Tehnice](technical-specs.html)** - Detalii complete despre stack tehnologic, funcționalități, plugin-uri, timeline și budget
- **[Concepte Vizuale](visual-mockups.html)** - Mockup-uri vizuale detaliate pentru homepage, pagină eveniment și formular aplicare

## 🚀 Acces Online

Website-ul este disponibil online la: **[https://ciuc123.github.io/oferta-bbischool.ro/](https://ciuc123.github.io/oferta-bbischool.ro/)**

### 📌 Activare GitHub Pages

Pentru a activa GitHub Pages (dacă nu este deja activat):

1. Mergi la Settings → Pages în repository
2. Sub "Source", selectează "GitHub Actions"
3. Website-ul va fi automat deployed la fiecare push

Alternativ, poți folosi branch-ul curent:
1. Mergi la Settings → Pages
2. Sub "Source", selectează "Deploy from a branch"
3. Alege branch-ul `copilot/make-offer-visible-online` și folderul `/ (root)`
4. Click "Save"

## 🔧 Dezvoltare Locală

Pentru a rula website-ul local:

1. Clonează repository-ul:
   ```bash
   git clone https://github.com/ciuc123/oferta-bbischool.ro.git
   cd oferta-bbischool.ro
   ```

2. Deschide `index.html` în browser sau folosește un server local:
   ```bash
   # Opțiunea 1: Python
   python -m http.server 8000
   
   # Opțiunea 2: Node.js
   npx http-server
   ```

3. Accesează `http://localhost:8000` în browser

## 📝 Actualizare Conținut

Pentru a actualiza conținutul:

1. Editează fișierele Markdown (`.md`)
2. Rulează script-ul de build pentru a regenera HTML-urile:
   ```bash
   npm install
   node build.js
   ```

## 🎨 Tehnologii

- HTML5
- CSS3 (Responsive Design)
- JavaScript (pentru conversie Markdown → HTML)
- GitHub Pages (hosting)

## 📱 Responsive Design

Website-ul este optimizat pentru toate dispozitivele:
- 📱 Mobile (< 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (> 1024px)

## 📞 Contact

Pentru întrebări sau clarificări despre ofertă, vă rugăm să ne contactați.

---

**Versiune:** 1.0  
**Data:** Decembrie 2024  
**Proiect:** BBISchool.ro WordPress Website
