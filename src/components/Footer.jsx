import React from 'react';

const Footer = () => {
  return (
    <footer className="py-40 px-6 bg-surface text-center flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle glow effect behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white max-w-5xl leading-tight mb-16 relative z-10 tracking-tight">
        Behind every reliable AI system is thoughtful human evaluation.
      </h2>
      
      <a 
        href="mailto:asaryan4010@gmail.com"
        className="px-10 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-white hover:text-surface transition-colors duration-300 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] relative z-10"
      >
        Let's build more trustworthy AI.
      </a>
      
      <div className="mt-40 text-slate-500 text-sm font-mono flex flex-wrap justify-center gap-6 relative z-10">
        <a href="https://github.com/Aaora4010" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/aryan-singh4010" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="https://mercury-currency-12a.notion.site/AI-Evaluation-Lab-Index-82695b1c091e41f88347fde16fe598bd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Notion</a>
      </div>
    </footer>
  );
};

export default Footer;
