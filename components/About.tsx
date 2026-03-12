'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
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
                <span className="text-white/80 text-xs uppercase tracking-widest">Yıllık Tecrübe</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block">Hikayemiz</span>
            <h2 className="text-4xl md:text-5xl font-display mb-8 leading-tight">
              Güzelliğinizi Profesyonel <br /> Ellerle Taçlandırıyoruz
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg font-light">
              <p>
                Adile Makeup & Hair Studio olarak, Söke&apos;nin kalbinde her kadının içindeki eşsiz güzelliği ortaya çıkarmak için tutkuyla çalışıyoruz. Özellikle gelin saçı ve profesyonel makyaj konularında uzmanlaşmış ekibimizle, en özel günlerinizde yanınızdayız.
              </p>
              <p>
                Modern teknikleri, en kaliteli ürünlerle birleştirerek size sadece bir kuaför hizmeti değil, kendinizi özel hissedeceğiniz bir deneyim sunuyoruz. Her gelin bizim için yeni bir sanat eseridir ve bu bilinçle her detaya özen gösteriyoruz.
              </p>
              <p>
                Lüks ve konforlu stüdyomuzda, hayalinizdeki görünüme kavuşmanız için sizi bekliyoruz.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-display text-xl mb-2">Vizyonumuz</h4>
                <p className="text-sm text-stone-500">Söke&apos;de güzellik standartlarını belirleyen, yenilikçi ve öncü bir stüdyo olmak.</p>
              </div>
              <div>
                <h4 className="font-display text-xl mb-2">Misyonumuz</h4>
                <p className="text-sm text-stone-500">Her müşterimizin stüdyomuzdan mutlu ve özgüvenli bir şekilde ayrılmasını sağlamak.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
