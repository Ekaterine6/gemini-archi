import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { REVIEWS } from '../constants';
import { Quote } from 'lucide-react';

interface Props {
  language: "ru" | "en";
}

const Testimonials: React.FC<Props> = ({ language }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-zinc-950 border-t border-zinc-900 overflow-hidden relative">
      {/* Decorative large quote */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Quote size={400} />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-12 flex justify-center text-zinc-600">
          <Quote size={40} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-4xl font-serif leading-relaxed italic text-zinc-200">
              "{REVIEWS[index].content[language]}"
            </p>
            <div>
              <h4 className="text-lg font-bold tracking-widest uppercase mb-1">
                {REVIEWS[index].author}
              </h4>
              <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">
                {REVIEWS[index].position[language]}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 flex justify-center space-x-3">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === index ? 'w-12 bg-white' : 'bg-zinc-800'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;