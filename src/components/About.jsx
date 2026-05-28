import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '1+', label: 'Years Experience' },
  { number: '5+', label: 'Projects Shipped' },
  { number: '7.7', label: 'CGPA' },
  { number: '3+', label: 'Certifications' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-accent/5 blur-[100px] left-0 top-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          About Me
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image placeholder with decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              {/* Frame decorations */}
              <div className="absolute -inset-3 border border-accent/20 rounded-sm" />
              <div className="absolute -inset-6 border border-white/5 rounded-sm" />
              {/* Photo */}
              <div className="relative w-full h-full rounded-sm overflow-hidden">
                <img
                  src="/uttam.jpg"
                  alt="Uttam Patidar"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink/60 to-transparent" />
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-accent/60" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-accent/60" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-accent/60" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-accent/60" />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -right-6 top-12 glass-light px-4 py-3 rounded border border-white/10"
              >
                <p className="font-mono text-xs text-muted">Available</p>
                <p className="font-display text-lg font-bold text-green-400">Freelance</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                className="absolute -left-6 bottom-12 glass-light px-4 py-3 rounded border border-white/10"
              >
                <p className="font-mono text-xs text-muted">Based in</p>
                <p className="font-display text-lg font-bold text-paper">Indore, MP</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl font-black text-paper mb-6 leading-tight"
            >
              Crafting digital experiences that <span className="gradient-text italic">matter.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-4 text-muted leading-relaxed mb-10"
            >
              <p>
                I'm a Frontend Developer from <span className="text-paper">Madhya Pradesh, India</span> with hands-on experience
                building modern web applications. My passion lies at the intersection of{' '}
                <span className="text-paper">engineering precision</span> and <span className="text-paper">creative design</span>.
              </p>
              <p>
                I specialize in the React ecosystem — building everything from sleek landing pages to
                full-stack MERN applications. I completed my B.Tech in Computer Science from{' '}
                <span className="text-paper">Malwa Institute of Science & Technology</span> with a 7.7 CGPA.
              </p>
              <p>
                I interned at <span className="text-accent">Geekster</span> where I worked on responsive UI using
                React, Node, Express & MongoDB, and I'm currently working as a Frontend Developer at{' '}
                <span className="text-accent">ACORE IT HUB</span>.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map(({ number, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 200 }}
                  className="text-center glass rounded-sm p-4 border border-white/5"
                >
                  <div className="font-display text-3xl font-black gradient-text">{number}</div>
                  <div className="font-mono text-xs text-muted mt-1">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
