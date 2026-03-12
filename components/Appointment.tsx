'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { format, addDays, startOfDay, isSameDay } from 'date-fns';
import { tr } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Calendar as CalendarIcon, Clock, User, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  'Gelin Saçı',
  'Gelin Makyajı',
  'Profesyonel Makyaj',
  'Nişan Saçı',
  'Özel Gün Makyajı',
  'Saç Tasarımı'
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
];

// Mock booked slots for demo
const bookedSlots = [
  { date: new Date(), time: '11:00' },
  { date: new Date(), time: '14:00' },
  { date: addDays(new Date(), 1), time: '10:00' },
];

export default function Appointment() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', note: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isSlotBooked = (time: string) => {
    if (!selectedDate) return false;
    return bookedSlots.some(slot => 
      isSameDay(slot.date, selectedDate) && slot.time === time
    );
  };

  const handleSubmit = () => {
    // In a real app, save to DB and send WhatsApp
    setIsSubmitted(true);
    
    // WhatsApp notification link
    const message = `Yeni Randevu Talebi!\n\nİsim: ${formData.name}\nTelefon: ${formData.phone}\nHizmet: ${selectedService}\nTarih: ${format(selectedDate!, 'dd MMMM yyyy', { locale: tr })}\nSaat: ${selectedTime}\nNot: ${formData.note}`;
    const whatsappUrl = `https://wa.me/905447236702?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 2000);
  };

  const steps = [
    { n: 1, t: 'Hizmet Seç', d: 'Hizmetinizi belirleyin.' },
    { n: 2, t: 'Tarih Seç', d: 'Günü belirleyin.' },
    { n: 3, t: 'Saat Seç', d: 'Saati belirleyin.' },
    { n: 4, t: 'Bilgilerini Gir', d: 'İletişim bilgileriniz.' },
    { n: 5, t: 'Onayla', d: 'Randevuyu kontrol edin.' }
  ];

  return (
    <section id="randevu" className="py-24 px-6 luxury-gradient">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Zamanınızı Ayırın
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display mb-6">Online Randevu</h2>
          <p className="text-stone-500 max-w-2xl mx-auto font-light">
            Size en uygun zamanı seçin, güzelliğinizi profesyonel ellere emanet edin.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100">
          {!isSubmitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Sidebar Steps */}
              <div className="bg-stone-900 p-8 lg:p-12 text-white flex flex-col justify-between">
                <div className="space-y-6">
                  {steps.map((s) => (
                    <div 
                      key={s.n} 
                      className={cn(
                        "flex items-start gap-4 transition-all duration-300", 
                        step < s.n ? "opacity-30 scale-95" : "opacity-100 scale-100",
                        step === s.n && "text-gold"
                      )}
                    >
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 shrink-0",
                        step >= s.n ? "bg-gold border-gold text-white" : "border-white/20"
                      )}>
                        {step > s.n ? <CheckCircle2 size={16} /> : s.n}
                      </div>
                      <div>
                        <h4 className="font-display text-lg leading-tight">{s.t}</h4>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Randevu Özeti</p>
                  <div className="space-y-3 text-sm font-light">
                    {selectedService && (
                      <div className="flex justify-between items-center">
                        <span className="text-white/50">Hizmet:</span>
                        <span className="text-gold font-medium">{selectedService}</span>
                      </div>
                    )}
                    {selectedDate && (
                      <div className="flex justify-between items-center">
                        <span className="text-white/50">Tarih:</span>
                        <span className="text-gold font-medium">{format(selectedDate, 'dd MMM yyyy', { locale: tr })}</span>
                      </div>
                    )}
                    {selectedTime && (
                      <div className="flex justify-between items-center">
                        <span className="text-white/50">Saat:</span>
                        <span className="text-gold font-medium">{selectedTime}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Main Form Area */}
              <div className="lg:col-span-2 p-8 lg:p-12 relative flex flex-col">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-stone-100">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / steps.length) * 100}%` }}
                    className="h-full bg-gold"
                  />
                </div>

                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3 className="text-3xl font-display mb-8">Hangi hizmeti istersiniz?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {services.map((service) => (
                            <button
                              key={service}
                              onClick={() => { setSelectedService(service); setStep(2); }}
                              className={cn(
                                "p-6 rounded-2xl border text-left transition-all duration-300 group",
                                selectedService === service 
                                  ? "border-gold bg-gold-light/5 ring-1 ring-gold" 
                                  : "border-stone-100 bg-stone-50/50 hover:border-gold hover:bg-white"
                              )}
                            >
                              <span className={cn(
                                "text-lg font-medium transition-colors",
                                selectedService === service ? "text-gold" : "text-stone-700 group-hover:text-gold"
                              )}>
                                {service}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <h3 className="text-3xl font-display">Tarih Belirleyin</h3>
                        <div className="flex justify-center">
                          <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => { if(date) { setSelectedDate(date); setStep(3); } }}
                            locale={tr}
                            disabled={{ before: new Date() }}
                            className="border-none p-0"
                            classNames={{
                              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                              month: "space-y-4",
                              caption: "flex justify-center pt-1 relative items-center mb-4",
                              caption_label: "text-sm font-display text-stone-900",
                              nav: "space-x-1 flex items-center",
                              nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity",
                              nav_button_previous: "absolute left-1",
                              nav_button_next: "absolute right-1",
                              table: "w-full border-collapse space-y-1",
                              head_row: "flex",
                              head_cell: "text-stone-400 rounded-md w-9 font-normal text-[0.8rem] uppercase tracking-widest",
                              row: "flex w-full mt-2",
                              cell: "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
                              day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-gold-light/20 rounded-full transition-all",
                              day_selected: "bg-gold text-white hover:bg-gold hover:text-white focus:bg-gold focus:text-white",
                              day_today: "bg-stone-100 text-stone-900",
                              day_outside: "text-stone-300 opacity-50",
                              day_disabled: "text-stone-300 opacity-50 cursor-not-allowed",
                              day_hidden: "invisible",
                            }}
                          />
                        </div>
                        <div className="flex justify-between pt-8 border-t border-stone-100">
                          <button onClick={() => setStep(1)} className="text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-widest text-xs font-bold">← Geri Dön</button>
                          <button 
                            disabled={!selectedDate}
                            onClick={() => setStep(3)} 
                            className="bg-stone-900 text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-gold transition-all disabled:opacity-20"
                          >
                            Saat Seçimine Geç
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <h3 className="text-3xl font-display">Saat Seçin</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                          {timeSlots.map((time) => {
                            const booked = isSlotBooked(time);
                            return (
                              <button
                                key={time}
                                disabled={booked}
                                onClick={() => { setSelectedTime(time); setStep(4); }}
                                className={cn(
                                  "py-4 rounded-2xl text-sm font-medium transition-all border-2",
                                  booked 
                                    ? "bg-stone-50 border-stone-100 text-stone-300 cursor-not-allowed" 
                                    : selectedTime === time 
                                      ? "bg-gold border-gold text-white shadow-lg shadow-gold/20" 
                                      : "bg-white border-stone-100 text-stone-600 hover:border-gold hover:text-gold"
                                )}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                        <div className="flex justify-between pt-8 border-t border-stone-100">
                          <button onClick={() => setStep(2)} className="text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-widest text-xs font-bold">← Tarih Seçimine Dön</button>
                          <button 
                            disabled={!selectedTime}
                            onClick={() => setStep(4)} 
                            className="bg-stone-900 text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-gold transition-all disabled:opacity-20"
                          >
                            Bilgilerimi Gir
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <h3 className="text-3xl font-display">İletişim Bilgileri</h3>
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold ml-1">Ad Soyad</label>
                            <div className="relative">
                              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
                              <input
                                required
                                type="text"
                                placeholder="Adınız ve Soyadınız"
                                className="w-full pl-14 pr-6 py-5 rounded-2xl border-2 border-stone-100 focus:border-gold outline-none transition-all bg-stone-50/30"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold ml-1">Telefon</label>
                            <div className="relative">
                              <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
                              <input
                                required
                                type="tel"
                                placeholder="05xx xxx xx xx"
                                className="w-full pl-14 pr-6 py-5 rounded-2xl border-2 border-stone-100 focus:border-gold outline-none transition-all bg-stone-50/30"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold ml-1">Not / Mesaj (Opsiyonel)</label>
                            <div className="relative">
                              <MessageSquare className="absolute left-5 top-6 text-stone-300" size={18} />
                              <textarea
                                placeholder="Eklemek istediğiniz bir not var mı?"
                                rows={3}
                                className="w-full pl-14 pr-6 py-5 rounded-2xl border-2 border-stone-100 focus:border-gold outline-none transition-all bg-stone-50/30"
                                value={formData.note}
                                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between pt-8 border-t border-stone-100">
                          <button onClick={() => setStep(3)} className="text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-widest text-xs font-bold">← Saat Seçimine Dön</button>
                          <button 
                            disabled={!formData.name || !formData.phone}
                            onClick={() => setStep(5)} 
                            className="bg-stone-900 text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-gold transition-all disabled:opacity-20"
                          >
                            Özeti Görüntüle
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 5 && (
                      <motion.div
                        key="step5"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <h3 className="text-3xl font-display">Randevuyu Onayla</h3>
                        <div className="bg-stone-50 rounded-3xl p-8 space-y-6 border border-stone-100">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                              <div>
                                <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Hizmet</p>
                                <p className="text-xl font-display text-stone-900">{selectedService}</p>
                              </div>
                              <div>
                                <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Tarih & Saat</p>
                                <p className="text-lg font-medium text-stone-900">
                                  {format(selectedDate!, 'dd MMMM yyyy', { locale: tr })} - {selectedTime}
                                </p>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div>
                                <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Müşteri Bilgileri</p>
                                <p className="text-lg font-medium text-stone-900">{formData.name}</p>
                                <p className="text-stone-500">{formData.phone}</p>
                              </div>
                              {formData.note && (
                                <div>
                                  <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Not</p>
                                  <p className="text-stone-500 italic text-sm">&quot;{formData.note}&quot;</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                          <button 
                            onClick={handleSubmit}
                            className="w-full bg-gold text-white py-5 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:bg-gold-dark transition-all shadow-xl shadow-gold/20"
                          >
                            Randevuyu Onayla ve WhatsApp&apos;tan Gönder
                          </button>
                          <div className="flex justify-between px-2">
                            <button onClick={() => setStep(4)} className="text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-widest text-xs font-bold">← Bilgileri Düzenle</button>
                            <button onClick={() => setStep(1)} className="text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-widest text-xs font-bold">Hizmeti Değiştir</button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-16 text-center space-y-6"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-3xl font-display">Randevu Talebiniz Alındı!</h3>
              <p className="text-stone-500 max-w-md mx-auto">
                Randevu talebiniz başarıyla gönderildi. En kısa sürede sizinle iletişime geçilecektir.
              </p>
              <p className="text-xs text-stone-400">WhatsApp üzerinden bildirim gönderiliyor...</p>
              <button 
                onClick={() => { setIsSubmitted(false); setStep(1); setSelectedService(''); setSelectedTime(''); }}
                className="mt-8 text-gold uppercase tracking-widest text-xs font-bold hover:underline"
              >
                Yeni Randevu Al
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
