import { ArrowRight, CheckCircle, TrendingUp, Users, Target, Award, Heart } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
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

  const currentProjects = [
    {
      title: 'NBD Biblion',
      role: 'Interim Business Controller',
      description: 'Verantwoordelijk voor de optimalisatie van financiële processen en rapportagestructuren bij een centrale partner van Nederlandse openbare bibliotheken en (school‑)mediatheken.'
    },
    {
      title: 'JijenZij BV',
      role: 'Interim Business Controller/Finance Manager',
      description: 'Strategische financiële advisering en procesoptimalisatie voor een toonaangevende organisatie in recruitment, executive search en interimmanagement (specialisatie Finance & Control)'
    }
  ];

  const sideActivities = [
    {
      title: 'Stichting SVWP',
      role: 'Vrijwilligers werk',
      description: 'Als penningmeester betrokken bij een maatschappelijke stichting die slachtoffers van wraakporno en online seksueel misbruik ondersteunt en van informatie voorziet.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center bg-white pt-32 lg:pt-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 order-1 lg:order-1">
              <h1 className="heading-primary text-[#272727]">
                Strategische partner op het gebied van{' '}
                <span className="text-yim-green">Finance</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                Samen werken aan de groei van jouw organisatie
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-primary"
                >
                  Neem contact op
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="btn-secondary"
                >
                  Bekijk diensten
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-medium text-yim-green">
                    <AnimatedCounter end={14} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600 mt-2 font-medium">Jaar Ervaring</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-medium text-yim-green">
                    <AnimatedCounter end={20} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600 mt-2 font-medium">Projecten</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-medium text-yim-green">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-600 mt-2 font-medium">Inzet</div>
                </div>
              </div>
            </div>

            <div className="relative order-2 lg:order-2 mt-8 lg:mt-0">
              <div className="relative px-4 sm:px-0">
                <div className="absolute -inset-4 bg-beige-200 rounded-3xl -z-10 hidden sm:block"></div>
                <img
                  src="/calvin.png"
                  alt="Calvin Yvel - Interim Finance Manager"
                  className="w-full h-auto max-h-[400px] lg:max-h-[500px] object-contain object-top rounded-2xl"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 whitespace-nowrap">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yim-green rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-[#272727] text-lg">14+ Jaar</div>
                    <div className="text-sm text-gray-600">Finance Expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige-200">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h2 className="heading-secondary text-[#272727]">
              Calvin Yvel
            </h2>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Interim Financial Expert
            </p>
            <div className="text-base text-gray-600 leading-relaxed space-y-4 text-left max-w-3xl mx-auto">
              <p>
                YIM (Yvel Interim Management) staat voor daadkrachtige financiële expertise op tijdelijke basis.
                Met meer dan 14 jaar ervaring helpen wij organisaties grip te krijgen op cijfers, processen te verbeteren en duurzame groei te realiseren.
              </p>
              <p>
                Wij zijn gespecialiseerd in Business Control, Financial Control, Finance Management en interim projectondersteuning. In deze vakgebieden verbinden wij finance met de business en zorgen we voor rust, overzicht en scherpe inzichten, altijd met oog voor mensen én resultaat.
              </p>
              <p>
                Transparantie, vertrouwen en een open dialoog vormen de basis van onze aanpak. YIM ondersteunt organisaties bij strategische vraagstukken, transformaties en tijdelijke capaciteit.
                Wij werken zelfstandig en flexibel, leveren afgesproken resultaten en nemen verantwoordelijkheid voor kwaliteit en impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-8 text-[#272727]">
              Waarom kiezen voor <span className="text-yim-green">YIM</span>?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Onze kracht ligt in het combineren van financiële vakkennis met een hands-on, resultaatgerichte aanpak, waardoor organisaties sneller overzicht, rust en duurzame impact bereiken.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {qualities.map((quality, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-yim-green hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-yim-green rounded-xl flex items-center justify-center mb-6">
                  <quality.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-3 text-[#272727]">{quality.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{quality.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <button
              onClick={() => onNavigate('about')}
              className="btn-primary group"
            >
              <span>Leer meer over YIM</span>
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige-200">
        <div className="container-custom">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-8 text-[#272727]">
              Actuele <span className="text-yim-green">Projecten</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Interim management opdrachten waar wij momenteel actief zijn.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-beige-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-md">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-yim-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-[#272727] mb-2">{project.title}</h3>
                    <p className="text-yim-green font-medium text-base">{project.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-base">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-8 text-[#272727]">
              <span className="text-yim-green">Nevenactiviteiten</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Betrokkenheid bij een maatschappelijk initiatief.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {sideActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-beige-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-md">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-yim-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-[#272727] mb-2">{activity.title}</h3>
                    <p className="text-yim-green font-medium text-base">{activity.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-base">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
