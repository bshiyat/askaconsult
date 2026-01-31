'use client';

import BootSequence from './components/BootSequence';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <BootSequence />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
