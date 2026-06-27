import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const terminalVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.5,
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const alertVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 15 } }
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const tags = ["AI Trainer", "LLM Evaluation", "RLHF", "Prompt Engineering"];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white -z-10" />

      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center space-y-6 mt-4">
        
        <motion.div 
          variants={terminalVariants}
          initial="hidden"
          animate="visible"
          className="font-mono text-sm sm:text-base text-surface/70 bg-slate-50 p-4 rounded-lg border border-slate-200 shadow-sm w-full max-w-2xl text-left"
        >
          <motion.p variants={lineVariants} className="mb-2 text-primary">&gt; Generating response...</motion.p>
          <motion.p variants={lineVariants} className="mb-4">"The AI model claims with 100% certainty that..."</motion.p>
          
          <motion.div variants={alertVariants} className="bg-warning/10 border-l-4 border-warning p-3 mt-4 text-surface flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warning shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span><strong className="text-warning font-bold">Warning:</strong> Factuality evaluation triggered. Claim unverified.</span>
          </motion.div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-surface leading-tight"
        >
          Every AI response <br className="hidden sm:block" />
          <motion.span 
            initial={{ color: '#0F172A' }}
            animate={{ color: '#2563EB' }}
            transition={{ duration: 1.5, delay: 3.5 }}
          >
            tells a story.
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          className="text-xl sm:text-2xl text-slate-600 font-light max-w-2xl"
        >
          My job is determining whether that story is true.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.8 }}
          className="pt-4 w-full flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold text-surface mb-4">Aryan Singh</h2>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 5.2 } }
            }}
            className="flex flex-wrap justify-center gap-3 mb-5 max-w-2xl"
          >
            {tags.map((tag, idx) => (
              <motion.span 
                key={idx} 
                variants={tagVariants}
                className="px-5 py-2 bg-slate-100 text-slate-600 text-sm font-semibold rounded-full border border-slate-200 shadow-sm"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.a 
            href="#cases"
            whileHover={{ scale: 1.05, backgroundColor: '#1E40AF' }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] inline-flex items-center gap-2"
          >
            Explore The Lab
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
