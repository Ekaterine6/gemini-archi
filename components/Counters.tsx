import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CounterItem = ({ endValue, label, suffix = "" }: { endValue: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: elementRef.current,
        start: "top 90%",
        once: true,
        onEnter: () => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: endValue,
            duration: 2.5,
            ease: "power2.out",
            onUpdate: () => {
              const newVal = Math.floor(obj.val);
              setCount(prev => (prev !== newVal ? newVal : prev));
            }
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