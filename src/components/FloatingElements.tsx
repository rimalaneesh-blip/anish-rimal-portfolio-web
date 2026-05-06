import { motion, useScroll, useTransform } from 'framer-motion';
import ring3d from '@/assets/3d-ring-v2.png';

const FloatingElements = () => {
  const { scrollYProgress } = useScroll();

  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const ringScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const ringRotate2 = useTransform(scrollYProgress, [0, 1], [0, -540]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main 3D Ring */}
      <motion.div
        className="absolute right-[5%] top-[15%] w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
        style={{ rotate: ringRotate, scale: ringScale }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img src={ring3d} alt="" className="w-full h-full object-contain mix-blend-screen" />
      </motion.div>

      {/* Secondary smaller ring (echo) */}
      <motion.div
        className="absolute right-[18%] top-[55%] w-[120px] h-[120px] md:w-[180px] md:h-[180px] hidden md:block"
        style={{ rotate: ringRotate2, y: yParallax }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <img src={ring3d} alt="" className="w-full h-full object-contain mix-blend-screen opacity-70" />
      </motion.div>

      {/* 3D Wireframe Cube */}
      <motion.div
        className="absolute left-[8%] top-[25%] w-24 h-24 md:w-36 md:h-36"
        style={{ perspective: 800, y: yParallaxSlow }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateX: 360, rotateY: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {[
            { t: 'rotateY(0deg) translateZ(50px)' },
            { t: 'rotateY(90deg) translateZ(50px)' },
            { t: 'rotateY(180deg) translateZ(50px)' },
            { t: 'rotateY(-90deg) translateZ(50px)' },
            { t: 'rotateX(90deg) translateZ(50px)' },
            { t: 'rotateX(-90deg) translateZ(50px)' },
          ].map((f, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-primary/40"
              style={{
                transform: f.t,
                background:
                  'linear-gradient(135deg, hsl(var(--primary)/0.05), hsl(var(--secondary)/0.05))',
                boxShadow: 'inset 0 0 20px hsl(var(--primary)/0.15)',
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* 3D Wireframe Tetrahedron (CSS pseudo) */}
      <motion.div
        className="absolute right-[10%] bottom-[10%] w-20 h-20 md:w-28 md:h-28"
        style={{ perspective: 600 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">
          <defs>
            <linearGradient id="tetra" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="hsl(186 100% 50%)" />
              <stop offset="100%" stopColor="hsl(270 80% 60%)" />
            </linearGradient>
          </defs>
          <motion.polygon
            points="50,5 95,85 5,85"
            fill="none"
            stroke="url(#tetra)"
            strokeWidth="0.8"
          />
          <polygon points="50,5 95,85 50,55" fill="none" stroke="url(#tetra)" strokeWidth="0.6" />
          <polygon points="50,5 5,85 50,55" fill="none" stroke="url(#tetra)" strokeWidth="0.6" />
          <polygon points="5,85 95,85 50,55" fill="none" stroke="url(#tetra)" strokeWidth="0.6" />
        </svg>
      </motion.div>

      {/* DNA / Helix dots */}
      <motion.div
        className="absolute left-[45%] top-[8%] w-2 h-[60vh] hidden lg:block"
        style={{ y: yParallax }}
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/60"
            style={{
              top: `${i * 5.5}%`,
              left: `calc(50% + ${Math.sin(i * 0.6) * 40}px)`,
              boxShadow: '0 0 10px hsl(var(--primary))',
            }}
            animate={{
              x: [0, Math.cos(i) * 15, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>

      {/* Abstract floating shapes */}
      <motion.div
        className="absolute right-[25%] bottom-[15%] w-16 h-16 opacity-30"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-full h-full border border-primary/30 rotate-45" />
      </motion.div>

      <motion.div
        className="absolute left-[20%] top-[60%] w-12 h-12 opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-full border border-secondary/40" />
      </motion.div>

      {/* Concentric pulse rings */}
      <div className="absolute left-[12%] bottom-[20%] w-40 h-40 hidden md:block">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-primary/30"
            animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: 'easeOut',
            }}
          />
        ))}
        <div className="absolute inset-[40%] rounded-full bg-primary/40 blur-md" />
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute right-[40%] bottom-[30%] w-4 h-4"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-full bg-secondary/40 blur-sm" />
      </motion.div>

      {/* Grid plane (perspective floor) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[140%] h-[40vh] opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          transform: 'perspective(600px) rotateX(60deg)',
          transformOrigin: 'center bottom',
          maskImage: 'linear-gradient(to top, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to top, black, transparent)',
        }}
      />

      {/* Decorative lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <motion.line
          x1="0%" y1="30%" x2="100%" y2="70%"
          stroke="hsl(186 100% 50%)" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <motion.line
          x1="100%" y1="20%" x2="0%" y2="80%"
          stroke="hsl(270 80% 60%)" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
};

export default FloatingElements;
