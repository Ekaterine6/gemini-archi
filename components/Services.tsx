
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4 block">What we do</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Elevating the standard of <span className="italic">modern living.</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-xs text-sm leading-relaxed">
            Our multi-disciplinary approach ensures that every detail, from the structural skeleton to the final finish, is executed with absolute precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            // @ts-ignore
            const IconComponent = Icons[service.icon];
            return (
              <div 
                key={service.id}
                // Fix: Ensure ref callback returns void instead of the element
                ref={el => { cardsRef.current[index] = el; }}
                className="group p-8 border border-zinc-800 hover:border-white transition-colors duration-500 flex flex-col h-full"
              >
                <div className="mb-12 text-zinc-500 group-hover:text-white transition-colors">
                  <IconComponent size={40} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-medium mb-4 uppercase tracking-wider">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <div className="h-px w-0 group-hover:w-full bg-white transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;