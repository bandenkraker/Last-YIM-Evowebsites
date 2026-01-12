import { Shield, Lock, Eye, Mail } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen pt-36 md:pt-44">
      <section className="pb-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-12">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#006039] rounded-full">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="heading-primary text-gray-900">Privacybeleid</h1>
              <p className="text-xl text-gray-600">
                Laatst bijgewerkt: Januari 2026
              </p>
              <p className="text-lg text-gray-600">
                Uw privacy is belangrijk voor ons. Dit beleid legt uit hoe we omgaan met uw gegevens.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
                alt="Privacy en beveiliging"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">

            <div className="card space-y-8">
              <section>
                <div className="flex items-start space-x-4 mb-4">
                  <Lock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="heading-secondary text-gray-900 mb-3">Gegevensbescherming</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Yvel Interim Management (YIM) hecht grote waarde aan de bescherming van uw persoonsgegevens.
                      In dit privacybeleid leggen wij uit hoe wij omgaan met uw gegevens wanneer u gebruik maakt
                      van onze website en diensten.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Wij verwerken persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming
                      (AVG) en andere toepasselijke wet- en regelgeving.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="heading-secondary text-gray-900 mb-4">Welke Gegevens Verzamelen Wij?</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="pl-4 border-l-4 border-green-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Contactgegevens</h3>
                    <p className="leading-relaxed">
                      Naam, e-mailadres, telefoonnummer en bedrijfsnaam die u verstrekt via ons contactformulier
                      of andere communicatiemiddelen.
                    </p>
                  </div>
                  <div className="pl-4 border-l-4 border-green-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Gebruiksgegevens</h3>
                    <p className="leading-relaxed">
                      Informatie over hoe u onze website gebruikt, zoals bezochte pagina's, tijd besteed op
                      de website en klikgedrag (via Google Analytics).
                    </p>
                  </div>
                  <div className="pl-4 border-l-4 border-green-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Cookies</h3>
                    <p className="leading-relaxed">
                      Wij gebruiken cookies om uw ervaring te verbeteren en website prestaties te analyseren.
                      U kunt cookies accepteren of weigeren via onze cookie banner.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="heading-secondary text-gray-900 mb-4">Waarvoor Gebruiken Wij Uw Gegevens?</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Om contact met u op te nemen naar aanleiding van uw aanvraag</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Om u informatie te verstrekken over onze diensten</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Om onze website te verbeteren en gebruikerservaring te optimaliseren</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Om te voldoen aan wettelijke verplichtingen</span>
                  </li>
                </ul>
              </section>

              <section>
                <div className="flex items-start space-x-4 mb-4">
                  <Eye className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="heading-secondary text-gray-900 mb-3">Delen van Gegevens</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Wij verkopen uw persoonsgegevens nooit aan derden. Wij kunnen uw gegevens alleen delen met:
                    </p>
                    <ul className="mt-3 space-y-2 text-gray-600">
                      <li className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Dienstverleners die ons helpen bij website hosting en analytics (zoals Google Analytics)</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Wettelijke autoriteiten wanneer dit wettelijk verplicht is</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="heading-secondary text-gray-900 mb-4">Uw Rechten</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  U heeft de volgende rechten met betrekking tot uw persoonsgegevens:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Recht op inzage</h3>
                    <p className="text-sm text-gray-600">
                      U kunt opvragen welke gegevens wij van u hebben
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Recht op correctie</h3>
                    <p className="text-sm text-gray-600">
                      U kunt vragen om onjuiste gegevens te corrigeren
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Recht op verwijdering</h3>
                    <p className="text-sm text-gray-600">
                      U kunt vragen om uw gegevens te verwijderen
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Recht op bezwaar</h3>
                    <p className="text-sm text-gray-600">
                      U kunt bezwaar maken tegen verwerking van uw gegevens
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="heading-secondary text-gray-900 mb-4">Beveiliging</h2>
                <p className="text-gray-600 leading-relaxed">
                  Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te
                  beschermen tegen ongeautoriseerde toegang, verlies of wijziging. Onze website gebruikt
                  SSL-encryptie om uw gegevens tijdens overdracht te beveiligen.
                </p>
              </section>

              <section>
                <h2 className="heading-secondary text-gray-900 mb-4">Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Onze website gebruikt cookies om de functionaliteit te verbeteren en om statistieken bij te houden.
                  We gebruiken de volgende soorten cookies:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Functionele cookies:</strong> Noodzakelijk voor het functioneren van de website</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Analytische cookies:</strong> Google Analytics voor bezoekersstatistieken (alleen met uw toestemming)</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  U kunt cookies beheren via uw browserinstellingen. Let op: het uitschakelen van cookies kan
                  de functionaliteit van de website beïnvloeden.
                </p>
              </section>

              <section>
                <h2 className="heading-secondary text-gray-900 mb-4">Bewaartermijn</h2>
                <p className="text-gray-600 leading-relaxed">
                  Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn
                  verzameld. Contactgegevens worden bewaard zolang er een zakelijke relatie bestaat of tot u verzoekt
                  om verwijdering.
                </p>
              </section>

              <section className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="heading-secondary text-gray-900 mb-3">Contact</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Heeft u vragen over dit privacybeleid of wilt u gebruik maken van uw rechten?
                      Neem dan contact met ons op:
                    </p>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Yvel Interim Management</strong></p>
                      <p>Email: <a href="mailto:calvinyvel@hotmail.com" className="text-green-600 hover:underline">calvinyvel@hotmail.com</a></p>
                      <p>Telefoon: <a href="tel:+31638927076" className="text-green-600 hover:underline">06-38927076</a></p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="heading-secondary text-gray-900 mb-4">Wijzigingen</h2>
                <p className="text-gray-600 leading-relaxed">
                  Wij behouden ons het recht voor om dit privacybeleid te wijzigen. De meest recente versie
                  is altijd te vinden op deze pagina. Wij raden u aan om dit privacybeleid regelmatig te raadplegen.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
