
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Video } from 'lucide-react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animations
      gsap.fromTo(titleRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.5 }
      );
      gsap.fromTo(subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 1 }
      );

      // Parallax effect on scroll
      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 200,
        scale: 1.1,
        ease: "none"
      });

      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: -100,
        opacity: 0,
        ease: "none"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video Container */}
      <div ref={bgRef} className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
        >
          <source src="public/pictures/vid.mp4" type="video/mp4" />
          
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>



      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <h1 
          ref={titleRef} 
          className="text-6xl md:text-9xl font-serif font-black tracking-tight leading-none mb-8"
        >
          ARCHITECTING <br />
          <span className="italic">THE FUTURE</span>
        </h1>
        <div ref={subtitleRef} className="flex flex-col items-center space-y-6">
          <p className="text-zinc-300 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto uppercase">
            Crafting monumental spaces for a life less ordinary.
          </p>
          <div className="w-px h-24 bg-white/20"></div>
          <a href="#services" className="animate-bounce">
            <ChevronDown size={32} strokeWidth={1} />
          </a>
        </div>
      </div>

      {/* Side labels */}
      <div className="absolute bottom-12 left-12 hidden lg:block z-20">
        <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 rotate-90 origin-left">
          SINCE 2012
        </p>
      </div>
      <div className="absolute bottom-12 right-12 hidden lg:block z-20">
        <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500">
          ESTABLISHED IN RUSSIA MAKHACHKALA
        </p>
      </div>
    </section>
  );
};

export default Hero;
