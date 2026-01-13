'use client';

import { useTranslations, useLocale } from 'next-intl';
import { CheckCircle, TrendingUp, Users, Target, Award, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WhyChooseYIM() {
  const t = useTranslations('about');
  const locale = useLocale();

  const qualities = [
    {
      icon: TrendingUp,
      title: 'Proactief',
      description: 'Anticipeer op uitdagingen en benut kansen voordat ze zich voordoen.'
    },
    {
      icon: Target,
      title: 'Resultaatgericht',
      description: 'Focus op meetbare resultaten en continue verbetering van processen.'
    },
    {
      icon: Users,
      title: 'Inspirerend Leiderschap',
      description: 'Motiveren en verbinden van teams om gezamenlijk resultaat te behalen.'
    },
    {
      icon: Award,
      title: '14+ jaar ervaring',
      description: 'Bewezen expertise in Business & Financial Control en Finance Management, zelfstandig verantwoordelijk.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Waarom kiezen voor <span className="text-yim-green">YIM</span>?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Onze kracht ligt in het combineren van financiële vakkennis met een hands-on, resultaatgerichte aanpak, waardoor organisaties sneller overzicht, rust en duurzame impact bereiken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:border-yim-green hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-yim-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yim-green group-hover:scale-110 transition-all duration-500">
                <quality.icon className="w-8 h-8 text-yim-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{quality.title}</h3>
              <p className="text-gray-600 leading-relaxed">{quality.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            href={`/${locale}/about`}
            className="inline-flex items-center space-x-2 text-yim-green font-bold text-lg hover:underline group"
          >
            <span>{t('view_services')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
