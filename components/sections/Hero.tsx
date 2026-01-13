'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');
  const tc = useTranslations('common');
  const locale = useLocale();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                {t.rich('title', {
                  finance: (chunks) => <span className="text-yim-green">{chunks}</span>
                })}
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
                {t('subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={`/${locale}/contact`}
                className="w-full sm:w-auto bg-yim-green text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-yim-green/90 transition-all shadow-lg shadow-yim-green/20 text-center"
              >
                {tc('contact')}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-100 px-10 py-4 rounded-full font-bold text-lg hover:border-yim-green hover:text-yim-green transition-all text-center"
              >
                {tc('services')}
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-12 pt-12 border-t border-gray-100">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-yim-green">14+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{t('experience')}</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-yim-green">20+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{t('projects')}</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-yim-green">100%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{t('commitment')}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200">
              <Image
                src="/calvin.png"
                alt="Calvin Yvel - Interim Finance Manager"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 hidden md:block animate-bounce-slow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yim-green/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-yim-green" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">14+ Jaar</div>
                  <div className="text-sm text-gray-500">{t('finance_expertise')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-yim-green/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gray-50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2" />
    </section>
  );
}
