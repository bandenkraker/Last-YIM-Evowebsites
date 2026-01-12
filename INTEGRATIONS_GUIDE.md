# Third-Party Integrations Guide

Complete handleiding voor het configureren van alle third-party diensten voor de YIM website.

## 1. Google Analytics (GA4)

### Setup
1. Ga naar [Google Analytics](https://analytics.google.com)
2. Maak een nieuw property aan voor yvelim.nl
3. Kies GA4 property type
4. Noteer je **Measurement ID** (format: G-XXXXXXXXXX)

### Implementatie
Open `index.html` en vervang `GA_MEASUREMENT_ID` met je echte ID:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); <!-- Vervang met je ID -->
</script>
```

### Goals Configureren
1. Ga naar Admin → Events in GA4
2. Maak conversie events aan:
   - `form_submission` - Contact formulier
   - `phone_click` - Telefoon klik
   - `email_click` - Email klik
   - `whatsapp_click` - WhatsApp klik

### Enhanced Event Tracking (Optioneel)
Voeg custom events toe aan `src/pages/Contact.tsx`:

```typescript
// Na succesvolle form submission
if (window.gtag) {
  window.gtag('event', 'form_submission', {
    'event_category': 'Contact',
    'event_label': 'Contact Form',
    'value': 1
  });
}
```

---

## 2. Google Search Console

### Setup
1. Ga naar [Google Search Console](https://search.google.com/search-console)
2. Voeg property toe: `https://www.yvelim.nl`
3. Verifieer via DNS TXT record of HTML file upload

### Sitemap Indienen
1. Genereer sitemap.xml (zie sectie Sitemap hieronder)
2. Submit sitemap URL: `https://www.yvelim.nl/sitemap.xml`

### URL Inspection
Na deployment:
1. Gebruik URL Inspection tool
2. Request indexing voor belangrijke pagina's
3. Monitor index coverage

---

## 3. Tidio Chat Widget (WhatsApp Integration)

### Setup
1. Registreer bij [Tidio](https://www.tidio.com)
2. Ga naar Settings → Channels
3. Verbind WhatsApp met je nummer: +31638927076
4. Kopieer je Tidio key

### Implementatie
Open `index.html` en vervang `YOUR_TIDIO_KEY`:

```html
<script>
  (function() {
    var s = document.createElement('script');
    s.async = true;
    s.src = '//code.tidio.co/XXXXXXXXXXXXXX.js'; <!-- Vervang met je key -->
    document.body.appendChild(s);
  })();
</script>
```

### Configuratie
1. **Widget Positie**: Rechts onder (default)
2. **Kleuren**: Match met YIM branding
   - Primary: #006400 (dark green)
   - Accent: #DAA520 (gold)
3. **Greeting Message**: "Hallo! Heeft u een vraag? Stuur een WhatsApp bericht."
4. **Operating Hours**: Stel beschikbare uren in

### Widget Customization
```javascript
// Optioneel: Custom styling via Tidio dashboard
{
  "color": "#006400",
  "position": "right",
  "bottomSpacing": "20px",
  "hideWhenOffline": false
}
```

---

## 4. HubSpot CRM Integration

### Setup
1. Registreer bij [HubSpot](https://www.hubspot.com)
2. Maak een nieuw formulier aan in Forms
3. Noteer Portal ID en Form GUID

### Form Implementation
Update `src/pages/Contact.tsx`:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const portalId = 'YOUR_PORTAL_ID'; // Vervang met je Portal ID
  const formGuid = 'YOUR_FORM_GUID'; // Vervang met je Form GUID

  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: [
            {
              objectTypeId: "0-1",
              name: 'firstname',
              value: formData.name.split(' ')[0]
            },
            {
              objectTypeId: "0-1",
              name: 'lastname',
              value: formData.name.split(' ').slice(1).join(' ') || formData.name.split(' ')[0]
            },
            {
              objectTypeId: "0-1",
              name: 'email',
              value: formData.email
            },
            {
              objectTypeId: "0-1",
              name: 'phone',
              value: formData.phone
            },
            {
              objectTypeId: "0-1",
              name: 'company',
              value: formData.company
            },
            {
              objectTypeId: "0-1",
              name: 'message',
              value: formData.message
            }
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title
          }
        })
      }
    );

    if (response.ok) {
      setSubmitSuccess(true);

      // Google Analytics event
      if (window.gtag) {
        window.gtag('event', 'form_submission', {
          'event_category': 'Contact',
          'event_label': 'Contact Form',
          'value': 1
        });
      }
    } else {
      console.error('HubSpot submission failed');
    }
  } catch (error) {
    console.error('Form submission error:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

### Workflows Setup
In HubSpot:
1. Maak workflow: "New Contact Form Submission"
2. Trigger: Form submission
3. Actions:
   - Send internal email notification
   - Create deal
   - Assign to Calvin
   - Send auto-reply email

### Email Notifications
Template voor auto-reply:
```
Onderwerp: Bedankt voor uw interesse in Yvel Interim Management

Beste [Naam],

Hartelijk dank voor uw bericht. Ik heb uw aanvraag goed ontvangen en
neem binnen 24 uur contact met u op.

Met vriendelijke groet,
Calvin Yvel
Yvel Interim Management

T: 06-38927076
E: calvinyvel@hotmail.com
W: www.yvelim.nl
```

---

## 5. reCAPTCHA v3 (Anti-Spam)

### Setup
1. Ga naar [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Registreer nieuwe site
3. Kies reCAPTCHA v3
4. Voeg domain toe: `yvelim.nl`
5. Noteer Site Key en Secret Key

### Frontend Implementation
Voeg toe aan `index.html` (voor `</head>`):

```html
<script src="https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY"></script>
```

Update `src/pages/Contact.tsx`:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Get reCAPTCHA token
  if (typeof window.grecaptcha !== 'undefined') {
    window.grecaptcha.ready(async () => {
      const token = await window.grecaptcha.execute('YOUR_SITE_KEY', {
        action: 'submit'
      });

      // Include token in form submission
      const formDataWithToken = {
        ...formData,
        recaptchaToken: token
      };

      // Continue with form submission...
    });
  }
};
```

### Backend Verification (Edge Function)
Maak Supabase Edge Function voor verificatie:

```typescript
const verifyRecaptcha = async (token: string, secretKey: string) => {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`
    }
  );

  const data = await response.json();
  return data.success && data.score >= 0.5;
};
```

---

## 6. Sitemap.xml Generator

Maak `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.yvelim.nl/</loc>
    <lastmod>2026-01-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.yvelim.nl/#about</loc>
    <lastmod>2026-01-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.yvelim.nl/#services</loc>
    <lastmod>2026-01-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.yvelim.nl/#contact</loc>
    <lastmod>2026-01-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.yvelim.nl/#privacy</loc>
    <lastmod>2026-01-07</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

---

## 7. robots.txt

Maak `public/robots.txt`:

```txt
User-agent: *
Allow: /

Sitemap: https://www.yvelim.nl/sitemap.xml

# Disallow admin/private areas (if any)
Disallow: /admin/
Disallow: /private/
```

---

## 8. LinkedIn Integration

### Company Page
1. Maak LinkedIn Company Page voor Yvel Interim Management
2. Voeg Calvin als admin toe
3. Complete profile:
   - Logo
   - Cover image
   - Company description
   - Website link

### Personal Profile
Update Calvin's LinkedIn:
1. Headline: "Finance Interim Manager | Business Control | FP&A Expert"
2. Experience: Voeg Yvel Interim Management toe
3. Featured: Voeg website link toe
4. Contact info: Zorg dat website vermeld staat

### Update Links
Vervang LinkedIn URLs in:
- `src/components/Footer.tsx`
- `src/pages/Contact.tsx`

Met echte LinkedIn URLs:
```typescript
// Voorbeeld
<a href="https://www.linkedin.com/in/calvin-yvel" ... >
<a href="https://www.linkedin.com/company/yvel-interim-management" ... >
```

---

## 9. Social Media Pixels (Optioneel)

### Facebook Pixel
Als u Facebook Ads wilt gebruiken:

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### LinkedIn Insight Tag
Voor LinkedIn Ads:

```html
<script type="text/javascript">
_linkedin_partner_id = "YOUR_PARTNER_ID";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
<script type="text/javascript">
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);
</script>
```

---

## 10. Email Service (Transactional)

Voor automated emails (form responses, etc.):

### SendGrid
```typescript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: formData.email,
  from: 'info@yvelim.nl',
  subject: 'Bedankt voor uw bericht',
  text: 'Hartelijk dank voor uw interesse...',
  html: '<strong>Hartelijk dank voor uw interesse...</strong>',
};

await sgMail.send(msg);
```

### Mailgun
```typescript
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY
});

mg.messages.create('yvelim.nl', {
  from: "YIM <info@yvelim.nl>",
  to: [formData.email],
  subject: "Bedankt voor uw bericht",
  text: "Hartelijk dank voor uw interesse...",
  html: "<h1>Hartelijk dank voor uw interesse...</h1>"
});
```

---

## Testing Checklist

Na alle integraties configureren:

- [ ] Google Analytics tracking werkt (check Real-Time)
- [ ] Tidio chat widget verschijnt
- [ ] HubSpot form submissions komen binnen
- [ ] reCAPTCHA score is visible in admin
- [ ] Email notifications werken
- [ ] Sitemap.xml is accessible
- [ ] Search Console verification werkt
- [ ] LinkedIn links werken correct
- [ ] Cookie consent beïnvloedt tracking correct

---

## Support & Documentation

### Google Analytics
- [GA4 Documentation](https://support.google.com/analytics)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)

### HubSpot
- [Forms API Documentation](https://legacydocs.hubspot.com/docs/methods/forms/submit_form)
- [HubSpot Academy](https://academy.hubspot.com)

### Tidio
- [Tidio Help Center](https://www.tidio.com/help/)
- [Widget Customization](https://www.tidio.com/panel/settings/widget-customization)

### reCAPTCHA
- [reCAPTCHA v3 Documentation](https://developers.google.com/recaptcha/docs/v3)

---

## Questions?

Voor vragen over integraties:
- Email: calvinyvel@hotmail.com
- Developer: Evowebsites.nl

**Succes met de integraties!**
