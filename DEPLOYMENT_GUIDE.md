# Deployment Guide - Yvel Interim Management Website

Complete handleiding voor het deployen van de YIM website naar productie.

## Pre-Deployment Checklist

### 1. Content Verificatie
- [ ] Alle teksten zijn gecontroleerd op spelling en grammatica
- [ ] Contactgegevens zijn correct (email, telefoonnummer)
- [ ] LinkedIn en social media links zijn actueel
- [ ] Alle placeholder content is vervangen

### 2. Afbeeldingen
- [ ] Logo is toegevoegd aan `/public/logo.png`
- [ ] Favicon is toegevoegd aan `/public/favicon.svg`
- [ ] Open Graph afbeelding is toegevoegd aan `/public/og-image.jpg`
- [ ] Hero afbeeldingen zijn geoptimaliseerd en geüpload
- [ ] Alle Unsplash placeholder URLs zijn vervangen

### 3. Third-Party Integraties
- [ ] Google Analytics tracking ID is geconfigureerd
- [ ] Tidio chat widget key is toegevoegd
- [ ] reCAPTCHA keys zijn geconfigureerd (optioneel)
- [ ] HubSpot form integration is geïmplementeerd (optioneel)

### 4. SEO & Meta Tags
- [ ] Canonical URLs zijn correct
- [ ] Meta descriptions zijn uniek per pagina
- [ ] Open Graph afbeeldingen zijn correct
- [ ] Structured data (JSON-LD) is gevalideerd
- [ ] Sitemap.xml is gegenereerd
- [ ] robots.txt is geconfigureerd

### 5. Performance
- [ ] Build is getest en succesvol (`npm run build`)
- [ ] Type checking is zonder errors (`npm run typecheck`)
- [ ] Linting is zonder warnings (`npm run lint`)
- [ ] Alle afbeeldingen zijn gecomprimeerd
- [ ] Lazy loading is geïmplementeerd

### 6. Security & Compliance
- [ ] SSL certificaat is geconfigureerd (HTTPS)
- [ ] Cookie consent banner werkt correct
- [ ] Privacy policy is up-to-date
- [ ] GDPR compliance is geverifieerd
- [ ] Form validation werkt correct

## Deployment Opties

### Optie 1: Netlify (Aanbevolen voor snelheid en ease-of-use)

#### Stap 1: Build Configuratie
Netlify detecteert automatisch Vite configuratie, maar verifieer:

**netlify.toml** (maak dit bestand aan):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Stap 2: Deploy via Netlify UI
1. Push code naar GitHub/GitLab
2. Log in op [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Selecteer je repository
5. Build settings worden automatisch gedetecteerd
6. Click "Deploy site"

#### Stap 3: Configureer Custom Domain
1. Ga naar Site settings → Domain management
2. Voeg `www.yvelim.nl` toe als custom domain
3. Configureer DNS records bij je domain provider:
   ```
   Type: CNAME
   Name: www
   Value: [your-site].netlify.app
   ```

#### Stap 4: Omgevingsvariabelen (indien nodig)
1. Ga naar Site settings → Environment variables
2. Voeg keys toe voor API's (HubSpot, etc.)

### Optie 2: Vercel

#### Stap 1: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

Of via Vercel UI:
1. Push code naar GitHub
2. Import project op [Vercel](https://vercel.com)
3. Deploy wordt automatisch gestart

#### Stap 2: Custom Domain
1. Ga naar Project settings → Domains
2. Voeg `www.yvelim.nl` toe
3. Configureer DNS zoals aangegeven

### Optie 3: Traditional Hosting (cPanel/Plesk)

#### Stap 1: Build Lokaal
```bash
npm run build
```

#### Stap 2: Upload
1. Upload inhoud van `/dist` folder via FTP/SFTP
2. Plaats bestanden in public_html of www folder

#### Stap 3: .htaccess Configuratie
Maak `.htaccess` in root folder:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

## Post-Deployment Checklist

### 1. Functionele Tests
- [ ] Alle pagina's laden correct
- [ ] Navigatie werkt op alle pagina's
- [ ] Formulier kan worden verzonden
- [ ] Cookie banner werkt correct
- [ ] Mobiele responsiveness is correct
- [ ] Links openen correct (internal & external)

### 2. Performance Tests
- [ ] Google PageSpeed Insights score > 90
- [ ] Alle afbeeldingen laden snel
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.5s

Tools:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### 3. SEO Setup
- [ ] Registreer bij Google Search Console
- [ ] Submit sitemap.xml
- [ ] Verifieer indexing status
- [ ] Test rich results met [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verifieer Open Graph met [Facebook Debugger](https://developers.facebook.com/tools/debug/)

### 4. Analytics Setup
- [ ] Verifieer Google Analytics tracking
- [ ] Stel goals/conversies in (formulier submissions)
- [ ] Test event tracking
- [ ] Configureer Search Console in Analytics

### 5. Security
- [ ] SSL certificaat is actief en geldig
- [ ] HTTPS redirect werkt
- [ ] Security headers zijn geconfigureerd
- [ ] Test met [SSL Labs](https://www.ssllabs.com/ssltest/)

### 6. Monitoring
- [ ] Stel uptime monitoring in (bijv. UptimeRobot)
- [ ] Configureer error tracking (bijv. Sentry)
- [ ] Stel email alerts in voor downtime
- [ ] Backup strategie is geconfigureerd

## Domain & DNS Configuratie

### Aanbevolen DNS Records

Voor **yvelim.nl** en **www.yvelim.nl**:

```
Type: A
Name: @
Value: [Server IP Address]

Type: CNAME
Name: www
Value: yvelim.nl

Type: TXT (SPF)
Name: @
Value: v=spf1 include:_spf.google.com ~all

Type: TXT (DMARC)
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:calvinyvel@hotmail.com
```

Voor Netlify/Vercel, gebruik hun specifieke instructies voor DNS configuratie.

## Email Configuratie

Als u professionele email wilt (info@yvelim.nl):

### Optie 1: Google Workspace
1. Registreer bij [Google Workspace](https://workspace.google.com)
2. Verifieer domain ownership
3. Configureer MX records zoals aangegeven

### Optie 2: Microsoft 365
1. Registreer bij [Microsoft 365](https://www.microsoft.com/microsoft-365)
2. Voeg domain toe
3. Configureer DNS records

### Optie 3: Domain Email (via hosting provider)
Meeste hosting providers bieden email hosting:
1. Maak email accounts aan in cPanel/Plesk
2. MX records zijn meestal automatisch geconfigureerd

## Onderhoud & Updates

### Regelmatig (Wekelijks)
- Monitor website uptime
- Check analytics voor problemen
- Verifieer formulier submissions werken

### Maandelijks
- Review en update content indien nodig
- Check voor broken links
- Update dependencies (`npm update`)
- Backup website files en database

### Kwartaal
- Performance audit
- SEO audit
- Security audit
- Update npm packages naar laatste versies

## Troubleshooting

### Website laadt niet
1. Check DNS propagatie: [WhatsMyDNS](https://whatsmydns.net)
2. Verifieer SSL certificaat status
3. Check hosting server status
4. Review build logs voor errors

### Formulier werkt niet
1. Check console voor JavaScript errors
2. Verifieer API endpoints zijn correct
3. Test zonder ad-blocker
4. Check CORS configuratie

### Trage laadtijd
1. Optimaliseer afbeeldingen verder
2. Enable CDN (Cloudflare, etc.)
3. Check server response time
4. Review third-party script loading

### SEO problemen
1. Verifieer robots.txt niet te restrictief is
2. Check indexing status in Search Console
3. Verifieer meta tags correct zijn
4. Test structured data

## Support Contact

Voor technische vragen over de website:
- Developer: Evowebsites.nl - https://evowebsites.nl/

Voor business/content vragen:
- Calvin Yvel
- Email: calvinyvel@hotmail.com
- Telefoon: 06-38927076

## Emergency Rollback

Als er problemen zijn na deployment:

### Netlify/Vercel
1. Ga naar Deploys overzicht
2. Vind laatste werkende deploy
3. Click "Publish deploy" op oude versie

### Traditional Hosting
1. Restore backup van `/dist` folder
2. Upload via FTP
3. Clear browser cache

## Conclusie

Volg deze checklist stap voor stap voor een soepele deployment. Test grondig voor en na deployment.

Bij vragen, neem contact op met Evowebsites.nl of Calvin Yvel.

**Succes met de launch van Yvel Interim Management!**
