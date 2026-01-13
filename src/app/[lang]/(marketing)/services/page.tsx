import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import { useTranslations } from 'next-intl';
import { CheckCircle2, BarChart3, ShieldCheck, Briefcase } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 pb-20 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              Onze <span className="text-yim-green">Diensten</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Expertise op interim-basis voor uw financiële uitdagingen. Van operationele control tot strategische financiële beslissingen: wij helpen uw organisatie vooruit te gaan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-yim-green transition-all duration-500 group">
              <div className="w-16 h-16 bg-yim-green/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yim-green transition-all">
                <BarChart3 className="w-8 h-8 text-yim-green group-hover:text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Business Control</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Wij slaan de brug tussen finance en de business. Door data te vertalen naar waardevolle inzichten ondersteunen wij bij het maken van strategische keuzes.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-yim-green" />
                  <span>Budgettering & Forecasting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-yim-green" />
                  <span>Managementrapportages</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-yim-green" />
                  <span>Performance Management</span>
                </li>
              </ul>
            </div>

            <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-yim-green transition-all duration-500 group">
              <div className="w-16 h-16 bg-yim-green/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yim-green transition-all">
                <ShieldCheck className="w-8 h-8 text-yim-green group-hover:text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Financial Control</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Zorgdragen voor een betrouwbare financiële administratie en compliance. Wij brengen structuur aan in uw processen en waarborgen de kwaliteit.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-yim-green" />
                  <span>Maand- & Jaarafsluitingen</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-yim-green" />
                  <span>Procesoptimalisatie (AO/IC)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-yim-green" />
                  <span>Audit Readiness</span>
                </li>
              </ul>
            </div>

            <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-yim-green transition-all duration-500 group">
              <div className="w-16 h-16 bg-yim-green/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yim-green transition-all">
                <Briefcase className="w-8 h-8 text-yim-green group-hover:text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Finance Management</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Tijdelijke vervanging of versterking van uw financiële management team. Wij pakken de regie en sturen op resultaat en teamontwikkeling.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-yim-green" />
                  <span>Interim Management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-yim-green" />
                  <span>Projectmanagement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-yim-green" />
                  <span>Change Management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
