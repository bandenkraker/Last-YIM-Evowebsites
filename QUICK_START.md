# Quick Start Guide - Yvel Interim Management Website

Welkom bij uw nieuwe professionele website! Deze handleiding helpt u snel aan de slag.

## Wat Heeft U Ontvangen?

Een complete, moderne website met:
- ✅ 5 pagina's (Home, Over Ons, Diensten, Contact, Privacy)
- ✅ Volledig responsive (werkt op alle apparaten)
- ✅ SEO geoptimaliseerd
- ✅ GDPR-compliant cookie banner
- ✅ Contact formulier
- ✅ Klaar voor Google Analytics & WhatsApp chat
- ✅ Professional design met uw branding (groen & goud)

## Eerste 5 Stappen

### 1. Review de Content
Controleer alle teksten op de website:
- Home pagina - uw expertise en huidige projecten
- Over Ons - uw persoonlijke verhaal
- Diensten - uw service aanbod
- Contact - uw contactgegevens

**Wijzigingen nodig?** De meeste tekst staat in deze bestanden:
- `src/pages/Home.tsx`
- `src/pages/About.tsx`
- `src/pages/Services.tsx`
- `src/pages/Contact.tsx`

### 2. Voeg Uw Afbeeldingen Toe
De website gebruikt momenteel placeholder afbeeldingen. Vervang deze met:
- **Logo**: Uw YIM logo → plaats in `/public/logo.png`
- **Profielfoto**: Professionele foto van uzelf
- **Business foto's**: Kantoor, team, projecten

Zie `public/ASSETS_GUIDE.md` voor details.

### 3. Configureer Integraties
Voor volledige functionaliteit:

**Google Analytics** (om bezoekers te tracken):
1. Maak gratis account op analytics.google.com
2. Kopieer uw tracking ID
3. Vervang `GA_MEASUREMENT_ID` in `index.html`

**Tidio Chat** (voor WhatsApp integratie):
1. Registreer op tidio.com
2. Verbind uw WhatsApp nummer (06-38927076)
3. Kopieer de key en vervang `YOUR_TIDIO_KEY` in `index.html`

Zie `INTEGRATIONS_GUIDE.md` voor uitgebreide instructies.

### 4. Test de Website Lokaal
Open een terminal en run:
```bash
npm install
npm run dev
```
Open browser op `http://localhost:5173`

### 5. Deploy naar Internet
Kies één van deze opties:

**Optie A: Netlify (Makkelijkst)**
1. Ga naar netlify.com
2. Verbind uw GitHub account
3. Deploy met één klik

**Optie B: Vercel**
1. Ga naar vercel.com
2. Import project
3. Deploy automatisch

**Optie C: Traditionele hosting**
1. Run `npm run build`
2. Upload `/dist` folder via FTP

Zie `DEPLOYMENT_GUIDE.md` voor gedetailleerde stappen.

## Veelgestelde Vragen

### Hoe wijzig ik teksten?
1. Open het juiste bestand (bijv. `src/pages/Home.tsx`)
2. Zoek de tekst die u wilt wijzigen
3. Pas aan en sla op
4. Run `npm run build` en re-deploy

### Hoe voeg ik nieuwe diensten toe?
In `src/pages/Services.tsx`, zoek het `services` array en voeg toe:
```typescript
{
  icon: YourIcon,
  title: 'Nieuwe Dienst',
  description: 'Beschrijving...',
  benefits: [
    'Voordeel 1',
    'Voordeel 2',
    // etc.
  ],
  color: 'from-green-500 to-green-600'
}
```

### Hoe wijzig ik kleuren?
Kleuren zijn gedefinieerd in:
- `src/index.css` - globale styles
- Tailwind classes in components (bijv. `bg-green-900`, `text-yellow-600`)

Huidige kleuren:
- Groen: `#006400` (green-900)
- Goud: `#DAA520` (yellow-600)

### Werkt het formulier?
Het formulier is klaar maar moet nog verbonden worden met:
- HubSpot CRM (voor leads), OF
- Email service (SendGrid, Mailgun), OF
- Uw eigen email server

Zie `INTEGRATIONS_GUIDE.md` sectie 4 voor setup.

### Is de website veilig?
Ja! De website:
- ✅ Is klaar voor HTTPS/SSL
- ✅ Heeft GDPR-compliant cookie consent
- ✅ Heeft form validatie
- ✅ Kan beveiligd worden met reCAPTCHA

Na deployment, zorg voor SSL certificaat (gratis via Let's Encrypt of hosting provider).

## Project Structuur

```
project/
├── src/
│   ├── components/      # Herbruikbare componenten
│   │   ├── Header.tsx   # Navigatie
│   │   ├── Footer.tsx   # Footer met Evowebsites credit
│   │   └── CookieConsent.tsx
│   ├── pages/           # Website pagina's
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── Privacy.tsx
│   ├── App.tsx          # Main app met routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Styles
├── public/              # Statische bestanden
│   ├── sitemap.xml      # Voor SEO
│   ├── robots.txt       # Voor search engines
│   └── favicon.svg      # Website icon
├── index.html           # HTML template met SEO tags
└── package.json         # Dependencies
```

## Belangrijke Bestanden

| Bestand | Doel |
|---------|------|
| `README.md` | Technische documentatie |
| `DEPLOYMENT_GUIDE.md` | Stap-voor-stap deployment instructies |
| `INTEGRATIONS_GUIDE.md` | Setup voor Google Analytics, Tidio, etc. |
| `public/ASSETS_GUIDE.md` | Afbeeldingen specificaties |
| `QUICK_START.md` | Deze handleiding |

## Ondersteuning & Updates

### Content Wijzigingen
Voor kleine tekst wijzigingen:
1. Edit de relevante `.tsx` bestanden
2. Test lokaal met `npm run dev`
3. Build met `npm run build`
4. Re-deploy

### Design Wijzigingen
Voor layout/kleur wijzigingen:
1. Edit `src/index.css` of component files
2. Test, build, deploy

### Grote Wijzigingen
Voor nieuwe features of pagina's, neem contact op met:
- **Evowebsites.nl** - https://evowebsites.nl/

### Technical Support
Voor technische vragen:
- Developer: Evowebsites.nl
- Email: [via contact form op website]

## Checklist voor Launch

Voor u live gaat:
- [ ] Alle teksten zijn gecontroleerd
- [ ] Eigen afbeeldingen zijn toegevoegd
- [ ] Logo is toegevoegd
- [ ] Google Analytics is geconfigureerd
- [ ] Tidio chat is verbonden
- [ ] Contactgegevens zijn correct
- [ ] LinkedIn links zijn bijgewerkt
- [ ] Formulier is getest
- [ ] Website is getest op mobiel
- [ ] SSL certificaat is actief
- [ ] Domain is gekoppeld

## Volgende Stappen

1. **Week 1**: Review content, verzamel afbeeldingen
2. **Week 2**: Configureer integraties, test volledig
3. **Week 3**: Deploy naar productie domain
4. **Week 4**: Monitor analytics, optimaliseer

## Tips voor Succes

### SEO
- Update content regelmatig (bijv. blog posts)
- Claim uw Google Business Profile
- Deel op LinkedIn en social media
- Monitor positie in Google Search Console

### Content Marketing
- Deel expertise via LinkedIn posts
- Schrijf artikelen over finance trends
- Showcase succesverhalen (met toestemming)
- Update projecten sectie regelmatig

### Conversie Optimalisatie
- Monitor welke pagina's meeste bezoekers krijgen
- Test verschillende CTAs
- A/B test formulier velden
- Voeg testimonials toe (indien beschikbaar)

## Emergency Contact

Als iets niet werkt:
1. Check de console voor errors (F12 in browser)
2. Verifieer build succesvol was (`npm run build`)
3. Check deployment logs
4. Contact Evowebsites.nl

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## Conclusie

U heeft nu een professionele, moderne website die klaar is voor deployment!

Volg de stappen in deze handleiding en `DEPLOYMENT_GUIDE.md` voor een soepele lancering.

**Veel succes met Yvel Interim Management!**

---

*Website gebouwd door [Evowebsites.nl](https://evowebsites.nl/)*
*Januari 2026*
