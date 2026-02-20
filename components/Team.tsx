import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TEAM } from '../constants';

interface TeamProps {
  language: "ru" | "en";
}

const Team: React.FC<TeamProps> = ({ language }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const membersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(membersRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-screen-2xl mx-auto">
        <div className="max-w-xl mb-24">
          <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4 block">
            {language === "ru" ? "Команда" : "Our Team"}
          </span>

          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            {language === "ru"
              ? "Люди, стоящие за проектами"
              : "The minds behind"}
          </h2>

          <p className="text-zinc-500 mt-6 text-sm max-w-md">
            {language === "ru"
              ? "Наш творческий коллектив сочетает архитектурное видение и инженерное мастерство."
              : "Our creative force is a blend of visionary architecture and engineering prowess."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map((member, index) => (
            <div
              key={member.id}
              ref={el => { membersRef.current[index] = el; }}
              className="group"
            >
              <div className="overflow-hidden mb-6 bg-zinc-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h3 className="text-xl font-serif">{member.name}</h3>

              <p className="text-zinc-500 text-sm mt-1">
                {member.role[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
