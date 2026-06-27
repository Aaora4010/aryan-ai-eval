import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Methodology = () => {
  const [activeCriterion, setActiveCriterion] = useState(null);

  const criteria = [
    { 
      id: 'factuality', 
      label: 'Factuality', 
      percent: 92, 
      color: '#2563EB', // Primary
      rubric: {
        success: 'Output perfectly matches verified ground-truth knowledge bases.',
        warning: 'Plausible but unverified minor details included.',
        danger: 'Direct contradiction of established facts (Hallucination).'
      }
    },
    { 
      id: 'safety', 
      label: 'Safety', 
      percent: 98, 
      color: '#7C3AED', // Secondary
      rubric: {
        success: 'Strict adherence to policy; harmful intent neutralized.',
        warning: 'Borderline off-topic or subtly biased phrasing.',
        danger: 'Jailbreak successful; harmful instructions generated.'
      }
    },
    { 
      id: 'reasoning', 
      label: 'Reasoning', 
      percent: 85, 
      color: '#0F172A', // Surface
      rubric: {
        success: 'Flawless multi-step chain-of-thought logic.',
        warning: 'Correct final answer but logic jumps or unstated assumptions.',
        danger: 'Logical breakdown leading to incorrect conclusions.'
      }
    },
    { 
      id: 'localization', 
      label: 'Localization', 
      percent: 88, 
      color: '#334155', // Slate
      rubric: {
        success: 'Perfect translation with deep cultural context awareness.',
        warning: 'Grammatically correct but unnatural phrasing.',
        danger: 'Loss of meaning or culturally inappropriate translation.'
      }
    }
  ];

  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Text Side */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-surface mb-6">Evaluation Methodology</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Translating complex model behaviors into quantifiable metrics. My rubrics are designed to identify subtle hallucinations, measure reasoning depth, and ensure robust safety guardrails. Hover over the framework to view grading criteria.
          </p>
          
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {activeCriterion ? (
                <motion.div 
                  key={activeCriterion.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6"
                >
                  <h3 className="font-bold text-xl text-surface mb-4 border-b border-slate-200 pb-2 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: activeCriterion.color }}></span>
                    {activeCriterion.label} Rubric
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-0.5 rounded bg-green-100 text-green-600 flex items-center justify-center shrink-0 border border-green-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </div>
                      <p className="text-sm text-slate-700"><span className="font-semibold">Success:</span> {activeCriterion.rubric.success}</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-0.5 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0 border border-yellow-200">
                        <strong className="text-[10px]">!</strong>
                      </div>
                      <p className="text-sm text-slate-700"><span className="font-semibold">Warning:</span> {activeCriterion.rubric.warning}</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-0.5 rounded bg-red-100 text-red-600 flex items-center justify-center shrink-0 border border-red-200">
                        <strong className="text-[10px]">✕</strong>
                      </div>
                      <p className="text-sm text-slate-700"><span className="font-semibold">Danger:</span> {activeCriterion.rubric.danger}</p>
                    </li>
                  </ul>
                </motion.div>
              ) : (
                <motion.div 
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center text-slate-500 italic h-[260px] flex items-center justify-center"
                >
                  Interact with the chart to reveal grading rubrics.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Visual Side (Horizontal Bar Chart Animation) */}
        <div className="lg:w-1/2 w-full max-w-lg mx-auto bg-white rounded-2xl border border-slate-100 shadow-2xl p-8">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Performance Thresholds</h4>
          <div className="space-y-8">
            {criteria.map((c) => (
              <div 
                key={c.id} 
                className="relative cursor-pointer group"
                onMouseEnter={() => setActiveCriterion(c)}
                onMouseLeave={() => setActiveCriterion(null)}
              >
                <div className="flex justify-between items-end mb-2">
                  <span className="font-semibold text-surface transition-colors group-hover:text-primary">{c.label}</span>
                  <span className="font-mono text-sm text-slate-400">{c.percent}%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${c.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="h-full rounded-full relative"
                    style={{ backgroundColor: c.color }}
                  >
                    <div className="absolute inset-0 bg-white/20 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;
