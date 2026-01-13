import { Phone, Linkedin, ExternalLink } from 'lucide-react';

interface FooterProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Footer({ currentPage, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="bg-yim-green py-16 relative overflow-hidden">
        {currentPage !== 'contact' && (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(196,154,60,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(196,154,60,0.05),transparent_50%)]"></div>
          </>
        )}

        <div className="container-custom relative">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Een gesprek kan het verschil maken.
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Neem vandaag nog contact op en ontdek hoe wij uw organisatie kunnen helpen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href="tel:+31638927076"
              className="group relative bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-white hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-yim-gold to-[#C49A3C] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-center group-hover:text-yim-gold transition-colors duration-300">Direct Bellen</h4>
                <p className="text-sm text-gray-600 text-center">
                  <span className="group-hover:hidden">Toon nummer</span>
                  <span className="hidden group-hover:inline font-medium">06-38927076</span>
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/calvin-yvel-a418b630/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-white hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-yim-gold to-[#C49A3C] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto">
                  <Linkedin className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-center group-hover:text-yim-gold transition-colors duration-300">Via LinkedIn</h4>
                <p className="text-sm text-gray-600 text-center">Verbind en stuur een bericht</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-beige-200">Over YIM</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ambiteuze finance expert met focus op inzicht en resultaat. 14+ jaar ervaring in business control, financial control en financial management.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-beige-200">Navigatie</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-yim-gold transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 hover:text-yim-gold transition-colors text-sm"
                >
                  Onze Reis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-gray-400 hover:text-yim-gold transition-colors text-sm"
                >
                  Diensten
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-yim-gold transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-beige-200">Diensten</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Business Control</li>
              <li>Financial Control</li>
              <li>FP&A</li>
              <li>Procesoptimalisatie</li>
              <li>Finance Manager</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-beige-200">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+31638927076"
                  className="group inline-flex items-center space-x-2 text-gray-400 hover:text-yim-gold transition-all duration-300 text-sm hover:translate-x-1"
                >
                  <Phone className="w-4 h-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  <span className="relative group-hover:font-medium transition-all duration-300">
                    <span className="group-hover:hidden">Toon nummer</span>
                    <span className="hidden group-hover:inline">06-38927076</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/calvin-yvel-a418b630/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-2 text-gray-400 hover:text-yim-gold transition-all duration-300 text-sm hover:translate-x-1"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  <span className="group-hover:font-medium transition-all duration-300">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Yvel Interim Management. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={() => onNavigate('privacy')}
                className="text-gray-400 hover:text-yim-gold transition-colors"
              >
                Privacybeleid
              </button>
              <a
                href="https://evowebsites.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-400 hover:text-yim-gold transition-colors"
              >
                <span>Gemaakt door Evowebsites.nl</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
