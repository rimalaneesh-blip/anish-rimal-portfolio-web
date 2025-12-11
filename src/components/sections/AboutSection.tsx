import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.p
              className="mono text-xs tracking-[0.3em] text-primary mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              // ABOUT ME
            </motion.p>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting <span className="gradient-text">Visual</span> Stories
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Multimedia creative designer with 5+ years of experience delivering video, 
              motion graphics, CGI/VFX, and print assets for brands and organizations. 
              Strong in platform-optimized social content, prepress and color management, 
              and template-driven systems that improve speed and consistency.
            </motion.p>

            <motion.p
              className="text-muted-foreground mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Collaborative partner to producers, program teams, and press operators; 
              dependable under tight deadlines with an eye for brand fidelity and visual storytelling.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="mono text-xs text-muted-foreground tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative aspect-square">
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-[10%] rounded-full border border-secondary/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-[20%] rounded-full border border-glow-pink/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Center content */}
              <div className="absolute inset-[30%] glass rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text mb-2">AR</div>
                  <div className="mono text-xs text-muted-foreground">EST. 2019</div>
                </div>
              </div>

              {/* Floating labels */}
              <motion.div
                className="absolute top-[5%] left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full mono text-xs"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                VIDEO
              </motion.div>
              <motion.div
                className="absolute bottom-[5%] left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full mono text-xs"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                CGI/VFX
              </motion.div>
              <motion.div
                className="absolute left-[5%] top-1/2 -translate-y-1/2 glass px-4 py-2 rounded-full mono text-xs"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                MOTION
              </motion.div>
              <motion.div
                className="absolute right-[5%] top-1/2 -translate-y-1/2 glass px-4 py-2 rounded-full mono text-xs"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 3 }}
              >
                BRANDING
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
