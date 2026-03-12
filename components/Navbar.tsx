'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/#hakkimizda' },
    { name: t('nav.services'), href: '/hizmetler' },
    { name: t('nav.gallery'), href: '/#galeri' },
    { name: t('nav.appointment'), href: '/#randevu' },
    { name: t('nav.contact'), href: '/#iletisim' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-white/10 backdrop-blur-md border-b border-white/10'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex flex-col items-center group">
          <span className={cn(
            "text-2xl font-display tracking-widest transition-colors duration-500",
            isScrolled ? "text-stone-900" : "text-stone-900"
          )}>
            ADILE
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-70 group-hover:text-gold transition-colors">Makeup & Hair</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest font-medium transition-all hover:text-gold relative group",
                isScrolled ? "text-stone-800" : "text-stone-900"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {/* Language Switcher */}
          <div className="flex items-center bg-stone-100/50 rounded-full p-1 border border-stone-200">
            <button
              onClick={() => setLocale('tr')}
              className={cn(
                "px-3 py-1 rounded-full text-[10px] font-bold transition-all",
                locale === 'tr' ? "bg-gold text-white shadow-sm" : "text-stone-500 hover:text-stone-800"
              )}
            >
              TR
            </button>
            <button
              onClick={() => setLocale('en')}
              className={cn(
                "px-3 py-1 rounded-full text-[10px] font-bold transition-all",
                locale === 'en' ? "bg-gold text-white shadow-sm" : "text-stone-500 hover:text-stone-800"
              )}
            >
              EN
            </button>
          </div>

          <a href="https://instagram.com/adile___makeup_hair_studio" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
            <Instagram size={20} />
          </a>
          <a href="tel:+905447236702" className="flex items-center space-x-2 bg-gold text-white px-4 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-gold-dark transition-all">
            <Phone size={14} />
            <span>{t('nav.book')}</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
           <div className="flex items-center bg-stone-100/50 rounded-full p-1 border border-stone-200">
            <button
              onClick={() => setLocale('tr')}
              className={cn(
                "px-2 py-1 rounded-full text-[10px] font-bold transition-all",
                locale === 'tr' ? "bg-gold text-white shadow-sm" : "text-stone-500"
              )}
            >
              TR
            </button>
            <button
              onClick={() => setLocale('en')}
              className={cn(
                "px-2 py-1 rounded-full text-[10px] font-bold transition-all",
                locale === 'en' ? "bg-gold text-white shadow-sm" : "text-stone-500"
              )}
            >
              EN
            </button>
          </div>
          <button
            className="text-stone-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden flex flex-col p-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest border-b border-stone-100 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex justify-between items-center pt-4">
              <a href="https://instagram.com/adile___makeup_hair_studio" target="_blank" rel="noreferrer">
                <Instagram size={24} />
              </a>
              <a href="tel:+905447236702" className="bg-gold text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest">
                {t('nav.call')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
