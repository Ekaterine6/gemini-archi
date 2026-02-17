import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from '../translations';

interface NavbarProps {
  language: "ru" | "en";
  setLanguage: (lang: "ru" | "en") => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.team, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-serif font-black tracking-tighter uppercase group"
        >
          Ibragim{" "}
          <span className="text-zinc-500 group-hover:text-white transition-colors">
            Stroy
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-medium hover:text-zinc-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Language Switch */}
          <button
            onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
            className="text-xs uppercase tracking-[0.2em] border border-zinc-700 px-3 py-1 hover:bg-white hover:text-black transition-all"
          >
            {language === "ru" ? "EN" : "RU"}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="px-6 py-2 bg-white text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-zinc-200 transition-all"
          >
            {language === "ru" ? "Связаться" : "Inquire"}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-3xl font-serif hover:text-zinc-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Language Switch */}
            <button
              onClick={() => {
                setLanguage(language === "ru" ? "en" : "ru");
                setIsOpen(false);
              }}
              className="text-lg border px-6 py-2 uppercase"
            >
              {language === "ru" ? "Switch to English" : "Переключить на русский"}
            </button>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-10 py-4 bg-white text-black font-bold uppercase tracking-widest"
            >
              {language === "ru" ? "Связаться" : "Get in Touch"}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
