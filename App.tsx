
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HorizontalGallery from './components/HorizontalGallery';
import Counters from './components/Counters';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Basic smooth scroll feel (simulated via CSS or GSAP if needed)
    // Here we focus on ScrollTrigger initializations
    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#050505] text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HorizontalGallery />
        <Counters />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
