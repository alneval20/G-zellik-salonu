'use client';

import { motion } from 'motion/react';
import { Sparkles, Scissors, Heart, Camera, Star, Palette } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    title: 'Gelin Saçı',
    description: 'En özel gününüzde yüz hatlarınıza ve gelinliğinize en uygun, kalıcı ve büyüleyici saç tasarımları.',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=400&auto=format&fit=crop'
  },
  {
    title: 'Gelin Makyajı',
    description: 'Doğal güzelliğinizi vurgulayan, fotoğraf çekimlerinde kusursuz görünen profesyonel gelin makyajı.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop'
  },
  {
    title: 'Profesyonel Makyaj',
    description: 'Gece makyajı, porselen makyaj ve özel etkinlikler için profesyonel dokunuşlar.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400&auto=format&fit=crop'
  },
  {
    title: 'Nişan Saçı',
    description: 'Nişan ve söz törenleriniz için zarif ve modern saç modelleri.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=400&auto=format&fit=crop'
  },
  {
    title: 'Özel Gün Makyajı',
    description: 'Mezuniyet, doğum günü ve tüm özel davetleriniz için size özel makyaj uygulamaları.',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=400&auto=format&fit=crop'
  },
  {
    title: 'Saç Tasarımı',
    description: 'Kesim, renklendirme ve günlük bakım hizmetleri ile saçlarınızın sağlığını ve şıklığını koruyoruz.',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400&auto=format&fit=crop'
  }
];

export default function Services() {
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
            Neler Sunuyoruz?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-display mb-6"
          >
            Ayrıcalıklı Hizmetlerimiz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-stone-500 max-w-2xl mx-auto font-light"
          >
            Her detayı titizlikle planlanmış, size özel güzellik çözümleri ile kendinizi yeniden keşfedin.
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
                  Detaylı Bilgi & Randevu →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
