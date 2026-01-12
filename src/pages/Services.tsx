import { BarChart3, TrendingUp, Target, Cog, Briefcase, CheckCircle, ArrowRight, Users } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: BarChart3,
      title: 'Business Control',
      description: 'Strategische sturing en rapportage voor optimale bedrijfsvoering',
      benefits: [
        'Implementatie van KPI-dashboards en management rapportages',
        'Budgettering en forecasting processen',
        'Businesscase ontwikkeling en projectevaluatie',
        'Datagedreven inzichten'
      ]
    },
    {
      icon: TrendingUp,
      title: 'FP&A',
      description: 'Strategische financiële planning voor groei en succes',
      benefits: [
        'Lange termijn financiële planning',
        'Scenario-analyse en forecasting',
        'Datagedreven inzichten',
        'Advies over strategische financiële keuzes'
      ]
    },
    {
      icon: Cog,
      title: 'Procesoptimalisatie & Efficiëntie',
      description: 'Efficiëntere processen voor betere resultaten',
      benefits: [
        'Proces-mapping en gap-analyse',
        'Implementatie van automatiseringsoplossingen',
        'Workflow optimalisatie',
        'Begeleiding bij organisatieveranderingen'
      ]
    },
    {
      icon: Target,
      title: 'Financial Control',
      description: 'Complete financiële administratie en controllerschap',
      benefits: [
        'Maand-, kwartaal- en jaarafsluitingen',
        'Financiële rapportages en analyses',
        'Interne controle en risicomanagement',
        'Advies over strategische financiële keuzes'
      ]
    },
    {
      icon: Users,
      title: 'Teamleiderschap & Ontwikkeling',
      description: 'Ontwikkeling van mens en organisatie',
      benefits: [
        'Leidinggeven aan finance teams',
        'Coaching en mentoring van professionals',
        'Stakeholdermanagement',
        'Prestatiemanagement'
      ]
    },
    {
      icon: Briefcase,
      title: 'Accounting',
      description: 'Zorgvuldige financiële verslaglegging',
      benefits: [
        'Statutaire rapportages',
        'Audit-voorbereiding',
        'Grootboekbeheer',
        'Naleving (Compliance)'
      ]
    }
  ];

  const approach = [
    {
      step: '01',
      title: 'Intake & Analyse',
      description: 'Een onafhankelijke analyse van de huidige situatie, uitdagingen en gewenste resultaten. In deze fase worden de opdracht, scope en concrete eindresultaten vastgesteld.'
    },
    {
      step: '02',
      title: 'Strategisch Plan',
      description: 'Ontwikkeling van een op maat gemaakt strategisch actieplan met duidelijke doelstellingen, planning en meetbare resultaten. De uitvoering vindt plaats vanuit professionele autonomie.'
    },
    {
      step: '03',
      title: 'Implementatie',
      description: 'Zelfstandige uitvoering van het overeengekomen plan, met periodieke voortgangsafstemming op basis van resultaten.'
    },
    {
      step: '04',
      title: 'Kennisoverdracht & Oplevering',
      description: 'Oplevering van de afgesproken resultaten inclusief documentatie, overdracht en eventuele training. Hiermee wordt de organisatie in staat gesteld zelfstandig verder te werken.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <h1 className="heading-primary text-[#272727]">
                Finance <span className="text-yim-green">Diensten</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-medium">
                Expertise op interim-basis voor uw financiële uitdagingen. Van operationele control tot strategische financiële beslissingen: wij helpen uw organisatie vooruit te gaan.
              </p>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-4 bg-beige-200 rounded-3xl -z-10 hidden sm:block"></div>
              <img
                src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Finance Dashboard Analysis"
                className="rounded-2xl shadow-2xl w-full h-[300px] md:h-[500px] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-beige-200">
        <div className="container-custom">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-10 border border-beige-300 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4 md:space-x-5 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-yim-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium text-[#272727] mb-2 md:mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-base md:text-lg">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-yim-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-base md:text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary group"
            >
              <span>Bespreek uw uitdaging</span>
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-8 text-[#272727]">
              Onze  <span className="text-yim-green">werkwijze</span>
              </h2> 
            <p className="text-2xl text-gray-600 font-medium">
              Een gestructureerde aanpak voor duurzame resultaten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {approach.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-beige-100 rounded-2xl p-8 md:p-10 text-center h-full hover:shadow-xl transition-all duration-300 border border-beige-300">
                  <div className="text-5xl md:text-6xl font-medium text-yim-green mb-4 md:mb-6">{phase.step}</div>
                  <h3 className="text-xl md:text-2xl font-medium text-[#272727] mb-3 md:mb-4">{phase.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">{phase.description}</p>
                </div>
                {index < approach.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-yim-green" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-beige-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1 mt-12 lg:mt-0">
              <div className="absolute -inset-4 bg-white rounded-3xl -z-10 hidden sm:block"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                alt="Business charts en financiële analyses op schermen"
                className="rounded-2xl shadow-2xl w-full h-auto max-h-[400px] object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-8 md:space-y-10 order-1 lg:order-2">
              <h2 className="heading-secondary text-[#272727]">
                Resultaten die <span className="text-yim-green">tellen</span>
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-4 md:space-x-5 p-4 md:p-6 bg-white rounded-xl border border-beige-300 shadow-sm">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-beige-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-yim-green" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#272727] mb-1 md:mb-2 text-lg md:text-xl">Meetbare verbeteringen</h3>
                    <p className="text-gray-600 text-base md:text-lg">
                      Gemiddeld 25% efficiëntiewinst in financiële processen binnen 6 maanden
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 md:space-x-5 p-4 md:p-6 bg-white rounded-xl border border-beige-300 shadow-sm">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-beige-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 md:w-7 md:h-7 text-yim-green" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#272727] mb-1 md:mb-2 text-lg md:text-xl">Strategische impact</h3>
                    <p className="text-gray-600 text-base md:text-lg">
                      Betere besluitvorming door verbeterde rapportages en inzichten
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 md:space-x-5 p-4 md:p-6 bg-white rounded-xl border border-beige-300 shadow-sm">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-beige-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-yim-green" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#272727] mb-1 md:mb-2 text-lg md:text-xl">Duurzame oplossingen</h3>
                    <p className="text-gray-600 text-base md:text-lg">
                      Kennisoverdracht zorgt voor blijvende resultaten na afloop van de opdracht
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
