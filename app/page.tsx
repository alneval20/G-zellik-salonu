import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Appointment from '@/components/Appointment';
import Testimonials from '@/components/Testimonials';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Appointment />
      <Testimonials />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
