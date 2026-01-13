'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle, Phone, Mail, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

export default function ContactPage() {
  const t = useTranslations('contact');
  const tc = useTranslations('common');
  const locale = useLocale();
  
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

    try {
      const response = await fetch('https://formspree.io/f/xyzkqypy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _to: 'yvelinterimmanagement@gmail.com',
          _subject: `Contactformulier YIM: ${formData.subject}`
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen">
        <section className="pt-36 pb-12 md:pt-44 md:pb-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    {t('title')}
                  </h1>
                  <p className="text-xl text-gray-500 font-medium">
                    {t('subtitle')}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <a
                    href={`tel:${tc('phone')}`}
                    className="group p-8 bg-gray-50 rounded-[2rem] border border-transparent hover:border-yim-green hover:bg-white hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="w-14 h-14 bg-yim-green rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg shadow-yim-green/20">
                      <Phone size={28} />
                    </div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">{t('call_direct')}</div>
                    <div className="text-xl font-bold text-gray-900">{tc('phone')}</div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/calvin-yvel-a418b630/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-8 bg-gray-50 rounded-[2rem] border border-transparent hover:border-yim-green hover:bg-white hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="w-14 h-14 bg-yim-green rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg shadow-yim-green/20">
                      <Linkedin size={28} />
                    </div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">{t('connect_linkedin')}</div>
                    <div className="text-xl font-bold text-gray-900">LinkedIn</div>
                  </a>
                </div>

                {submitSuccess ? (
                  <div className="bg-green-50 rounded-[2rem] p-12 text-center border border-green-100 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('success_title')}</h3>
                    <p className="text-lg text-gray-600">{t('success_message')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-900 uppercase tracking-wider ml-1">{t('first_name')}</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border-2 border-transparent px-6 py-4 rounded-2xl focus:border-yim-green focus:outline-none transition-all shadow-sm"
                          placeholder="Calvin"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-900 uppercase tracking-wider ml-1">{t('last_name')}</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border-2 border-transparent px-6 py-4 rounded-2xl focus:border-yim-green focus:outline-none transition-all shadow-sm"
                          placeholder="Yvel"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-900 uppercase tracking-wider ml-1">{t('email')}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border-2 border-transparent px-6 py-4 rounded-2xl focus:border-yim-green focus:outline-none transition-all shadow-sm"
                        placeholder="info@THISisYIM.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-900 uppercase tracking-wider ml-1">{t('subject')}</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border-2 border-transparent px-6 py-4 rounded-2xl focus:border-yim-green focus:outline-none transition-all shadow-sm"
                        placeholder="Strategisch Advies"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-900 uppercase tracking-wider ml-1">{t('message')}</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-white border-2 border-transparent px-6 py-4 rounded-2xl focus:border-yim-green focus:outline-none transition-all shadow-sm resize-none"
                        placeholder="Wat kunnen we voor je betekenen?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yim-green text-white py-5 rounded-2xl font-bold text-xl hover:bg-yim-green/90 transition-all shadow-lg shadow-yim-green/20 flex items-center justify-center space-x-3 disabled:opacity-50 group"
                    >
                      {isSubmitting ? (
                        <span>{t('sending')}</span>
                      ) : (
                        <>
                          <span>{t('send')}</span>
                          <Send size={24} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              <div className="relative sticky top-32">
                <div className="absolute -inset-4 bg-gray-50 rounded-[2.5rem] -z-10 hidden lg:block"></div>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200">
                  <Image
                    src="/Cantact.png"
                    alt="Contact Calvin Yvel"
                    fill
                    className="object-cover object-[center_20%]"
                    priority
                  />
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
