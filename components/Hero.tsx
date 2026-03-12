'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Zoom and Parallax Animation */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-white/90 uppercase tracking-[0.5em] text-sm mb-6 block font-medium">
            Güzelliğin Sanatla Buluştuğu Nokta
          </span>
          <h1 className="text-5xl md:text-8xl text-white font-display mb-8 leading-tight drop-shadow-lg">
            Profesyonel Gelin <br /> Saçı ve Makyaj
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light tracking-wide drop-shadow-md">
            Söke&apos;de özel günleriniz için profesyonel saç ve makyaj hizmeti ile hayalinizdeki görünüme kavuşun.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="#randevu"
              whileHover={{ scale: 1.05, backgroundColor: "#b8962e" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-white px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:bg-gold-dark transition-all shadow-xl"
            >
              Randevu Al
            </motion.a>
            <motion.a
              href="#hizmetler"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:bg-white/20 transition-all"
            >
              Hizmetlerimiz
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] opacity-70">Keşfet</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
