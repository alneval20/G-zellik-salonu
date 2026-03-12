'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Appointment from '@/components/Appointment';
import { motion } from 'motion/react';

export default function HizmetlerPage() {
  return (
    <main className="relative">
      <Navbar />
      
      {/* Header Section for Services Page */}
      <section className="relative pt-40 pb-20 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1920&auto=format&fit=crop')`,
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block">
              Güzellik Uzmanlığı
            </span>
            <h1 className="text-5xl md:text-7xl font-display mb-6">Hizmetlerimiz</h1>
            <p className="text-white/60 max-w-2xl mx-auto font-light text-lg">
              En özel günlerinizde hayalinizdeki görünüme kavuşmanız için sunduğumuz profesyonel çözümler.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <Services />

      {/* Call to Action / Appointment */}
      <Appointment />
      
      <Footer />
    </main>
  );
}
