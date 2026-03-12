'use client';

import { motion } from 'motion/react';
import { Sparkles, Scissors, Heart, Camera, Star, Palette } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.bridal.hair'),
      description: t('services.bridal.hair.desc'),
      icon: Scissors,
      image: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: t('services.bridal.makeup'),
      description: t('services.bridal.makeup.desc'),
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: t('services.makeup.title'),
      description: t('services.makeup.desc'),
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: t('services.engagement.hair'),
      description: t('services.engagement.hair.desc'),
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: t('services.special.makeup'),
      description: t('services.special.makeup.desc'),
      icon: Star,
      image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: t('services.hair.title'),
      description: t('services.hair.desc'),
      icon: Scissors,
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <section id="hizmetler" className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            {t('services.subtitle')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-display mb-6"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-stone-500 max-w-2xl mx-auto font-light"
          >
            {t('services.page.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-gold">
                  <service.icon size={20} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-gold text-xs uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('nav.appointment')} →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
