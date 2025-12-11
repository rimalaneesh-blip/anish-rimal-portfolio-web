import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Brand Identity Systems',
    category: 'BRANDING',
    description: 'Complete visual identity design including logos, guidelines, and brand assets for various organizations.',
    tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
    color: 'from-primary to-secondary',
  },
  {
    id: 2,
    title: 'Motion Graphics Packages',
    category: 'MOTION',
    description: 'Dynamic title sequences, lower thirds, and animated graphics for video productions.',
    tags: ['After Effects', 'Premiere Pro', 'Animation'],
    color: 'from-secondary to-glow-pink',
  },
  {
    id: 3,
    title: 'CGI Product Visualization',
    category: 'CGI/VFX',
    description: '3D product renders and visualizations using Blender and compositing in After Effects.',
    tags: ['Blender', 'CGI', '3D Rendering'],
    color: 'from-glow-pink to-primary',
  },
  {
    id: 4,
    title: 'Social Media Campaigns',
    category: 'VIDEO',
    description: 'Platform-optimized video content for Reels, Stories, and YouTube including editing and post-production.',
    tags: ['Video Editing', 'Social Media', 'Content Strategy'],
    color: 'from-primary to-glow-pink',
  },
  {
    id: 5,
    title: 'Print Design & Prepress',
    category: 'PRINT',
    description: 'High-quality print materials with proper color management, prepress preparation, and production oversight.',
    tags: ['InDesign', 'CMYK', 'Prepress'],
    color: 'from-secondary to-primary',
  },
];

const WorkSection = () => {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      const newIndex = direction === 'left' 
        ? Math.max(0, activeIndex - 1)
        : Math.min(projects.length - 1, activeIndex + 1);
      
      setActiveIndex(newIndex);
      scrollRef.current.scrollTo({
        left: newIndex * scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={ref} className="min-h-screen py-20">
      <div className="px-6 md:px-12 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <motion.p
              className="mono text-xs tracking-[0.3em] text-primary mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              // SELECTED WORK
            </motion.p>

            <motion.h2
              className="text-4xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
          </div>

          {/* Navigation */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => scroll('left')}
              className="p-3 glass rounded-full hover:bg-primary/10 transition-colors disabled:opacity-30"
              disabled={activeIndex === 0}
              data-cursor-hover
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 glass rounded-full hover:bg-primary/10 transition-colors disabled:opacity-30"
              disabled={activeIndex === projects.length - 1}
              data-cursor-hover
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <motion.div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-12 pb-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="flex-shrink-0 w-[85vw] md:w-[600px] lg:w-[700px]"
            style={{ scrollSnapAlign: 'start' }}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
          >
            <div className="group relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden glass">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="mono text-xs text-primary tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold mt-4 mb-6 group-hover:gradient-text transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mono text-xs px-3 py-1 rounded-full border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="p-4 rounded-full bg-primary/10 border border-primary/30">
                    <ExternalLink size={20} className="text-primary" />
                  </div>
                </motion.div>
              </div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/30 transition-colors duration-500" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i);
              scrollRef.current?.scrollTo({
                left: i * (scrollRef.current.offsetWidth - 48),
                behavior: 'smooth',
              });
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
            }`}
            data-cursor-hover
          />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
