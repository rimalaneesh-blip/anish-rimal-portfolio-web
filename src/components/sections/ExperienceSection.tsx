import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Graphic Designer',
    company: 'National Printing Press',
    location: 'Kathmandu',
    period: 'Mar 2021 – Present',
    description: [
      'Design and layout brochures, posters, books, and large-format print.',
      'Prepare press-ready files with correct bleed, trap, overprint, and ICC profiles.',
      'Execute color correction, soft/hard proofing, and quality control for print fidelity.',
      'Built template kits that accelerated recurring jobs and improved brand consistency.',
    ],
    current: true,
  },
  {
    title: 'Graphic Designer',
    company: 'Industrial Peace Organization',
    location: 'Remote',
    period: 'Feb 2021 – Dec 2022',
    description: [
      'Produced campaign graphics, infographics, and report layouts for digital and print.',
      'Translated complex data into clear, on-brand visuals for stakeholders.',
      'Developed templates and visual guidelines to drive consistency across programs.',
    ],
    current: false,
  },
  {
    title: 'Video Editor & Social Media Manager',
    company: 'Akshata Media House',
    location: 'Kathmandu',
    period: 'Feb 2019 – Jan 2022',
    description: [
      'Edited and assembled video content for social channels and client deliverables.',
      'Created short-form social videos optimized per platform (Reels/Stories/YouTube).',
      'Designed motion graphics packages, title cards, and basic VFX.',
      'Managed content calendars and monitored engagement metrics.',
    ],
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="mono text-xs tracking-[0.3em] text-primary mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          // EXPERIENCE
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Professional <span className="gradient-text">Journey</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-background border-2 border-primary z-10">
                {exp.current && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content */}
              <div className={`md:w-1/2 pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className={`glass p-6 md:p-8 rounded-2xl ${exp.current ? 'border border-primary/30' : ''}`}>
                  <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase size={16} className="text-primary" />
                    <span className="mono text-xs text-primary tracking-wider">{exp.company}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.title}</h3>
                  
                  <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>

                  <ul className={`space-y-2 text-muted-foreground text-sm ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description.map((item, j) => (
                      <li key={j} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty space for other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className="mt-20 glass p-8 rounded-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="mono text-xs text-primary tracking-widest">EDUCATION</span>
          <h3 className="text-2xl font-bold mt-4">Bachelor of Business Studies</h3>
          <p className="text-muted-foreground mt-2">Tribhuvan University • Expected May 2026</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
