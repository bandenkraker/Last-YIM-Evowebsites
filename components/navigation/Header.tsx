'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const t = useTranslations('common');
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('home'), href: `/${locale}` },
    { name: t('services'), href: `/${locale}/services` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
    )}>
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center">
          <Image
            src="/yim_logo.png"
            alt="Yvel Interim Management Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-yim-green transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={`/${locale}/contact`}
            className="bg-yim-green text-white px-6 py-2 rounded-full font-semibold hover:bg-yim-green/90 transition-all"
          >
            {t('request_quote')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg py-6 px-4 space-y-4 flex flex-col items-center animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-yim-green transition-colors font-medium text-lg w-full text-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={`/${locale}/contact`}
            className="bg-yim-green text-white px-8 py-3 rounded-full font-semibold hover:bg-yim-green/90 transition-all w-full text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('request_quote')}
          </Link>
        </div>
      )}
    </header>
  );
}
