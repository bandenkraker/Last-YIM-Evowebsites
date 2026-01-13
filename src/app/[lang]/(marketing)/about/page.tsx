'use client';

import { BookOpen, Building2, GraduationCap, Landmark, ShieldCheck, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

export default function AboutPage() {
  const t = useTranslations('about');
  const [activeTimeline, setActiveTimeline] = useState<number>(0);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timeline = [
    {
      icon: BookOpen,
      title: '1. Bachelor Finance & Control',
      period: 'Opleiding',
      description: 'Brede basis in bedrijfseconomie met focus op management, finance en organisatorische processen.'
    },
    {
      icon: Building2,
      title: '2. USG Finance NL',
      period: 'Carrière',
      description: 'Start carrière als finance professional. Diverse opdrachten vervuld bij uiteenlopende opdrachtgevers waar de expertise in controlling en finance verder is ontwikkeld.'
    },
    {
      icon: GraduationCap,
      title: '3. Master in Controlling (MSc)',
      period: 'Opleiding',
      description: 'Academische opleiding met diepgaande focus op controlling en finance, gericht op ontwikkeling tot financieel business partner en strategisch adviseur.'
    },
    {
      icon: Landmark,
      title: '4. TriFinance Nederland',
      period: 'Carrière',
      description: 'Vervolg en verdieping van carrière als finance professional. In diverse rollen en bij uiteenlopende opdrachtgevers actief geweest op het snijvlak van controlling, finance en business.'
    },
    {
      icon: ShieldCheck,
      title: '5. Yvel Interim Management (YIM)',
      period: 'Heden',
      description: 'Opgericht om organisaties tijdelijk te ondersteunen met daadkrachtige financiële expertise. Gespecialiseerd in Business Control, Financial Control en Finance Management.'
    },
    {
      icon: Heart,
      title: '6. Stichting SVWP',
      period: 'Nevenactiviteit',
      description: 'Als penningmeester betrokken bij een maatschappelijke stichting die slachtoffers van wraakporno en online seksueel misbruik ondersteunt.'
    }
  ];

  useEffect(() => {
    const observers = timelineRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveTimeline(index);
          });
        },
        { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen">
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/Weg.png"
              alt="Calvin Yvel Career Journey"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-32 text-white text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20 mx-auto">
                <GraduationCap className="w-5 h-5" />
                <span>Master in Controlling</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                {t('title')}
              </h1>
              <p className="text-2xl font-medium opacity-90">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-20 text-gray-900">
                {t('journey')}
              </h2>

              <div className="relative">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100"></div>
                <div 
                  className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-yim-green transition-all duration-700 ease-out"
                  style={{ height: `${((activeTimeline + 1) / timeline.length) * 100}%` }}
                ></div>

                <div className="space-y-16">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      ref={(el) => (timelineRefs.current[index] = el)}
                      className={`relative flex flex-col md:flex-row gap-8 ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="bg-gray-50 rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:border-yim-green hover:bg-white hover:shadow-xl transition-all duration-500 group">
                          <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                            <div className="w-14 h-14 bg-yim-green rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-yim-green/20">
                              <item.icon size={28} />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                              <p className="text-yim-green font-bold text-sm uppercase tracking-wider">{item.period}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                        </div>
                      </div>
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-yim-green -ml-2 z-10 top-12"></div>
                      <div className="flex-1 hidden md:block"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
