'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('common');
  const locale = useLocale();

  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href={`/${locale}`} className="flex items-center">
              <Image
                src="/yim_logo.png"
                alt="Yvel Interim Management Logo"
                width={100}
                height={35}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              {t('description')}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Navigatie</h4>
            <ul className="space-y-4">
              <li><Link href={`/${locale}`} className="text-gray-500 hover:text-yim-green transition-colors">{t('home')}</Link></li>
              <li><Link href={`/${locale}/services`} className="text-gray-500 hover:text-yim-green transition-colors">{t('services')}</Link></li>
              <li><Link href={`/${locale}/about`} className="text-gray-500 hover:text-yim-green transition-colors">{t('about')}</Link></li>
              <li><Link href={`/${locale}/contact`} className="text-gray-500 hover:text-yim-green transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500">
              <li>Email: {t('email')}</li>
              <li>Locatie: {t('location')}</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Yvel Interim Management. Alle rechten voorbehouden.
          </p>
          <p className="text-gray-400 text-sm">
            Website gemaakt door <a href="https://www.evowebsites.nl" target="_blank" rel="noopener noreferrer" className="text-yim-green hover:underline">Evowebsites.nl</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
