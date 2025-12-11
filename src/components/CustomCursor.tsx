import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="custom-cursor"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="w-3 h-3 rounded-full bg-primary"
          animate={{
            scale: isHovering ? 2.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      
      {/* Cursor trail */}
      <motion.div
        className="custom-cursor"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 0.3 : 0,
        }}
      >
        <motion.div
          className="w-8 h-8 rounded-full border border-primary/50"
          animate={{
            scale: isHovering ? 2 : 1,
          }}
          transition={{ duration: 0.3, delay: 0.05 }}
          style={{ marginLeft: -10, marginTop: -10 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
