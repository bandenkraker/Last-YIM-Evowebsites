import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import WhyChooseYIM from '@/components/sections/WhyChooseYIM';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <WhyChooseYIM />
      <Footer />
    </main>
  );
}
