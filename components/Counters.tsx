
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CounterItem = ({ endValue, label, suffix = "" }: { endValue: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fix: Ensure ScrollTrigger is imported and accessible
      ScrollTrigger.create({
        trigger: elementRef.current,
        start: "top 90%",
        onEnter: () => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: endValue,
            duration: 2.5,
            ease: "power2.out",
            onUpdate: () => setCount(Math.floor(obj.val))
          });
        }
      });
    }, elementRef);
    return () => ctx.revert();
  }, [endValue]);

  return (
    <div ref={elementRef} className="text-center p-8">
      <div className="text-6xl md:text-8xl font-serif font-black mb-4">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.4em] text-zinc-500">
        {label}
      </div>
    </div>
  );
};

const Counters: React.FC = () => {
  return (
    <section className="py-24 border-y border-zinc-900 bg-black">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        <CounterItem endValue={12} label="Years Exp" />
        <CounterItem endValue={140} label="Projects" suffix="+" />
        <CounterItem endValue={25} label="Awards" />
        <CounterItem endValue={100} label="Clients" suffix="%" />
      </div>
    </section>
  );
};

export default Counters;