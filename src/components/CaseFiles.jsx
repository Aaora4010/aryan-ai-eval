import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SvgRenderer } from './SvgGraphics';

const CaseFiles = () => {
  const [selectedId, setSelectedId] = useState(null);

  const cases = [
    { id: '01', title: 'Medical Safety Failure', type: 'Safety Violation', status: 'Resolved', details: 'The model provided inaccurate dosages for unverified medications. Evaluated using a rigorous cross-referencing script against PubMed datasets. The RLHF loop was tightened to refuse medical advice.', url: 'https://mercury-currency-12a.notion.site/AI-Response-Evaluation-Framework-38be1ede11a880f3b025cb99a7a6d0dd?source=copy_link' },
    { id: '02', title: 'Prompt Optimization', type: 'Efficiency', status: 'Verified', details: 'Analyzed token usage and generation speed across 500+ structured prompts. Re-engineered system prompts to decrease latency by 15% while maintaining instruction following.', url: 'https://mercury-currency-12a.notion.site/Prompt-Engineering-Laboratory-38be1ede11a88099988fe2aa22721d7b?source=copy_link' },
    { id: '03', title: 'Policy Enforcement', type: 'Domain Constraint', status: 'Flagged', details: 'Detected edge cases where the AI bypassed strict conversational policy guardrails. Evaluation pipeline adjusted to detect implicit forecasting and off-topic digressions.', url: 'https://mercury-currency-12a.notion.site/AI-Safety-Policy-Evaluation-38be1ede11a8807ab7bdfa8fd9ea1e5e?source=copy_link' },
    { id: '04', title: 'Hallucination Investigation', type: 'Factuality', status: 'Iterating', details: 'Investigated "hallucination snowballs" where the model doubled down on fabricated historical dates. Deployed automated factual cross-checking via retrieval augmentation.', url: 'https://mercury-currency-12a.notion.site/Hallucination-Fact-Verification-38be1ede11a880e6bf3cc67511759c66?source=copy_link' },
    { id: '05', title: 'Multilingual Evaluation', type: 'Localization', status: 'Resolved', details: 'Ensured that translated outputs maintained the same factual grounding and cultural safety alignment as the English baselines across 8 tier-1 languages.', url: 'https://mercury-currency-12a.notion.site/Multilingual-AI-Evaluation-38be1ede11a88001ad9ee166bf3bfcab?source=copy_link' },
    { id: '06', title: 'Annotation Audit', type: 'Quality Assurance', status: 'Verified', details: 'Audited 10,000+ data annotations for RLHF pipelines. Identified systematic rater biases and established a new consensus-driven grading rubric.', url: 'https://mercury-currency-12a.notion.site/Data-Annotation-Quality-Framework-38be1ede11a880fea348c60c0a5cca2a?source=copy_link' },
    { id: '07', title: 'LLM Benchmark', type: 'Comparative Analysis', status: 'Published', details: 'Conducted a head-to-head evaluation of state-of-the-art open-weight models against proprietary APIs on a custom suite of complex reasoning tasks.', url: 'https://mercury-currency-12a.notion.site/LLM-Benchmark-Comparative-Analysis-38be1ede11a88056b8e8f08baf282157?source=copy_link' },
    { id: '08', title: 'Reasoning Investigation', type: 'Logic Error', status: 'Hardened', details: 'A chain-of-thought failure mode was observed in multi-step constraint satisfaction. Currently building a synthetic dataset for targeted logic fine-tuning.', url: 'https://mercury-currency-12a.notion.site/AI-Reasoning-Instruction-Following-38be1ede11a880d4b439db4cbf4ebdb5?source=copy_link' },
  ];

  return (
    <section id="cases" className="py-32 px-6 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-surface mb-4">Investigation Board</h2>
            <p className="text-slate-600 text-lg max-w-xl">
              Classified evaluation case studies highlighting critical failure modes and the resulting alignment improvements. Hover over the neural simulations to interact.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c) => (
            <motion.div 
              layoutId={`card-${c.id}`}
              onClick={() => setSelectedId(c.id)}
              key={c.id} 
              className="group relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col min-h-[360px]"
            >
              <motion.div layoutId={`status-${c.id}`} className="flex justify-between items-center mb-2 z-10 relative pointer-events-none">
                <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">CASE_{c.id}</span>
                <span className={`px-2 py-1 text-[10px] uppercase font-bold rounded-sm 
                  ${['Resolved', 'Verified', 'Published'].includes(c.status) ? 'bg-green-100 text-green-700' : 
                    c.status === 'Flagged' ? 'bg-danger/10 text-danger' : 
                    'bg-warning/10 text-warning-dark'}`}>
                  {c.status}
                </span>
              </motion.div>

              <motion.div layoutId={`visualizer-${c.id}`} className="w-full flex-1 flex flex-col justify-center">
                <SvgRenderer id={c.id} status={c.status} isExpanded={false} />
              </motion.div>

              <motion.div layoutId={`title-${c.id}`} className="mt-auto z-10 relative pointer-events-none">
                <p className="text-xs text-primary font-semibold mb-2 uppercase tracking-wide">{c.type}</p>
                <h3 className="text-lg font-bold text-surface leading-snug">{c.title}</h3>
              </motion.div>
              
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Modal Projection */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div 
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              {cases.filter(c => c.id === selectedId).map(c => (
                <div key={c.id} className="p-10 flex flex-col">
                  <motion.div layoutId={`status-${c.id}`} className="flex justify-between items-center z-20">
                    <span className="font-mono text-sm font-bold text-primary">CASE_{c.id}</span>
                    <span className={`px-3 py-1.5 text-xs uppercase font-bold rounded-sm 
                      ${['Resolved', 'Verified', 'Published'].includes(c.status) ? 'bg-green-100 text-green-700' : 
                        c.status === 'Flagged' ? 'bg-danger/10 text-danger' : 
                        'bg-warning/10 text-warning-dark'}`}>
                      {c.status}
                    </span>
                  </motion.div>

                  <motion.div layoutId={`visualizer-${c.id}`} className="w-full">
                    <SvgRenderer id={c.id} status={c.status} isExpanded={true} />
                  </motion.div>

                  <motion.div layoutId={`title-${c.id}`} className="z-20">
                    <p className="text-sm text-slate-500 font-semibold mb-3 uppercase tracking-wider">{c.type}</p>
                    <h3 className="text-3xl font-bold text-surface mb-6 leading-tight">{c.title}</h3>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-6 border-t border-slate-100 pt-6 z-20"
                  >
                    <h4 className="text-sm font-bold text-surface mb-3 uppercase tracking-widest text-slate-400">Investigation Details</h4>
                    <p className="text-slate-700 leading-relaxed text-lg mb-10">{c.details}</p>
                    
                    <a 
                      href={c.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-surface text-white px-6 py-3 rounded-lg font-medium hover:bg-primary transition-colors duration-300"
                    >
                      View Full Case File
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </motion.div>

                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-surface transition-colors border border-slate-200 z-50"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseFiles;
