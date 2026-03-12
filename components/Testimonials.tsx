'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Elif Yılmaz',
    role: 'Gelin',
    text: 'Düğün günümde saçım ve makyajım tam hayal ettiğim gibi oldu. Adile Hanım ve ekibi gerçekten çok profesyonel. Herkese tavsiye ederim.',
    rating: 5
  },
  {
    name: 'Selin Kaya',
    role: 'Gelin',
    text: 'Makyajım bütün gün bozulmadan kaldı. Fotoğraflarda harika görünüyor. Söke\'de tek adres diyebilirim.',
    rating: 5
  },
  {
    name: 'Merve Demir',
    role: 'Müşteri',
    text: 'Özel bir davet için saç tasarımı yaptırdım. Çok modern ve şık bir sonuç aldık. İlginiz için teşekkürler.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Mutlu Müşteriler
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display mb-6">Sizden Gelenler</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-stone-50 p-10 rounded-3xl relative"
            >
              <Quote className="absolute top-8 right-8 text-gold/20" size={40} />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-stone-600 italic mb-8 leading-relaxed">&quot;{t.text}&quot;</p>
              <div>
                <h4 className="font-display text-lg">{t.name}</h4>
                <span className="text-xs uppercase tracking-widest text-stone-400">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
