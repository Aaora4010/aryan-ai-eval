import React, { useEffect, useRef } from 'react';

const AlignmentVisualizer = ({ status, isExpanded }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width, height;

    const resize = () => {
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    // Initial resize and listener
    resize();
    window.addEventListener('resize', resize);

    // Parse status properties
    const isAligned = ['Resolved', 'Verified', 'Published'].includes(status);
    const isChaotic = status === 'Flagged';
    
    const color = isAligned ? '34, 197, 94' : // Green
                  isChaotic ? '239, 68, 68' : // Red
                  '245, 158, 11';             // Amber

    // Create 3D particles on a sphere (Fibonacci lattice)
    const numParticles = isExpanded ? 80 : 50;
    const particles = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    
    for (let i = 0; i < numParticles; i++) {
      const y = 1 - (i / (numParticles - 1)) * 2; 
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      
      particles.push({
        bx: x, by: y, bz: z, // Base 3D geometry
        x: width / 2, y: height / 2, // Current screen pos
        vx: (Math.random() - 0.5) * 10, vy: (Math.random() - 0.5) * 10
      });
    }

    // Mouse interaction
    let mouse = { x: -1000, y: -1000 };
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = -1000; mouse.y = -1000; };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      const time = Date.now() * 0.0005;
      
      // Dynamic rotation based on chaos
      const rotX = isChaotic ? time * 2 : time * 0.5;
      const rotY = isChaotic ? time * 2.5 : time * 0.3;

      const scaleMultiplier = isExpanded ? Math.min(width, height) * 0.4 : Math.min(width, height) * 0.35;
      const springFactor = isAligned ? 0.08 : (isChaotic ? 0.01 : 0.04);
      const friction = 0.85;
      const connectionDistance = isExpanded ? 80 : 50;

      // Update Physics
      particles.forEach(p => {
        // 1. Rotate base 3D coordinates
        // Rotate around Y
        let x1 = p.bx * Math.cos(rotY) - p.bz * Math.sin(rotY);
        let z1 = p.bx * Math.sin(rotY) + p.bz * Math.cos(rotY);
        let y1 = p.by;

        // Rotate around X
        let x2 = x1;
        let y2 = y1 * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = y1 * Math.sin(rotX) + z1 * Math.cos(rotX);

        // Simple perspective projection
        const distance = 2.5; 
        const zPerspective = 1 / (distance - z2);
        const projectedX = width / 2 + (x2 * zPerspective * scaleMultiplier);
        const projectedY = height / 2 + (y2 * zPerspective * scaleMultiplier);
        
        // 2. Spring force towards target
        p.vx += (projectedX - p.x) * springFactor;
        p.vy += (projectedY - p.y) * springFactor;

        // 3. Chaos injection
        if (isChaotic) {
          p.vx += (Math.random() - 0.5) * 4;
          p.vy += (Math.random() - 0.5) * 4;
        }

        // 4. Mouse Repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distToMouse = Math.sqrt(dx*dx + dy*dy);
        const repelRadius = isExpanded ? 120 : 80;
        
        if (distToMouse < repelRadius) {
          const force = (repelRadius - distToMouse) / repelRadius;
          p.vx += (dx / distToMouse) * force * 5;
          p.vy += (dy / distToMouse) * force * 5;
        }

        // 5. Apply friction and update position
        p.vx *= friction;
        p.vy *= friction;
        p.x += p.vx;
        p.y += p.vy;
      });

      // Draw connections
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);

          if (dist < connectionDistance) {
            // Chaotic lines flicker and break
            if (isChaotic && Math.random() > 0.8) continue; 
            
            const opacity = (1 - (dist / connectionDistance)) * 0.6;
            ctx.strokeStyle = `rgba(${color}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      particles.forEach(p => {
        ctx.fillStyle = `rgba(${color}, 0.8)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, isExpanded ? 2.5 : 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Subtle glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${color}, 1)`;
      });
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [status, isExpanded]);

  return (
    <div className={`w-full ${isExpanded ? 'h-64 my-6' : 'h-32 my-4'} relative rounded-xl overflow-hidden`}>
      {/* Subtle radial gradient background behind the canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none z-0"></div>
      
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-10 cursor-crosshair"
      />
    </div>
  );
};

export default AlignmentVisualizer;
