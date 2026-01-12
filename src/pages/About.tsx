import { GraduationCap, Briefcase, Heart, TrendingUp, Users, Award, Rocket } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const [activeTimeline, setActiveTimeline] = useState<number>(0);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const values = [
    {
      icon: TrendingUp,
      title: 'Daadkracht',
      description: 'Wij nemen verantwoordelijkheid, leveren resultaat en pakken uitdagingen actief aan.'
    },
    {
      icon: Users,
      title: 'Transparantie',
      description: 'Open communicatie, duidelijke inzichten en eerlijkheid vormen de basis van ons werk.'
    },
    {
      icon: Heart,
      title: 'Verbondenheid',
      description: 'Finance altijd gekoppeld aan de business, met oog voor mensen, samenwerking en duurzame impact.'
    }
  ];

  const expertise = [
    'Business Control',
    'FP&A',
    'Procesoptimalisatie & Efficiency',
    'Financial Control',
    'Team Leadership & Development',
    'Accounting'
  ];

  const timeline = [
    {
      icon: GraduationCap,
      title: '1. Bachelor of Business Administration (BBA)',
      period: 'Opleiding',
      description: 'Brede basis in bedrijfseconomie met focus op management, finance en organisatorische processen.'
    },
    {
      icon: Briefcase,
      title: '2. USG Finance NL (5 jaar)',
      period: 'Carriere',
      description: 'Start carrière, als finance professional, hier zijn diverse opdrachten vervult bij uiteenlopende opdrachtgevers en is de expertise in controlling en finance verder ontwikkeld.'
    },
    {
      icon: GraduationCap,
      title: '3. Master in Controlling',
      period: 'Opleiding',
      description: 'Academische opleiding met diepgaande focus op controlling en finance, gericht op ontwikkeling tot financieel business partner en strategisch adviseur.'
    },
    {
      icon: Briefcase,
      title: '4. TriFinance Nederland (9 jaar)',
      period: 'Carriere',
      description: 'Vervolg en verdieping van carrière als finance professional. In diverse rollen en bij uiteenlopende opdrachtgevers actief geweest op het snijvlak van controlling, finance en business. Onderdeel geweest van het management en actief als financieel business partner en strategisch sparringpartner voor directie en management.'
    },
    {
      icon: Rocket,
      title: '5. YIM (Yvel Interim Management)',
      period: 'Heden',
      description: 'Opgericht om organisaties tijdelijk te ondersteunen met daadkrachtige financiële expertise. Gespecialiseerd in Business Control, Financial Control, Finance Management en andere interim projecten. Met focus op transparantie, resultaat en samenwerking helpen wij grip te krijgen op cijfers, processen te verbeteren en duurzame groei te realiseren.'
    },
    {
      icon: Heart,
      title: '6. Stichting SVWP',
      period: 'Nevenactiviteit',
      description: 'Als penningmeester betrokken bij een maatschappelijke stichting die slachtoffers van wraakporno en online seksueel misbruik ondersteunt en van informatie voorziet.'
    }
  ];

  useEffect(() => {
    const observers = timelineRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveTimeline(index);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '-20% 0px -20% 0px'
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Weg.png"
            alt="Global business and technology journey"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="container-custom relative z-10 py-32">
          <div className="text-center max-w-5xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-3 bg-white/95 backdrop-blur-sm text-[#006039] px-6 py-3 rounded-full text-base font-medium mb-6 shadow-lg">
              <GraduationCap className="w-5 h-5" />
              <span>Master in Controlling</span>
            </div>

            <h1 className="heading-primary text-white drop-shadow-lg">
              Over Calvin Yvel
            </h1>

            <p className="text-3xl text-white/95 font-medium drop-shadow-md">
              Interim Financial Expert
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              <div className="flex items-center space-x-3 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-lg">
                <Award className="w-6 h-6 text-yim-gold" />
                <span className="font-medium text-[#272727] text-lg">14+ Jaar Ervaring</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-lg">
                <Briefcase className="w-6 h-6 text-yim-gold" />
                <span className="font-medium text-[#272727] text-lg">20+ Projecten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="heading-secondary mb-6 text-[#272727]">
                  Onze <span className="text-yim-green">reis</span>
                </h2>
              </div>

              <div className="relative">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                <div
                  className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-yim-gold via-[#006039] to-yim-gold transition-all duration-700 ease-out"
                  style={{
                    height: `${((activeTimeline + 1) / timeline.length) * 100}%`
                  }}
                ></div>

                <div className="space-y-12 md:space-y-16">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      ref={(el) => (timelineRefs.current[index] = el)}
                      className={`relative flex flex-col md:flex-row gap-8 ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                        <div className={`inline-block ${index % 2 === 0 ? 'md:float-right' : 'md:float-left'}`}>
                          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 max-w-md">
                            <div className="flex items-center gap-4 mb-4">
                              <div className={`w-14 h-14 ${index % 2 === 0 ? 'bg-gradient-to-br from-yim-gold to-[#C49A3C]' : 'bg-[#006039]'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                <item.icon className="w-7 h-7 text-white" />
                              </div>
                              <div className="text-left">
                                <h3 className="text-2xl font-medium text-[#272727]">{item.title}</h3>
                                <p className="text-sm bg-gradient-to-r from-yim-gold to-[#C49A3C] bg-clip-text text-transparent font-medium">{item.period}</p>
                              </div>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed text-left">{item.description}</p>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`absolute left-8 md:left-1/2 top-0 rounded-full bg-white shadow-lg z-10 transition-all duration-500 ease-out ${
                          index <= activeTimeline
                            ? 'w-8 h-8 -ml-4 border-4 border-yim-gold scale-110'
                            : 'w-6 h-6 -ml-3 border-4 border-gray-300 scale-100'
                        }`}
                      >
                        {index <= activeTimeline && (
                          <div className="absolute inset-0 rounded-full bg-yim-gold animate-ping opacity-75"></div>
                        )}
                      </div>

                      <div className="flex-1 hidden md:block"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-8">
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-primary"
                >
                  Maak kennis
                </button>
              </div>
            </div>

            <div className="relative max-w-lg mx-auto">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/calvinyvelcar.png"
                  alt="Calvin Yvel - Professionele finance expert"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs border border-gray-200">
                <div className="flex items-center space-x-4">
                  <Award className="w-10 h-10 text-yim-gold" />
                  <div>
                    <div className="font-medium text-[#272727] text-xl">14+ Jaar</div>
                    <div className="text-base text-gray-600">Finance expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige-200">
        <div className="container-custom">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-8 text-[#272727]">
              Onze <span className="text-yim-green">kernwaarden</span>
            </h2>
            <p className="text-2xl text-gray-600 font-medium">
              De principes die ons werk en samenwerking met klanten vormgeven
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-12 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-20 h-20 bg-[#006039] rounded-xl flex items-center justify-center mx-auto mb-8">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-medium text-[#272727] mb-5">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-[#006039] rounded-3xl p-16 md:p-20 text-white max-w-6xl mx-auto shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-medium mb-12 text-center">
              Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white/10 rounded-xl p-6">
                  <div className="w-3 h-3 bg-gradient-to-br from-yim-gold to-[#C49A3C] rounded-full flex-shrink-0"></div>
                  <span className="text-xl">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-[#006039] bg-white rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                Bekijk alle diensten
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
