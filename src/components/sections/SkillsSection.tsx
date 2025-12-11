import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    category: 'VIDEO & MOTION',
    items: [
      { name: 'Video Editing', level: 95 },
      { name: 'Motion Graphics', level: 90 },
      { name: 'Color Correction', level: 88 },
      { name: 'Sound Design', level: 75 },
    ],
  },
  {
    category: 'CGI & VFX',
    items: [
      { name: 'Blender', level: 85 },
      { name: 'After Effects', level: 92 },
      { name: 'Unreal Engine', level: 70 },
      { name: 'Compositing', level: 82 },
    ],
  },
  {
    category: 'DESIGN & PRINT',
    items: [
      { name: 'Photoshop', level: 95 },
      { name: 'Illustrator', level: 90 },
      { name: 'InDesign', level: 88 },
      { name: 'Prepress', level: 85 },
    ],
  },
  {
    category: 'TOOLS',
    items: [
      { name: 'Premiere Pro', level: 95 },
      { name: 'DaVinci Resolve', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'Color Management', level: 88 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="mono text-xs tracking-[0.3em] text-primary mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          // SKILLS & EXPERTISE
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Technical <span className="gradient-text">Arsenal</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              className="glass p-6 md:p-8 rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + groupIndex * 0.1 }}
            >
              <h3 className="mono text-sm text-primary tracking-widest mb-6">
                {skillGroup.category}
              </h3>

              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="mono text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-glow-pink"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.5,
                          delay: 0.5 + groupIndex * 0.1 + skillIndex * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Software Logos */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 opacity-50"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {['Adobe CC', 'DaVinci', 'Blender', 'Unreal', 'Figma'].map((tool) => (
            <div key={tool} className="mono text-xs tracking-widest">
              {tool}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
