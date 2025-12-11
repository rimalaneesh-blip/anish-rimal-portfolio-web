import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const titleChars = "ANISH RIMAL".split('');
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2 }}
      >
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover mix-blend-screen opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        {/* Subtitle */}
        <motion.p
          className="mono text-xs md:text-sm tracking-[0.3em] text-primary mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          MULTIMEDIA CREATIVE DESIGNER
        </motion.p>

        {/* Main Title */}
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold mb-6 overflow-hidden">
          {titleChars.map((char, i) => (
            <motion.span
              key={i}
              className="inline-block gradient-text"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.8 + i * 0.05,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Branding • Video • Motion • CGI/VFX
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.button
            onClick={() => onNavigate('work')}
            className="group relative px-8 py-4 rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-glow-pink animate-gradient-shift bg-[length:200%_100%]" />
            <span className="relative z-10 text-primary-foreground font-medium tracking-wide">
              View Work
            </span>
          </motion.button>

          <motion.button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm hover:bg-primary/5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            <span className="font-medium tracking-wide">Get in Touch</span>
          </motion.button>
        </motion.div>

        {/* Location */}
        <motion.p
          className="mono text-xs text-muted-foreground mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          KATHMANDU, NEPAL • 27.7172°N
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span className="mono text-xs text-muted-foreground tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-primary" size={24} />
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-24 left-6 w-px h-20 bg-gradient-to-b from-primary/50 to-transparent" />
      <div className="absolute top-24 left-6 w-20 h-px bg-gradient-to-r from-primary/50 to-transparent" />
      <div className="absolute bottom-24 right-6 w-px h-20 bg-gradient-to-t from-primary/50 to-transparent" />
      <div className="absolute bottom-24 right-6 w-20 h-px bg-gradient-to-l from-primary/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
