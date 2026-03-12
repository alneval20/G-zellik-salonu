'use client';

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="iletisim" className="bg-stone-900 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Info */}
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-sm mb-6 block">{t('footer.contact')}</span>
            <h2 className="text-4xl md:text-5xl font-display mb-12">{t('footer.title')}</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/5 p-4 rounded-2xl text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-display text-xl mb-2">{t('footer.address.title')}</h4>
                  <p className="text-white/60 font-light">{t('footer.address.value')}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/5 p-4 rounded-2xl text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-display text-xl mb-2">{t('footer.phone.title')}</h4>
                  <p className="text-white/60 font-light">+90 544 723 67 02</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/5 p-4 rounded-2xl text-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-display text-xl mb-2">{t('footer.hours.title')}</h4>
                  <p className="text-white/60 font-light">{t('footer.hours.value')}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="https://wa.me/905447236702" className="bg-green-600 p-4 rounded-full hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </a>
              <a href="https://instagram.com/adile___makeup_hair_studio" target="_blank" rel="noreferrer" className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-4 rounded-full hover:scale-110 transition-transform">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.247291642838!2d27.40476!3d37.78193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be896944444445%3A0x4444444444444444!2zRmV2emlwYcWfYSwgQXlkxLFuIENkLiBObzoxMTcsIDA5MjAwIFPDtmtlL0F5ZMSxbg!5e0!3m2!1str!2str!4v1710240000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-sm">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-display tracking-widest text-white mb-1">ADILE</span>
            <span className="text-[10px] uppercase tracking-[0.3em]">Makeup & Hair Studio</span>
          </div>
          <p>© 2024 Adile Makeup & Hair Studio. {t('footer.rights')}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">{t('footer.kvkk')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
