import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Competencies = () => {
  const [hoveredGroup, setHoveredGroup] = useState(null);

  const skills = [
    { name: 'LLM Evaluation', group: 'A' },
    { name: 'Prompt Engineering', group: 'C' },
    { name: 'RLHF', group: 'B' },
    { name: 'Data Annotation', group: 'C' },
    { name: 'Safety', group: 'B' },
    { name: 'Reasoning', group: 'A' },
    { name: 'Factuality', group: 'A' },
    { name: 'Localization', group: 'B' },
    { name: 'Benchmarking', group: 'A' }
  ];

  const groupLabels = {
    'A': 'The Core Engine',
    'B': 'Alignment & Guardrails',
    'C': 'The Inputs'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section className="py-32 px-6 bg-slate-50 overflow-hidden relative">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-surface mb-4"
        >
          Intelligence Map
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-500 max-w-2xl mx-auto mb-16 text-lg"
        >
          Hover over any node to highlight interconnected methodologies.
        </motion.p>

        {/* Dynamic Label Indicator */}
        <div className="h-8 mb-8 flex justify-center items-center">
          <AnimatePresence mode="wait">
            {hoveredGroup && (
              <motion.span 
                key={hoveredGroup}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="px-4 py-1.5 bg-surface text-white text-sm font-bold uppercase tracking-widest rounded-full shadow-lg"
              >
                {groupLabels[hoveredGroup]}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-3xl mx-auto"
        >
          {skills.map((skill, index) => {
            const isHovered = hoveredGroup === skill.group;
            const isDimmed = hoveredGroup !== null && hoveredGroup !== skill.group;
            
            return (
              <motion.div 
                key={index}
                variants={nodeVariants}
                onMouseEnter={() => setHoveredGroup(skill.group)}
                onMouseLeave={() => setHoveredGroup(null)}
                className={`px-6 py-4 bg-white border-2 rounded-full text-sm md:text-base font-bold transition-all duration-300 cursor-default
                  ${isHovered ? 'border-primary text-primary shadow-[0_10px_30px_-5px_rgba(37,99,235,0.4)] scale-110 z-20' : 
                    isDimmed ? 'border-slate-100 text-slate-300 scale-95 opacity-50 blur-[1px]' : 
                    'border-slate-200 text-surface shadow-sm'}
                `}
              >
                {skill.name}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Competencies;
