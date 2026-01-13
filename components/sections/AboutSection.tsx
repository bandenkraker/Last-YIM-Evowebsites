'use client';

import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t('title')}
            </h2>
            <p className="text-xl text-yim-green font-semibold uppercase tracking-widest">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="text-lg text-gray-600 leading-relaxed space-y-8 text-left bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-yim-green first-letter:mr-3 first-letter:float-left">
              {t('description1')}
            </p>
            <p>
              {t('description2')}
            </p>
            <p>
              {t('description3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
