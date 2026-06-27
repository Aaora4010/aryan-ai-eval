import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const sectionRef = useRef(null);
  const eventsRef = useRef([]);
  const lineRef = useRef(null);

  const events = [
    { year: 'Phase 1', role: 'Data Annotation & QA', org: 'Outlier, Appen & CrowdGen', desc: 'Foundational work structuring raw data for model training and basic quality assurance.' },
    { year: 'Phase 2', role: 'AI Training', org: 'Alignerr & Mindrift', desc: 'Executing complex RLHF workflows and writing high-quality prompt-response pairs to steer model behavior.' },
    { year: 'Phase 3', role: 'Independent AI Evaluation Lab', org: 'Aryan Singh', desc: 'Designing custom rubrics and stress-testing cutting-edge LLMs for factuality and safety.' },
    { year: 'Ongoing', role: 'Continuous Learning', org: 'Research & Implementation', desc: 'Staying at the forefront of AI alignment techniques, automated benchmarking, and red-teaming.' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Draw the central line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "bottom center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        }
      );

      // Animate each event block
      eventsRef.current.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-surface text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-20 text-center">Experience Timeline</h2>
        
        <div className="relative">
          {/* Background Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-800 hidden md:block"></div>
          
          {/* Animated Line */}
          <div 
            ref={lineRef}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary shadow-[0_0_15px_rgba(37,99,235,0.6)] hidden md:block z-0"
          ></div>

          {/* Mobile Lines */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-800 md:hidden"></div>
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary shadow-[0_0_15px_rgba(37,99,235,0.6)] md:hidden z-0" ref={el => { if(el && window.innerWidth < 768) lineRef.current = el }}></div>

          <div className="space-y-16">
            {events.map((event, i) => (
              <div 
                key={i} 
                ref={el => eventsRef.current[i] = el}
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Center Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-surface border-2 border-primary z-10 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                
                {/* Content */}
                <div className="ml-14 md:ml-0 md:w-5/12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-primary/50 transition-colors">
                  <span className="font-mono text-primary mb-2 block">{event.year}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{event.role}</h3>
                  <span className="text-sm font-semibold text-slate-400 mb-4 block">{event.org}</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{event.desc}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
