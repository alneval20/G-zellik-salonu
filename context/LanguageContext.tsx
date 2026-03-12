'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Locale = 'tr' | 'en';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Locale, Record<string, string>> = {
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.services': 'Hizmetler',
    'nav.gallery': 'Galeri',
    'nav.appointment': 'Randevu',
    'nav.contact': 'İletişim',
    'nav.book': 'Randevu Al',
    'nav.call': 'Hemen Ara',
    
    'hero.subtitle': 'Güzelliğin Sanatla Buluştuğu Nokta',
    'hero.title': 'Profesyonel Gelin Saçı ve Makyaj',
    'hero.description': 'Söke\'de özel günleriniz için profesyonel saç ve makyaj hizmeti ile hayalinizdeki görünüme kavuşun.',
    'hero.cta.book': 'Randevu Al',
    'hero.cta.services': 'Hizmetlerimiz',
    'hero.scroll': 'Keşfet',

    'about.subtitle': 'Hikayemiz',
    'about.title': 'Güzelliğinize Değer Katıyoruz',
    'about.p1': 'Adile Makeup & Hair Studio olarak, Söke\'de yılların verdiği tecrübe ve tutkuyla hizmet veriyoruz. Her kadının benzersiz bir güzelliğe sahip olduğuna inanıyor ve bu güzelliği en doğru tekniklerle ön plana çıkarıyoruz.',
    'about.p2': 'Özellikle gelin başı ve profesyonel makyaj konularında uzmanlaşmış ekibimizle, hayatınızın en özel gününde kendinizi kusursuz hissetmenizi sağlıyoruz. En kaliteli ürünleri ve en güncel trendleri takip ederek size özel çözümler sunuyoruz.',
    'about.stat1.label': 'Mutlu Gelin',
    'about.stat2.label': 'Yıllık Deneyim',
    'about.stat3.label': 'Uzman Ekip',
    'about.vision.title': 'Vizyonumuz',
    'about.vision.desc': 'Söke\'de güzellik standartlarını belirleyen, yenilikçi ve öncü bir stüdyo olmak.',
    'about.mission.title': 'Misyonumuz',
    'about.mission.desc': 'Her müşterimizin stüdyomuzdan mutlu ve özgüvenli bir şekilde ayrılmasını sağlamak.',

    'services.subtitle': 'Neler Yapıyoruz?',
    'services.title': 'Size Özel Hizmetlerimiz',
    'services.bridal.hair': 'Gelin Saçı',
    'services.bridal.hair.desc': 'En özel gününüzde yüz hatlarınıza ve gelinliğinize en uygun, kalıcı ve büyüleyici saç tasarımları.',
    'services.bridal.makeup': 'Gelin Makyajı',
    'services.bridal.makeup.desc': 'Doğal güzelliğinizi vurgulayan, fotoğraf çekimlerinde kusursuz görünen profesyonel gelin makyajı.',
    'services.makeup.title': 'Profesyonel Makyaj',
    'services.makeup.desc': 'Gece makyajı, porselen makyaj ve özel etkinlikler için profesyonel dokunuşlar.',
    'services.engagement.hair': 'Nişan Saçı',
    'services.engagement.hair.desc': 'Nişan ve söz törenleriniz için zarif ve modern saç modelleri.',
    'services.special.makeup': 'Özel Gün Makyajı',
    'services.special.makeup.desc': 'Mezuniyet, doğum günü ve tüm özel davetleriniz için size özel makyaj uygulamaları.',
    'services.hair.title': 'Saç Tasarımı',
    'services.hair.desc': 'Kesim, renklendirme ve günlük bakım hizmetleri ile saçlarınızın sağlığını ve şıklığını koruyoruz.',
    'services.care.title': 'Bakım Hizmetleri',
    'services.care.desc': 'Saç bakımı ve güzelliğinizi tamamlayacak özel uygulamalar.',

    'gallery.subtitle': 'Çalışmalarımız',
    'gallery.title': 'Güzellik Portfolyomuz',
    'gallery.filter.all': 'Hepsi',
    'gallery.filter.bridal': 'Gelin',
    'gallery.filter.makeup': 'Makyaj',
    'gallery.filter.hair': 'Saç',

    'appointment.title': 'Online Randevu',
    'appointment.subtitle': 'Zamanınızı Ayırın',
    'appointment.desc': 'Size en uygun zamanı seçin, güzelliğinizi profesyonel ellere emanet edin.',
    'appointment.step1.title': 'Hizmet Seç',
    'appointment.step1.desc': 'Hizmetinizi belirleyin.',
    'appointment.step1.question': 'Hangi hizmeti istersiniz?',
    'appointment.step2.title': 'Tarih Seç',
    'appointment.step2.desc': 'Günü belirleyin.',
    'appointment.step2.question': 'Tarih Belirleyin',
    'appointment.step3.title': 'Saat Seç',
    'appointment.step3.desc': 'Saati belirleyin.',
    'appointment.step3.question': 'Saat Seçin',
    'appointment.step4.title': 'Bilgilerini Gir',
    'appointment.step4.desc': 'İletişim bilgileriniz.',
    'appointment.step4.question': 'İletişim Bilgileri',
    'appointment.step5.title': 'Onayla',
    'appointment.step5.desc': 'Randevuyu kontrol edin.',
    'appointment.step5.question': 'Randevuyu Onayla',
    'appointment.summary.title': 'Randevu Özeti',
    'appointment.summary.customer': 'Müşteri Bilgileri',
    'appointment.next.time': 'Saat Seçimine Geç',
    'appointment.next.info': 'Bilgilerimi Gir',
    'appointment.next.summary': 'Özeti Görüntüle',
    'appointment.edit.info': 'Bilgileri Düzenle',
    'appointment.edit.service': 'Hizmeti Değiştir',
    'appointment.form.name': 'Ad Soyad',
    'appointment.form.name.placeholder': 'Adınız ve Soyadınız',
    'appointment.form.phone': 'Telefon',
    'appointment.form.date': 'Tarih',
    'appointment.form.time': 'Saat',
    'appointment.form.service': 'Hizmet',
    'appointment.form.message': 'Not / Mesaj (Opsiyonel)',
    'appointment.form.message.placeholder': 'Eklemek istediğiniz bir not var mı?',
    'appointment.form.submit': 'Randevuyu Onayla ve WhatsApp\'tan Gönder',
    'appointment.success.title': 'Randevu Talebiniz Alındı!',
    'appointment.success.desc': 'Randevu talebiniz başarıyla gönderildi. En kısa sürede sizinle iletişime geçilecektir.',
    'appointment.success.whatsapp': 'WhatsApp üzerinden bildirim gönderiliyor...',
    'appointment.new': 'Yeni Randevu Al',
    'appointment.whatsapp.new': 'Yeni Randevu Talebi!',
    'common.back': 'Geri Dön',
 
     'footer.contact': 'İletişim',
    'footer.title': 'Bize Ulaşın',
    'footer.address.title': 'Adres',
    'footer.address.value': 'Fevzipaşa, Aydın Cd. No:117, 09200 Söke/Aydın',
    'footer.phone.title': 'Telefon / WhatsApp',
    'footer.hours.title': 'Çalışma Saatleri',
    'footer.hours.value': 'Her Gün: 09:00 - 21:00',
    'footer.rights': 'Tüm Hakları Saklıdır.',
    'footer.kvkk': 'KVKK',
    'footer.cookies': 'Çerez Politikası',

    'services.page.subtitle': 'Güzellik Uzmanlığı',
    'services.page.title': 'Hizmetlerimiz',
    'services.page.desc': 'En özel günlerinizde hayalinizdeki görünüme kavuşmanız için sunduğumuz profesyonel çözümler.'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.appointment': 'Appointment',
    'nav.contact': 'Contact',
    'nav.book': 'Book Now',
    'nav.call': 'Call Now',

    'hero.subtitle': 'Where Beauty Meets Art',
    'hero.title': 'Professional Bridal Hair & Makeup',
    'hero.description': 'Achieve your dream look with professional hair and makeup services for your special days in Söke.',
    'hero.cta.book': 'Book Appointment',
    'hero.cta.services': 'Our Services',
    'hero.scroll': 'Discover',

    'about.subtitle': 'Our Story',
    'about.title': 'Adding Value to Your Beauty',
    'about.p1': 'As Adile Makeup & Hair Studio, we serve in Söke with years of experience and passion. We believe every woman has a unique beauty and we highlight this beauty with the right techniques.',
    'about.p2': 'With our team specialized in bridal hair and professional makeup, we make you feel perfect on the most special day of your life. We offer special solutions for you by following the highest quality products and the latest trends.',
    'about.stat1.label': 'Happy Brides',
    'about.stat2.label': 'Years Experience',
    'about.stat3.label': 'Expert Team',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To be an innovative and pioneering studio that sets beauty standards in Söke.',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To ensure that every customer leaves our studio happy and confident.',

    'services.subtitle': 'What We Do',
    'services.title': 'Special Services for You',
    'services.bridal.hair': 'Bridal Hair',
    'services.bridal.hair.desc': 'The most suitable, long-lasting, and enchanting hair designs for your facial features and wedding dress on your most special day.',
    'services.bridal.makeup': 'Bridal Makeup',
    'services.bridal.makeup.desc': 'Professional bridal makeup that emphasizes your natural beauty and looks flawless in photo shoots.',
    'services.makeup.title': 'Professional Makeup',
    'services.makeup.desc': 'Professional touches for night makeup, porcelain makeup, and special events.',
    'services.engagement.hair': 'Engagement Hair',
    'services.engagement.hair.desc': 'Elegant and modern hairstyles for your engagement and promise ceremonies.',
    'services.special.makeup': 'Special Day Makeup',
    'services.special.makeup.desc': 'Customized makeup applications for graduation, birthdays, and all your special invitations.',
    'services.hair.title': 'Hair Design',
    'services.hair.desc': 'We protect the health and elegance of your hair with cutting, coloring, and daily care services.',
    'services.care.title': 'Care Services',
    'services.care.desc': 'Hair care and special applications to complete your beauty.',

    'gallery.subtitle': 'Our Work',
    'gallery.title': 'Beauty Portfolio',
    'gallery.filter.all': 'All',
    'gallery.filter.bridal': 'Bridal',
    'gallery.filter.makeup': 'Makeup',
    'gallery.filter.hair': 'Hair',

    'appointment.title': 'Online Appointment',
    'appointment.subtitle': 'Book Your Time',
    'appointment.desc': 'Choose the most suitable time for you, entrust your beauty to professional hands.',
    'appointment.step1.title': 'Select Service',
    'appointment.step1.desc': 'Determine your service.',
    'appointment.step1.question': 'Which service would you like?',
    'appointment.step2.title': 'Select Date',
    'appointment.step2.desc': 'Determine the day.',
    'appointment.step2.question': 'Set a Date',
    'appointment.step3.title': 'Select Time',
    'appointment.step3.desc': 'Determine the time.',
    'appointment.step3.question': 'Select Time',
    'appointment.step4.title': 'Enter Info',
    'appointment.step4.desc': 'Your contact information.',
    'appointment.step4.question': 'Contact Information',
    'appointment.step5.title': 'Confirm',
    'appointment.step5.desc': 'Check the appointment.',
    'appointment.step5.question': 'Confirm Appointment',
    'appointment.summary.title': 'Appointment Summary',
    'appointment.summary.customer': 'Customer Information',
    'appointment.next.time': 'Go to Time Selection',
    'appointment.next.info': 'Enter My Info',
    'appointment.next.summary': 'View Summary',
    'appointment.edit.info': 'Edit Information',
    'appointment.edit.service': 'Change Service',
    'appointment.form.name': 'Full Name',
    'appointment.form.name.placeholder': 'Your Full Name',
    'appointment.form.phone': 'Phone',
    'appointment.form.date': 'Date',
    'appointment.form.time': 'Time',
    'appointment.form.service': 'Service',
    'appointment.form.message': 'Note / Message (Optional)',
    'appointment.form.message.placeholder': 'Is there a note you want to add?',
    'appointment.form.submit': 'Confirm Appointment and Send via WhatsApp',
    'appointment.success.title': 'Your Appointment Request Received!',
    'appointment.success.desc': 'Your appointment request has been successfully sent. We will contact you as soon as possible.',
    'appointment.success.whatsapp': 'Notification is being sent via WhatsApp...',
    'appointment.new': 'Book New Appointment',
    'appointment.whatsapp.new': 'New Appointment Request!',
    'common.back': 'Back',

    'footer.contact': 'Contact',
    'footer.title': 'Contact Us',
    'footer.address.title': 'Address',
    'footer.address.value': 'Fevzipaşa, Aydın Cd. No:117, 09200 Söke/Aydın',
    'footer.phone.title': 'Phone / WhatsApp',
    'footer.hours.title': 'Working Hours',
    'footer.hours.value': 'Every Day: 09:00 - 21:00',
    'footer.rights': 'All Rights Reserved.',
    'footer.kvkk': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',

    'services.page.subtitle': 'Beauty Expertise',
    'services.page.title': 'Our Services',
    'services.page.desc': 'Professional solutions we offer for you to achieve your dream look on your most special days.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') as Locale;
      if (savedLocale && (savedLocale === 'tr' || savedLocale === 'en')) {
        return savedLocale;
      }
    }
    return 'tr';
  });

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: string) => {
    return translations[locale][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
