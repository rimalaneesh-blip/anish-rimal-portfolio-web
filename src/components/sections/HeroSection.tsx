import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Cpu } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import portrait from '@/assets/anish-portrait.jpg';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const titleChars = "ANISH RIMAL".split('');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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

      {/* Editorial asymmetric grid */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-28 pb-16">
        {/* LEFT: text */}
        <div className="lg:col-span-7 lg:pr-8">
          <motion.p
            className="mono text-xs md:text-sm tracking-[0.3em] text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            ELITE VFX · CREATIVE DIRECTOR
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 overflow-hidden tracking-tight">
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

          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Branding · Video · Motion · CGI / VFX — crafting cinematic
            digital experiences from Kathmandu to the world.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
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
                View Showreel
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

          <motion.p
            className="mono text-xs text-muted-foreground mt-10 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            KATHMANDU, NEPAL · 27.7172°N
          </motion.p>
        </div>

        {/* RIGHT: portrait with floating 3D frame */}
        <motion.div
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-[260px] sm:w-[320px] md:w-[380px] aspect-[3/4]">
            {/* Outer rotating ring frame */}
            <motion.div
              className="absolute -inset-4 rounded-[2rem] border border-primary/20"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -inset-2 rounded-[1.75rem] border border-secondary/20"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />

            {/* Glow halo */}
            <div className="absolute -inset-8 rounded-[2.5rem] bg-primary/10 blur-3xl" />

            {/* Portrait card */}
            <motion.div
              className="relative w-full h-full rounded-[1.5rem] overflow-hidden glass border border-primary/20"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              data-cursor-hover
            >
              <img
                src={portrait}
                alt="Anish Rimal — Multimedia Creative Designer portrait"
                className="w-full h-full object-cover"
              />
              {/* Cinematic gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20" />
              {/* Scanline accent */}
              <div className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"
                   style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent 0 2px, hsl(var(--primary)/0.08) 2px 3px)' }} />

              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-primary/70" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-primary/70" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-primary/70" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-primary/70" />

              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between mono text-[10px] tracking-[0.25em] text-primary/90">
                <span>ID · 001</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  LIVE
                </span>
              </div>
            </motion.div>

            {/* Floating tech badges */}
            <motion.div
              className="absolute -left-6 top-10 glass border border-primary/30 rounded-full px-3 py-2 flex items-center gap-2"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              data-cursor-hover
            >
              <Cpu size={12} className="text-primary" />
              <span className="mono text-[10px] tracking-widest">UNREAL ENGINE</span>
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-16 glass border border-secondary/30 rounded-full px-3 py-2 flex items-center gap-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              data-cursor-hover
            >
              <Sparkles size={12} className="text-secondary" />
              <span className="mono text-[10px] tracking-widest">CGI CORE</span>
            </motion.div>

            <motion.div
              className="absolute -right-6 top-4 glass border border-glow-pink/30 rounded-full px-3 py-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <span className="mono text-[10px] tracking-widest text-glow-pink">5+ YRS</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
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
