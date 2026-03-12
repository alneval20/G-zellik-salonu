# Multi-language Beauty Studio Website

Next.js 15 ve Tailwind CSS v4 kullanılarak geliştirilmiş, profesyonel bir güzellik stüdyosu web uygulaması. React Context API tabanlı özel bir çok dilli (TR/EN) altyapı, çok aşamalı randevu sistemi ve WhatsApp entegrasyonu içerir.

## Files

| File | Description |
|------|-------------|
| `context/LanguageContext.tsx` | Çok dilli destek sağlayan Context Provider. Çeviri anahtarlarını ve dil değiştirme mantığını yönetir. |
| `components/Navbar.tsx` | Mobil uyumlu, dil değiştirme butonlarına sahip navigasyon bileşeni. |
| `components/Appointment.tsx` | `date-fns` ve `react-day-picker` entegreli, çok aşamalı randevu formu. |
| `components/Gallery.tsx` | Lightbox özellikli ve kategori bazlı dinamik iş portfolyosu galerisi. |
| `components/Services.tsx` | Stüdyo hizmetlerini ikonlar ve açıklamalarla listeleyen bileşen. |
| `app/hizmetler/page.tsx` | Detaylı hizmet açıklamalarını içeren özel sayfa yapısı. |

## Setup

1. Bağımlılıkları yükleyin: `npm install`
2. Gerekli paketleri kontrol edin: `lucide-react`, `motion`, `date-fns`, `react-day-picker`.
3. Geliştirme sunucusunu başlatın: `npm run dev`
4. WhatsApp entegrasyonu için `components/Appointment.tsx` ve `components/Footer.tsx` dosyalarındaki telefon numarasını güncelleyin.

## Important Notes

- **Custom I18n Engine** — Harici kütüphane bağımlılığı olmadan, React Context ve JSON tabanlı hafif bir çeviri sistemi kullanır.
- **WhatsApp Lead Generation** — Randevu formu verileri, kullanıcının seçtiği dile göre otomatik olarak WhatsApp mesaj taslağına dönüştürülür.
- **Luxury Aesthetic** — Altın (Gold) ve Taş (Stone) renk paleti ile modern ve lüks bir kullanıcı deneyimi sunar.
- **Responsive Navigation** — Hem masaüstü hem mobil cihazlarda dil tercihlerini tarayıcı yerel depolamasında (localStorage) saklar.

## Customization

- `context/LanguageContext.tsx` dosyasındaki `translations` nesnesine yeni diller veya anahtarlar ekleyebilirsiniz.
- `components/Appointment.tsx` içindeki `timeSlots` dizisini değiştirerek çalışma saatlerini güncelleyebilirsiniz.
- `components/Gallery.tsx` içindeki `images` dizisine yeni görseller ekleyerek portfolyoyu genişletebilirsiniz.
- Tailwind v4 yapılandırması sayesinde `app/globals.css` üzerinden ana renkleri kolayca değiştirebilirsiniz.
