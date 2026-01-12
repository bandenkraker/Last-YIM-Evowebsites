# Yvel Interim Management (YIM) Website

Een professionele, moderne website voor Yvel Interim Management - Finance interim management diensten door Calvin Yvel.

## Functies

### Algemeen
- ✅ Volledig responsive design (mobiel, tablet, desktop)
- ✅ Modern, minimalistisch design met veel whitespace
- ✅ Snelle laadtijden met geoptimaliseerde assets
- ✅ Dutch language (Nederlands)
- ✅ EU-compliant (GDPR, AVG)

### SEO Optimalisatie
- ✅ Uitgebreide meta tags (title, description, keywords)
- ✅ Open Graph en Twitter Cards voor social media
- ✅ Structured data (JSON-LD schema)
- ✅ Semantic HTML structuur
- ✅ Alt-teksten voor alle afbeeldingen
- ✅ Lazy loading voor afbeeldingen
- ✅ Canonical URLs
- ✅ Google Analytics integratie (placeholder)
- ✅ Sitemap-ready structuur

### Design & UX
- ✅ Kleuren: Dark green (#006400), Gold (#DAA520), Wit, Lichtgrijs
- ✅ Fonts: Playfair Display (headings), Roboto (body), Montserrat (CTAs)
- ✅ Sticky navigation met smooth scroll
- ✅ Subtiele hover effects en transitions
- ✅ WCAG contrast compliance
- ✅ Duidelijke Call-to-Actions (CTAs)
- ✅ YIM logo met Crown icon (gouden leeuw vervangen door crown)

### Pagina's
1. **Home**: Hero sectie, kwaliteiten, actuele projecten, CTAs
2. **Over Ons**: Calvin's bio, reis/mijlpalen, kernwaarden, expertise
3. **Diensten**: Business Control, Financial Control, FP&A, Procesoptimalisatie, Finance Manager
4. **Contact**: Formulier, contactinfo, beschikbaarheid, WhatsApp link
5. **Privacy**: Volledig GDPR-compliant privacybeleid

### Compliance & Beveiliging
- ✅ GDPR-compliant cookie banner met accept/decline
- ✅ Privacybeleid pagina
- ✅ Form validatie
- ✅ SSL-ready (HTTPS assumed)
- ✅ Cookie consent management

### Integraties (Placeholders Ready)
- ✅ Google Analytics (GA_MEASUREMENT_ID placeholder)
- ✅ Tidio WhatsApp chat widget (YOUR_TIDIO_KEY placeholder)
- ✅ HubSpot CRM (form submission ready)
- ✅ reCAPTCHA v3 (ready voor implementatie)

## Technische Stack

- **Framework**: React 18 met TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Roboto, Montserrat)

## Installatie & Development

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev

# Build voor productie
npm run build

# Preview productie build
npm run preview

# Type checking
npm run typecheck

# Linting
npm run lint
```

## Configuratie voor Deployment

### 1. Google Analytics
Vervang `GA_MEASUREMENT_ID` in `index.html` met uw Google Analytics tracking ID:
```html
gtag('config', 'YOUR-GA-ID-HERE');
```

### 2. Tidio Chat Widget
Vervang `YOUR_TIDIO_KEY` in `index.html` met uw Tidio key:
```html
s.src = '//code.tidio.co/YOUR-ACTUAL-KEY.js';
```

### 3. HubSpot CRM Integratie
In `src/pages/Contact.tsx`, update de form submission functie om naar HubSpot API te posten:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Voorbeeld HubSpot API call
    const response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/:portalId/:formGuid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: [
          { name: 'firstname', value: formData.name.split(' ')[0] },
          { name: 'lastname', value: formData.name.split(' ').slice(1).join(' ') },
          { name: 'email', value: formData.email },
          { name: 'phone', value: formData.phone },
          { name: 'company', value: formData.company },
          { name: 'message', value: formData.message }
        ]
      })
    });

    if (response.ok) {
      setSubmitSuccess(true);
    }
  } catch (error) {
    console.error('Form submission error:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

### 4. reCAPTCHA v3
1. Registreer uw site bij [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Voeg het script toe aan `index.html`:
```html
<script src="https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY"></script>
```
3. Update het contactformulier om reCAPTCHA token op te nemen

### 5. Afbeeldingen
Vervang de Unsplash placeholder URLs met uw eigen afbeeldingen:
- Logo: Plaats in `/public/logo.png`
- Hero afbeelding: Professionele finance meeting
- About afbeelding: Calvin Yvel professionele foto
- Services afbeelding: Business charts/analytics

### 6. LinkedIn
Update LinkedIn URLs in `Footer.tsx` en `Contact.tsx` met het actuele LinkedIn profiel

## SEO Checklist voor Launch

- [ ] Vervang alle placeholder URLs met echte URLs
- [ ] Voeg sitemap.xml toe
- [ ] Voeg robots.txt toe
- [ ] Registreer bij Google Search Console
- [ ] Verifieer Google Analytics tracking
- [ ] Test alle meta tags met Facebook Debugger en Twitter Card Validator
- [ ] Test mobiele responsiveness
- [ ] Test laadsnelheid met PageSpeed Insights
- [ ] Verifieer alle links (interne en externe)
- [ ] Test formulier submissions
- [ ] Verifieer GDPR compliance

## Browser Ondersteuning

- Chrome (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- Edge (laatste 2 versies)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimalisaties

- Lazy loading voor alle afbeeldingen behalve above-the-fold
- Minified CSS en JavaScript in productie
- Async loading voor third-party scripts
- Optimized font loading met preconnect
- Efficient Tailwind CSS purging

## Contact Informatie

**Yvel Interim Management**
- Email: calvinyvel@hotmail.com
- Telefoon: 06-38927076
- WhatsApp: +31638927076

## Credits

Website gemaakt door [Evowebsites.nl](https://evowebsites.nl/)

## Licentie

© 2026 Yvel Interim Management. Alle rechten voorbehouden.
