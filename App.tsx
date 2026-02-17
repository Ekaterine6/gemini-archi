import React, { useEffect, useRef, useState } from 'react';
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

  // ✅ LANGUAGE STATE (default Russian)
  const [language, setLanguage] = useState<"ru" | "en">("ru");

  // ✅ Load saved language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "ru" || savedLang === "en") {
      setLanguage(savedLang);
    }
  }, []);

  // ✅ Save language when changed
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#050505] text-white selection:bg-white selection:text-black"
    >
      <Navbar language={language} setLanguage={setLanguage} />

      <main>
        <Hero language={language} />
        <Services language={language} />
        <HorizontalGallery language={language} />
        <Counters />
        <Team language={language} />
        <Testimonials language={language} />
        <Contact language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
};

export default App;
