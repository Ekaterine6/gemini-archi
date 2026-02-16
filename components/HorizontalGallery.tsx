
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { PROJECTS } from '../constants';

const HorizontalGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Determine screen width to handle mobile vs desktop
    const isMobile = window.innerWidth < 1024;

    if (!isMobile) {
      const pinCtx = gsap.context(() => {
        const pinScroll = gsap.to(sectionRef.current, {
          x: () => -(sectionRef.current!.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${sectionRef.current!.scrollWidth}`,
            onUpdate: (self) => setProgress(self.progress),
            invalidateOnRefresh: true,
          }
        });
      }, triggerRef);

      return () => pinCtx.revert();
    }
  }, []);

  return (
    <section id="projects" ref={triggerRef} className="relative overflow-hidden bg-black">
      {/* Scroll indicator/counter */}
      <div className="absolute top-12 left-6 md:left-12 z-30 flex items-center space-x-6">
        <div className="text-zinc-500 font-mono text-xs">
          {String(Math.round(progress * PROJECTS.length) + 1).padStart(2, '0')}
          <span className="mx-2">/</span>
          {String(PROJECTS.length).padStart(2, '0')}
        </div>
        <div className="w-48 h-[1px] bg-zinc-800 relative">
          <div 
            className="absolute top-0 left-0 h-full bg-white transition-all duration-200" 
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      {/* Heading (Pinned for desktop during horizontal scroll) */}
      <div className="hidden lg:block absolute bottom-12 left-12 z-30 pointer-events-none">
        <h2 className="text-8xl font-serif text-white/5 font-black uppercase tracking-tighter select-none">
          PORTFOLIO
        </h2>
      </div>

      <div className="flex lg:h-screen items-center">
        <div 
          ref={sectionRef} 
          className="flex flex-nowrap px-6 md:px-12 py-32 lg:py-0 gap-6 lg:gap-12 overflow-x-auto lg:overflow-x-visible snap-x scroll-smooth scrollbar-hide lg:cursor-grab active:cursor-grabbing"
        >
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] snap-center group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border border-zinc-800/50">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                
                {/* Year Label */}
                <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-bold px-2 py-1">
                  {project.year}
                </div>
              </div>
              
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2 block">{project.category}</span>
                  <h3 className="text-2xl md:text-3xl font-serif">{project.title}</h3>
                </div>
                <button className="p-3 border border-zinc-800 hover:bg-white hover:text-black transition-all">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
          
          {/* Final spacing for desktop scroll */}
          <div className="hidden lg:block flex-shrink-0 w-[10vw]"></div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
