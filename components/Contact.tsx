import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactProps {
  language: "ru" | "en";
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mdallyoo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-24">

        {/* LEFT SIDE */}
        <div className="lg:w-1/2">
          <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4 block">
            {language === "ru" ? "Контакты" : "Get in touch"}
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
              <p className="text-xl font-light">Makhachkala<br />Dagestan, Russia</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                {language === "ru" ? "Почта" : "General Enquiries"}
              </p>
              <p className="text-xl font-light">malakhov.i.93@mail.ru</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                {language === "ru" ? "Телефон" : "Call us"}
              </p>
              <p className="text-xl font-light">+7 960 407-42-02</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500">
                  {language === "ru" ? "Имя" : "Name"}
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder={language === "ru" ? "Иван Иванов" : "John Doe"}
                  className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-white outline-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-white outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500">
                {language === "ru" ? "Сообщение" : "Your Message"}
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder={language === "ru" ? "Опишите ваш проект..." : "Tell us about your project..."}
                className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-white outline-none resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group flex items-center space-x-4 bg-white text-black px-10 py-5 font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all"
            >
              <span>
                {status === "sending"
                  ? (language === "ru" ? "Отправка..." : "Sending...")
                  : (language === "ru" ? "Отправить" : "Send Enquiry")}
              </span>
              <Send size={18} />
            </button>

            {/* STATUS MESSAGE */}
            {status === "success" && (
              <p className="text-green-500 text-sm">
                {language === "ru" ? "Сообщение отправлено ✅" : "Message sent successfully ✅"}
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-sm">
                {language === "ru" ? "Ошибка отправки ❌" : "Something went wrong ❌"}
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;