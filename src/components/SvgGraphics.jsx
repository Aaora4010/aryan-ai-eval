import React from 'react';
import { motion } from 'framer-motion';

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 2, ease: "easeInOut" } }
};

export const Graphic01 = ({ color }) => (
  <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
    <motion.path 
      d="M0 20 L20 20 L30 5 L40 35 L50 10 L60 25 L70 20 L100 20" 
      fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      variants={pathVariants} initial="hidden" animate="visible"
    />
    <motion.circle cx="30" cy="5" r="2" fill={color} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}/>
    <motion.circle cx="40" cy="35" r="2" fill={color} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}/>
  </svg>
);

export const Graphic02 = ({ color }) => (
  <svg viewBox="0 0 100 40" className="w-full h-full">
    <motion.path d="M5 35 L5 25 L25 25 L25 15 L45 15 L45 5 L65 5 L65 10 L85 10 L85 20 L95 20" fill="none" stroke={color} strokeWidth="2" variants={pathVariants} initial="hidden" animate="visible"/>
  </svg>
);

export const Graphic03 = ({ color }) => (
  <svg viewBox="0 0 100 40" className="w-full h-full">
    <motion.polygon points="50,5 75,15 65,35 35,35 25,15" fill="none" stroke={color} strokeWidth="2" variants={pathVariants} initial="hidden" animate="visible"/>
    <motion.polygon points="50,15 60,20 55,30 45,30 40,20" fill="none" stroke={color} strokeWidth="1" opacity="0.4" variants={pathVariants} initial="hidden" animate="visible"/>
  </svg>
);

export const Graphic04 = ({ color }) => (
  <svg viewBox="0 0 100 40" className="w-full h-full">
    {[...Array(15)].map((_, i) => (
      <motion.circle 
        key={i} cx={Math.random() * 80 + 10} cy={Math.random() * 30 + 5} r={Math.random() * 2 + 1} fill={color}
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1, duration: 0.5 }}
      />
    ))}
    <motion.path d="M10 20 L90 20" stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.3" initial={{opacity:0}} animate={{opacity:0.3}} transition={{delay: 1}}/>
  </svg>
);

export const Graphic05 = ({ color }) => (
  <svg viewBox="0 0 100 40" className="w-full h-full">
    <motion.ellipse cx="50" cy="20" rx="30" ry="15" fill="none" stroke={color} strokeWidth="1.5" variants={pathVariants} initial="hidden" animate="visible"/>
    <motion.ellipse cx="50" cy="20" rx="15" ry="30" fill="none" stroke={color} strokeWidth="1.5" variants={pathVariants} initial="hidden" animate="visible" style={{ transformOrigin: 'center', transform: 'rotate(60deg)' }}/>
    <motion.ellipse cx="50" cy="20" rx="15" ry="30" fill="none" stroke={color} strokeWidth="1.5" variants={pathVariants} initial="hidden" animate="visible" style={{ transformOrigin: 'center', transform: 'rotate(-60deg)' }}/>
  </svg>
);

export const Graphic06 = ({ color }) => (
  <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
    <motion.path d="M0 35 Q 25 35 40 20 T 50 5 T 60 20 T 75 35 T 100 35" fill="none" stroke={color} strokeWidth="2" variants={pathVariants} initial="hidden" animate="visible"/>
    <motion.line x1="50" y1="5" x2="50" y2="35" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.5" initial={{opacity:0}} animate={{opacity:0.5}} transition={{delay:1}}/>
  </svg>
);

export const Graphic07 = ({ color }) => (
  <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
    <motion.path d="M5 30 L30 15 L50 20 L75 5 L95 15" fill="none" stroke={color} strokeWidth="2" variants={pathVariants} initial="hidden" animate="visible"/>
    <motion.path d="M5 35 L30 25 L50 30 L75 15 L95 25" fill="none" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" variants={pathVariants} initial="hidden" animate="visible"/>
  </svg>
);

export const Graphic08 = ({ color }) => (
  <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
    <motion.path d="M10 20 L30 20 L40 10 L60 10 L70 5" fill="none" stroke={color} strokeWidth="2" variants={pathVariants} initial="hidden" animate="visible"/>
    <motion.path d="M30 20 L40 30 L60 30 L70 35" fill="none" stroke={color} strokeWidth="1.5" opacity="0.7" variants={pathVariants} initial="hidden" animate="visible"/>
    <motion.path d="M60 10 L70 15" fill="none" stroke={color} strokeWidth="1" opacity="0.4" variants={pathVariants} initial="hidden" animate="visible"/>
  </svg>
);

export const SvgRenderer = ({ id, status, isExpanded }) => {
  const color = ['Resolved', 'Verified', 'Published'].includes(status) ? '#22C55E' : 
                status === 'Flagged' ? '#EF4444' : '#F59E0B';
  
  const Graphics = [Graphic01, Graphic02, Graphic03, Graphic04, Graphic05, Graphic06, Graphic07, Graphic08];
  const GraphicComponent = Graphics[parseInt(id, 10) - 1] || Graphic01;

  return (
    <div className={`w-full flex justify-center items-center ${isExpanded ? 'h-32 my-6' : 'h-16 my-4'} transition-all duration-500`}>
      <GraphicComponent color={color} />
    </div>
  );
};
