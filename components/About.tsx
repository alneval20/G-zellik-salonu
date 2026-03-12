'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="hakkimizda" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
                alt="Adile Makeup & Hair Studio"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-gold p-8 rounded-2xl shadow-xl hidden md:block">
                <span className="text-white text-4xl font-display block">10+</span>
                <span className="text-white/80 text-xs uppercase tracking-widest">{t('about.stat2.label')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block">{t('about.subtitle')}</span>
            <h2 className="text-4xl md:text-5xl font-display mb-8 leading-tight">
              {t('about.title')}
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg font-light">
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-display text-xl mb-2">{t('about.vision.title')}</h4>
                <p className="text-sm text-stone-500">{t('about.vision.desc')}</p>
              </div>
              <div>
                <h4 className="font-display text-xl mb-2">{t('about.mission.title')}</h4>
                <p className="text-sm text-stone-500">{t('about.mission.desc')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
