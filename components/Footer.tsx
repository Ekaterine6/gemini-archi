
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
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
              Pioneering architectural excellence in Turkmenistan and beyond. Dedicated to creating timeless spaces that redefine modern luxury.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.4em] text-white mb-6">Explore</h5>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Philosophy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.4em] text-white mb-6">Service</h5>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Commercial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Residential</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Urban Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Interiors</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h5 className="text-[10px] uppercase tracking-[0.4em] text-white mb-6">Office</h5>
              <address className="not-italic text-zinc-500 text-sm leading-relaxed">
                Ashgabat, Turkmenistan<br />
                Business Center "Gulzemin"<br />
                Floor 12, Office 1205
              </address>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-900 gap-6">
          <p className="text-[10px] uppercase tracking-widest text-zinc-700">
            &copy; {currentYear} IBRAGIM STROY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-zinc-700">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
