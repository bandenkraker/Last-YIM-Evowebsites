import { FormEvent, useState } from 'react';
import { Send, CheckCircle, Phone, Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);

    setSubmitSuccess(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };


  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-12 md:pb-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#272727] mb-6 leading-tight px-2 sm:px-0">
                Interesse in een samenwerking? Neem contact met ons op.
              </h1>
              <p className="text-gray-600 text-lg mb-8 px-2 sm:px-0">
                Kies je favoriete manier om contact op te nemen
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 px-2 sm:px-0">
                <a
                  href="tel:+31638927076"
                  className="group relative flex items-center space-x-4 p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-yim-gold hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yim-gold/20"
                >
                  <div className="relative w-14 h-14 bg-gradient-to-br from-yim-gold to-[#C49A3C] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yim-gold/50">
                    <Phone className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-xl bg-yim-gold opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium group-hover:text-yim-gold transition-colors duration-300">Bel direct</div>
                    <div className="text-lg font-medium text-[#272727] group-hover:text-yim-gold transition-colors duration-300">
                      <span className="group-hover:hidden">Toon nummer</span>
                      <span className="hidden group-hover:inline">06-38927076</span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center space-x-4 p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-yim-green hover:bg-gradient-to-br hover:from-emerald-50 hover:to-green-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yim-green/20"
                >
                  <div className="relative w-14 h-14 bg-gradient-to-br from-yim-green to-[#007A4A] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yim-green/50">
                    <Linkedin className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-xl bg-yim-green opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium group-hover:text-yim-green transition-colors duration-300">Connect op</div>
                    <div className="text-lg font-medium text-[#272727] group-hover:text-yim-green transition-colors duration-300">LinkedIn</div>
                  </div>
                </a>
              </div>

              <div className="mb-8 px-2 sm:px-0">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-6 h-6 text-yim-gold" />
                  <h2 className="text-2xl font-medium text-[#272727]">Of stuur een bericht</h2>
                </div>
              </div>

              {submitSuccess ? (
                <div className="text-center py-12 px-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#272727] mb-2">Bericht Verzonden!</h3>
                  <p className="text-gray-600">
                    Bedankt voor uw bericht. Wij nemen zo spoedig mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 px-2 sm:px-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-gray-300 pb-3 text-[#272727] placeholder-gray-500 focus:border-yim-green focus:outline-none transition-colors"
                        placeholder="Voornaam"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-gray-300 pb-3 text-[#272727] placeholder-gray-500 focus:border-yim-green focus:outline-none transition-colors"
                        placeholder="Achternaam"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-gray-300 pb-3 text-gray-900 placeholder-gray-500 focus:border-yim-green focus:outline-none transition-colors"
                      placeholder="Email adres"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-gray-300 pb-3 text-gray-900 placeholder-gray-500 focus:border-yim-green focus:outline-none transition-colors"
                      placeholder="Onderwerp"
                    />
                  </div>

                  <div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-gray-300 pb-3 text-gray-900 placeholder-gray-500 focus:border-yim-green focus:outline-none transition-colors resize-none"
                      placeholder="Bericht"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span>Verzenden...</span>
                    ) : (
                      <>
                        <span>Verstuur</span>
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="relative order-2 lg:order-2 mt-12 lg:mt-0 px-2 sm:px-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-beige-200 rounded-3xl -z-10 hidden sm:block"></div>
                <img
                  src="/Cantact.png"
                  alt="Contact Calvin Yvel"
                  className="w-full h-auto md:h-[650px] object-cover object-center rounded-2xl shadow-xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
