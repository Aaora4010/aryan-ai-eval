import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pipeline = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const nodesRef = useRef([]);

  const steps = [
    { id: '01', title: 'Prompt Injection', desc: 'Stress-testing boundary constraints' },
    { id: '02', title: 'Model Response', desc: 'Raw token generation capture' },
    { id: '03', title: 'Evaluation Protocol', desc: 'Applying factuality & safety rubrics' },
    { id: '04', title: 'Human Feedback', desc: 'RLHF alignment scoring' },
    { id: '05', title: 'Improved Model', desc: 'Trustworthy, aligned deployment' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical line drawing down
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
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

      // Animate each node as it enters the viewport
      nodesRef.current.forEach((node, index) => {
        gsap.fromTo(
          node,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: node,
              start: "top 80%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-surface text-white relative">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-4">The Interactive Pipeline</h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Descending into the laboratory architecture. How raw models are forged into reliable systems through rigorous human evaluation.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line Background (Empty) */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-800"></div>
          
          {/* Vertical Line Active (Drawing down) */}
          <div 
            ref={lineRef}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary shadow-[0_0_10px_rgba(37,99,235,0.8)] z-0"
          ></div>

          {/* Nodes */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                ref={el => nodesRef.current[index] = el}
                className="relative flex items-start group"
              >
                {/* Node Dot */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-800 border-2 border-surface group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(37,99,235,0.6)] transition-all duration-300 z-10"></div>
                
                {/* Content */}
                <div className="ml-20 flex gap-6 items-center">
                  <span className="text-3xl font-light text-slate-700 font-mono group-hover:text-primary/50 transition-colors">{step.id}</span>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
