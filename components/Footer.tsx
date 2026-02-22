import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

interface Props {
  language: "ru" | "en";
}

const Footer: React.FC<Props> = ({ language }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-32 pb-12 px-6 md:px-12 bg-black border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-sm">
            <a href="/" className="text-3xl font-serif font-black tracking-tighter uppercase mb-6 block">
              Ibragim <span className="text-zinc-500">Stroy</span>
            </a>

            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              {language === "ru"
                ? "Архитектурное совершенство в Туркменистане и за его пределами. Мы создаём пространства, определяющие современную роскошь."
                : "Pioneering architectural excellence in Turkmenistan and beyond. Dedicated to creating timeless spaces that redefine modern luxury."}
            </p>

            <div className="flex space-x-6">
              <a href="https://www.instagram.com/ibragim_stroy/" className="text-zinc-600 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.4em] text-white mb-6">
                {language === "ru" ? "Услуги" : "Service"}
              </h5>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-white">Architectural Design</a></li>
                <li><a href="#" className="hover:text-white">Residential</a></li>
                <li><a href="#" className="hover:text-white">Project Management</a></li>
                <li><a href="#" className="hover:text-white">Interiors</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h5 className="text-[10px] uppercase tracking-[0.4em] text-white mb-6">
                {language === "ru" ? "Офис" : "Office"}
              </h5>
              <address className="not-italic text-zinc-500 text-sm leading-relaxed">
                Makhachkala, Dagestan<br />
              </address>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-900 gap-6">
          <p className="text-[10px] uppercase tracking-widest text-zinc-700">
            &copy; {currentYear} IBRAGIM STROY. {language === "ru" ? "ВСЕ ПРАВА ЗАЩИЩЕНЫ." : "ALL RIGHTS RESERVED."}
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;