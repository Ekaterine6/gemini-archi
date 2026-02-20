import React from 'react';
import { Send } from 'lucide-react';

interface Props {
  language: "ru" | "en";
}

const Contact: React.FC<Props> = ({ language }) => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-24">
        
        {/* LEFT */}
        <div className="lg:w-1/2">
          <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4 block">
            {language === "ru" ? "Связаться" : "Get in touch"}
          </span>

          <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-12">
            {language === "ru"
              ? <>Давайте создадим <span className="italic">что-то великое</span> вместе.</>
              : <>Let's build <span className="italic">something great</span> together.</>}
          </h2>
          
          <div className="space-y-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                {language === "ru" ? "Локация" : "Location"}
              </p>
              <p className="text-xl font-light">
                Makhachkala<br />Dagestan, Russia.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                {language === "ru" ? "Общие запросы" : "General Enquiries"}
              </p>
              <p className="text-xl font-light hover:text-zinc-400 transition-colors">
                <a href="mailto:malakhov.i.93@mail.ru">malakhov.i.93@mail.ru</a>
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                {language === "ru" ? "Позвоните нам" : "Call us"}
              </p>
              <p className="text-xl font-light">+7 960 407-42-02</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:w-1/2">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500">
                  {language === "ru" ? "Имя" : "Name"}
                </label>
                <input 
                  type="text" 
                  placeholder={language === "ru" ? "Иван Иванов" : "John Doe"}
                  className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-white outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500">
                  {language === "ru" ? "Email" : "Email Address"}
                </label>
                <input 
                  type="email" 
                  placeholder={language === "ru" ? "ivan@mail.ru" : "john@example.com"}
                  className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-white outline-none transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500">
                {language === "ru" ? "Тема" : "Subject"}
              </label>

              <select className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-white outline-none transition-colors appearance-none">
                {language === "ru" ? (
                  <>
                    <option className="bg-black">Архитектурное проектирование</option>
                    <option className="bg-black">Ремонт интерьера</option>
                    <option className="bg-black">Инвестиционные проекты</option>
                    <option className="bg-black">Другое</option>
                  </>
                ) : (
                  <>
                    <option className="bg-black">Architecture Design</option>
                    <option className="bg-black">Interior Renovation</option>
                    <option className="bg-black">Investment Opportunities</option>
                    <option className="bg-black">Other</option>
                  </>
                )}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500">
                {language === "ru" ? "Сообщение" : "Your Message"}
              </label>
              <textarea 
                rows={4} 
                placeholder={language === "ru"
                  ? "Расскажите о вашем проекте..."
                  : "Tell us about your project..."}
                className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-white outline-none transition-colors resize-none"
              />
            </div>

            <button className="group flex items-center space-x-4 bg-white text-black px-10 py-5 font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all">
              <span>{language === "ru" ? "Отправить" : "Send Enquiry"}</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;