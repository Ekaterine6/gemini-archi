
import React from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-24">
        <div className="lg:w-1/2">
          <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4 block">Get in touch</span>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-12">
            Let's build <span className="italic">something great</span> together.
          </h2>
          
          <div className="space-y-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Location</p>
              <p className="text-xl font-light">Karakum St, Ashgabat<br />Turkmenistan</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">General Enquiries</p>
              <p className="text-xl font-light hover:text-zinc-400 transition-colors">
                <a href="mailto:info@ibragimstroy.com">info@ibragimstroy.com</a>
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Call us</p>
              <p className="text-xl font-light">+993 12 000000</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-white outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-white outline-none transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500">Subject</label>
              <select className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-white outline-none transition-colors appearance-none">
                <option className="bg-black">Architecture Design</option>
                <option className="bg-black">Interior Renovation</option>
                <option className="bg-black">Investment Opportunities</option>
                <option className="bg-black">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500">Your Message</label>
              <textarea 
                rows={4} 
                placeholder="Tell us about your project..."
                className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-white outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button className="group flex items-center space-x-4 bg-white text-black px-10 py-5 font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all">
              <span>Send Enquiry</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
