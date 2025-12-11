import { motion, useScroll, useTransform } from 'framer-motion';
import ring3d from '@/assets/3d-ring.png';
import sphere3d from '@/assets/3d-sphere.png';

const FloatingElements = () => {
  const { scrollYProgress } = useScroll();
  
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const sphereY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const ringScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main 3D Ring */}
      <motion.div
        className="absolute right-[5%] top-[15%] w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
        style={{ rotate: ringRotate, scale: ringScale }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img 
          src={ring3d} 
          alt="" 
          className="w-full h-full object-contain mix-blend-screen"
          style={{ filter: 'drop-shadow(0 0 40px hsl(186 100% 50% / 0.4))' }}
        />
      </motion.div>

      {/* Floating Sphere */}
      <motion.div
        className="absolute left-[3%] bottom-[25%] w-[120px] h-[120px] md:w-[200px] md:h-[200px]"
        style={{ y: sphereY }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <img 
          src={sphere3d} 
          alt="" 
          className="w-full h-full object-contain mix-blend-screen"
          style={{ filter: 'drop-shadow(0 0 30px hsl(270 80% 60% / 0.4))' }}
        />
      </motion.div>

      {/* Abstract floating shapes */}
      <motion.div
        className="absolute right-[25%] bottom-[15%] w-16 h-16 opacity-30"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-full h-full border border-primary/30 rotate-45" />
      </motion.div>

      <motion.div
        className="absolute left-[20%] top-[60%] w-12 h-12 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full rounded-full border border-secondary/40" />
      </motion.div>

      {/* Additional small elements */}
      <motion.div
        className="absolute left-[40%] top-[20%] w-6 h-6"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full rounded-full bg-primary/30 blur-sm" />
      </motion.div>

      <motion.div
        className="absolute right-[40%] bottom-[30%] w-4 h-4"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full rounded-full bg-secondary/40 blur-sm" />
      </motion.div>

      {/* Decorative lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <motion.line
          x1="0%"
          y1="30%"
          x2="100%"
          y2="70%"
          stroke="hsl(186 100% 50%)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <motion.line
          x1="100%"
          y1="20%"
          x2="0%"
          y2="80%"
          stroke="hsl(270 80% 60%)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
};

export default FloatingElements;
