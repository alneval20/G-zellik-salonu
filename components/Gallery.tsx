'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, Maximize2 } from 'lucide-react';

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=800&auto=format&fit=crop', category: 'Gelin Saçı' },
  { id: 2, src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop', category: 'Gelin Makyajı' },
  { id: 3, src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop', category: 'Profesyonel Makyaj' },
  { id: 4, src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop', category: 'Özel Gün' },
  { id: 5, src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop', category: 'Nişan Saçı' },
  { id: 6, src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop', category: 'Saç Tasarımı' },
  { id: 7, src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop', category: 'Gelin Saçı' },
  { id: 8, src: 'https://images.unsplash.com/photo-1519415510236-8559b1985602?q=80&w=800&auto=format&fit=crop', category: 'Makyaj' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeri" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Çalışmalarımız
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display mb-6">Güzellik Galerisi</h2>
          <p className="text-stone-500 max-w-2xl mx-auto font-light">
            Stüdyomuzda gerçekleştirdiğimiz profesyonel dokunuşlardan bazı kareler.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.category}
                width={800}
                height={1000}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                <Maximize2 size={32} className="mb-2" />
                <span className="text-xs uppercase tracking-widest">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-white hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Selected work"
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
