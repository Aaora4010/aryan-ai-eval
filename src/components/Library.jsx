import React from 'react';

const Library = () => {
  const links = [
    { 
      title: 'Evaluation Rubrics & Workflows', 
      type: 'Notion Workspace', 
      url: 'https://mercury-currency-12a.notion.site/AI-Evaluation-Lab-Index-82695b1c091e41f88347fde16fe598bd?source=copy_link' 
    },
    { 
      title: 'AI-Evaluation-Lab', 
      type: 'GitHub Repository', 
      url: 'https://github.com/Aaora4010/AI-Evaluation-Lab.git' 
    },
    { 
      title: 'Aaora4010', 
      type: 'GitHub Profile', 
      url: 'https://github.com/Aaora4010' 
    },
    { 
      title: 'Aryan Singh', 
      type: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/aryan-singh4010' 
    }
  ];

  return (
    <section className="py-32 px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-surface mb-12">Research Library</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, i) => (
            <a 
              key={i} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-6 border border-slate-200 rounded-xl hover:border-primary hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
            >
              <p className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-widest">{link.type}</p>
              <h3 className="text-lg font-bold text-surface group-hover:text-primary transition-colors flex items-center justify-between">
                {link.title}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;
