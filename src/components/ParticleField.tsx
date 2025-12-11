import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const ParticleField = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 50, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div ref={containerRef} className="particles">
      {/* Ambient glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)',
          x: springX,
          y: springY,
          left: '50%',
          top: '50%',
          marginLeft: '-400px',
          marginTop: '-400px',
        }}
      />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: particle.id % 3 === 0 
              ? 'hsl(var(--primary))' 
              : particle.id % 3 === 1 
              ? 'hsl(var(--secondary))' 
              : 'hsl(var(--glow-pink))',
            boxShadow: `0 0 ${particle.size * 3}px ${particle.size}px hsl(var(--primary) / 0.3)`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>
    </div>
  );
};

export default ParticleField;
