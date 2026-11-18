import React from 'react';
import { Instagram } from 'lucide-react';

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
            <a
              href="/"
              className="text-3xl font-serif font-black tracking-tighter uppercase mb-6 block"
            >
              Ibragim <span className="text-zinc-500">Stroy</span>
            </a>

            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              {language === "ru"
                ? "Создаём архитектурные пространства, в которых современная эстетика сочетается с продуманной функциональностью. Реализуем проекты в Дагестане и за его пределами, уделяя особое внимание качеству и каждой детали."
                : "We create architectural spaces where contemporary aesthetics meet thoughtful functionality. Delivering projects across Dagestan and beyond, with a commitment to quality and attention to every detail."}
            </p>

            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/ibragim_stroy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-zinc-600 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">

            <div>
              <h5 className="text-[10px] uppercase tracking-[0.4em] text-white mb-6">
                {language === "ru" ? "Навигация" : "Navigation"}
              </h5>

              <ul className="space-y-4 text-zinc-500 text-sm">
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">
                    {language === "ru" ? "Проекты" : "Projects"}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    {language === "ru" ? "Услуги" : "Services"}
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    CEO
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    {language === "ru" ? "Контакты" : "Contact"}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h5 className="text-[10px] uppercase tracking-[0.4em] text-white mb-6">
                {language === "ru" ? "Офис" : "Office"}
              </h5>

              <address className="not-italic text-zinc-500 text-sm leading-relaxed">
                {language === "ru"
                  ? "Махачкала, Республика Дагестан"
                  : "Makhachkala, Republic of Dagestan"}
              </address>
            </div>

          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-900 gap-6">
          <p className="text-[10px] uppercase tracking-widest text-zinc-700">
            &copy; {currentYear} IBRAGIM STROY.{" "}
            {language === "ru" ? "Все права защищены." : "All rights reserved."}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;