import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';
import Services from '../components/home/Services';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Features />
      <Testimonials />
    </div>
  );
}
