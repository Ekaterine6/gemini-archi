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
        {/* Heading Section */}
        <div className="max-w-xl mb-24">
          <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4 block">
            {language === "ru" ? "Основатель" : "Founder"}
          </span>

          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            {language === "ru"
              ? "Человек, стоящий за проектами"
              : "The person behind the projects"}
          </h2>

          <p className="text-zinc-500 mt-6 text-sm max-w-md">
            {language === "ru"
              ? "Ибрагим лично руководит каждым проектом, объединяя проверенную команду специалистов и обеспечивая качество на каждом этапе строительства."
              : "Ibragim personally leads every project, bringing together a trusted construction team and ensuring quality at every stage."}
          </p>
        </div>

        {/* Founder Card */}
        <div className="flex justify-center">
          {TEAM.map((member, index) => (
            <div
              key={member.id}
              ref={el => { membersRef.current[index] = el; }}
              className="group max-w-sm"
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

              <p className="text-zinc-400 text-xs mt-3 italic">
                {language === "ru"
                  ? "«Строительство — это не просто работа, а ответственность перед людьми.»"
                  : "“Construction is not just work — it’s responsibility to people.”"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;