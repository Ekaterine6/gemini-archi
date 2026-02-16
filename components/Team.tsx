
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const portraitsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(portraitsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        scale: 0.9,
        stagger: 0.2,
        duration: 1.5,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="max-w-3xl mb-24">
          <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4 block">The minds behind</span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Our creative force is a blend of <span className="italic text-zinc-400">visionary architecture</span> and engineering prowess.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map((member, index) => (
            <div 
              key={member.id} 
              // Fix: Ensure ref callback returns void instead of the element
              ref={el => { portraitsRef.current[index] = el; }}
              className="group cursor-none"
            >
              <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-zinc-900">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-serif mb-1">{member.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-zinc-400">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;