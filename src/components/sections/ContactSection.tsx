import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'anishrimalofficial@gmail.com', href: 'mailto:anishrimalofficial@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+977-9865464119', href: 'tel:+9779865464119' },
    { icon: Linkedin, label: 'LinkedIn', value: '/in/anishrimal', href: 'https://www.linkedin.com/in/anishrimal' },
    { icon: MapPin, label: 'Location', value: 'Kathmandu, Nepal', href: null },
  ];

  return (
    <section ref={ref} className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <motion.p
              className="mono text-xs tracking-[0.3em] text-primary mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              // GET IN TOUCH
            </motion.p>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's Create <span className="gradient-text">Together</span>
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-12 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Have a project in mind? Let's discuss how we can bring your vision to life 
              with compelling visuals and motion.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 p-4 glass rounded-xl hover:border-primary/30 transition-all duration-300"
                      data-cursor-hover
                    >
                      <div className="p-3 rounded-lg bg-primary/10">
                        <info.icon size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="mono text-xs text-muted-foreground">{info.label}</p>
                        <p className="text-foreground">{info.value}</p>
                      </div>
                      <ArrowUpRight 
                        size={20} 
                        className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" 
                      />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 glass rounded-xl">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <info.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="mono text-xs text-muted-foreground">{info.label}</p>
                        <p className="text-foreground">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <label className="mono text-xs text-muted-foreground tracking-wider block mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border/50 py-3 text-foreground focus:border-primary outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="mono text-xs text-muted-foreground tracking-wider block mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border/50 py-3 text-foreground focus:border-primary outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="mono text-xs text-muted-foreground tracking-wider block mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border/50 py-3 text-foreground focus:border-primary outline-none transition-colors resize-none h-32"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="group w-full py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-glow-pink animate-gradient-shift bg-[length:200%_100%] text-primary-foreground font-medium flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-cursor-hover
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          className="mt-20 pt-12 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="mono text-xs text-muted-foreground">
            © 2024 ANISH RIMAL. ALL RIGHTS RESERVED.
          </p>
          <p className="mono text-xs text-muted-foreground">
            DESIGNED & DEVELOPED WITH ♡
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default ContactSection;
