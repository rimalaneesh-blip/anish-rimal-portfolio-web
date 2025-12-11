import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';
import ParticleField from '@/components/ParticleField';
import FloatingElements from '@/components/FloatingElements';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import WorkSection from '@/components/sections/WorkSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const mainRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    work: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    // Loading simulation
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const ref = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Custom Cursor - Desktop only */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <motion.div
                className="text-6xl md:text-8xl font-bold gradient-text mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                AR
              </motion.div>
              <motion.div
                className="w-48 h-1 bg-muted rounded-full overflow-hidden mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-glow-pink"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
              </motion.div>
              <motion.p
                className="mono text-xs text-muted-foreground mt-4 tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                LOADING EXPERIENCE
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Effects */}
      <ParticleField />
      <FloatingElements />

      {/* Navigation */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content */}
      <main ref={mainRef} className="relative z-10">
        <div ref={sectionRefs.hero}>
          <HeroSection onNavigate={scrollToSection} />
        </div>
        
        <div ref={sectionRefs.about}>
          <AboutSection />
        </div>
        
        <div ref={sectionRefs.skills}>
          <SkillsSection />
        </div>
        
        <div ref={sectionRefs.work}>
          <WorkSection />
        </div>
        
        <div ref={sectionRefs.experience}>
          <ExperienceSection />
        </div>
        
        <div ref={sectionRefs.contact}>
          <ContactSection />
        </div>
      </main>

      {/* Noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </div>
  );
};

export default Index;
