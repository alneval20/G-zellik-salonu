'use client';

import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

const instaPhotos = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=400&auto=format&fit=crop',
];

export default function InstagramFeed() {
  return (
    <section className="py-24 px-6 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Bizi Takip Edin
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display">Instagram&apos;da Biz</h2>
          </div>
          <a 
            href="https://instagram.com/adile_makeup_hair_studio" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 text-stone-900 hover:text-gold transition-colors group"
          >
            <Instagram size={24} />
            <span className="font-display text-xl">@adile_makeup_hair_studio</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instaPhotos.map((photo, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/adile_makeup_hair_studio"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              <Image
                src={photo}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram size={24} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
