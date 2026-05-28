import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitFork, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Food Order & AI Recipe Generator',
    category: 'Full Stack',
    description: 'Order delicious meals and get personalized recipes powered by advanced AI. Features secure Firebase authentication, custom recipes via Google Generative AI, and a fully responsive design.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Google AI'],
    color: '#e8552a',
    year: '2024',
    link: 'https://food-order-ai-reciepe-generator.vercel.app/',
    github: 'https://github.com/Uttam7470',
  },
  {
    id: 2,
    title: 'Movie App',
    category: 'Web App',
    description: 'A Movies app built with React featuring movie browsing, search functionality, and detailed information on each title. Integrated a third-party API for up-to-date data and a seamless user experience.',
    tech: ['React', 'REST API', 'JavaScript', 'CSS'],
    color: '#c9953a',
    year: '2024',
    link: 'https://movie-app-iota-lime.vercel.app/',
    github: 'https://github.com/Uttam7470',
  },
  {
    id: 3,
    title: 'Space Site',
    category: 'Web App',
    description: 'A platform offering Web & Mobile Development, Interaction Design, Digital Marketing, and Branding. Features project management, time tracking, and lead generation tools.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    color: '#2abfe8',
    year: '2023',
    link: 'https://space-site-ecru.vercel.app/',
    github: 'https://github.com/Uttam7470',
  },
];

const filters = ['All', 'Full Stack', 'Web App'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');
  const [, setHovered] = useState(null);

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-32" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-accent/6 blur-[120px] left-1/4 bottom-0" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-label"
        >
          Selected Work
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-black text-paper"
          >
            Things I've <span className="gradient-text italic">built</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 font-mono text-xs tracking-wider uppercase rounded transition-all duration-300 ${
                  activeFilter === f
                    ? 'bg-accent text-ink'
                    : 'glass border border-white/8 text-muted hover:text-paper hover:border-white/20'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative glass rounded-sm border border-white/5 hover:border-white/15 overflow-hidden transition-all duration-400 card-3d"
                data-cursor
              >
                {/* Color accent top */}
                <div
                  className="h-px w-full transition-all duration-500 group-hover:h-0.5"
                  style={{ background: project.color }}
                />

                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}10, transparent 70%)` }}
                />

                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="font-mono text-xs" style={{ color: project.color }}>{project.category}</span>
                      <h3 className="font-display text-xl font-bold text-paper mt-1">{project.title}</h3>
                    </div>
                    <span className="font-mono text-xs text-muted">{project.year}</span>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-5">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-white/5 rounded font-mono text-xs text-muted">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 font-mono text-xs text-paper hover:text-accent transition-colors"
                      data-cursor
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 font-mono text-xs text-muted hover:text-paper transition-colors"
                      data-cursor
                    >
                      <GitFork size={14} />
                      Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors group"
            data-cursor
          >
            View all projects on GitHub
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
