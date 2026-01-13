import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isNl = locale === 'nl';
  return {
    title: isNl ? 'YIM - Yvel Interim Management | Finance Expert' : 'YIM - Yvel Interim Management | Finance Expert',
    description: isNl 
      ? 'Ambiteuze finance expert met focus op inzicht en resultaat. 14+ jaar ervaring in business control, financial control en financial management.'
      : 'Ambitious finance expert focused on insight and results. 14+ years of experience in business control, financial control and financial management.',
    keywords: ['Interim Finance', 'Business Control', 'Financial Control', 'Finance Management', 'Calvin Yvel', 'YIM'],
    authors: [{ name: 'Calvin Yvel' }],
    openGraph: {
      title: 'YIM - Yvel Interim Management',
      description: isNl ? 'Strategische partner op het gebied van Finance' : 'Strategic partner in Finance',
      url: 'https://THISisYIM.com',
      siteName: 'Yvel Interim Management',
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'YIM - Yvel Interim Management',
      description: isNl ? 'Strategische partner op het gebied van Finance' : 'Strategic partner in Finance',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://THISisYIM.com/${locale}`,
      languages: {
        'nl': 'https://THISisYIM.com/nl',
        'en': 'https://THISisYIM.com/en',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Yvel Interim Management",
    "image": "https://THISisYIM.com/yim_logo.png",
    "@id": "https://THISisYIM.com",
    "url": "https://THISisYIM.com",
    "telephone": "+31638927076",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Nederland",
      "postalCode": "",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.1326,
      "longitude": 5.2913
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.linkedin.com/in/calvin-yvel-a418b630/"
    ]
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
