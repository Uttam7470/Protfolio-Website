import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'ACORE IT HUB',
    period: 'June 2025 — October 2025',
    type: 'Full-time',
    location: 'Indore, India',
    description: 'Working as a Frontend Developer building modern, responsive web interfaces and contributing to client projects with a focus on clean UI and smooth user experience.',
    highlights: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    current: true,
  },
  {
    role: 'Frontend Developer (Intern)',
    company: 'Geekster',
    period: 'April 2024 — January 2025',
    type: 'Internship',
    location: 'Gurugram, India',
    description: 'Built responsive and intuitive web interfaces using HTML, CSS, JavaScript, React, Node, Express, and MongoDB. Achieved 95% satisfaction rate in user experience surveys through high-quality design and functionality.',
    highlights: ['React', 'Node.js', 'Express', 'MongoDB'],
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-32" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-gold/5 blur-[100px] right-0 bottom-0" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-label"
        >
          Experience
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-black text-paper mb-16"
        >
          My <span className="gradient-text italic">journey</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 mt-2">
                  <div className={`w-3 h-3 rounded-full border-2 timeline-dot ${
                    exp.current
                      ? 'bg-accent border-accent'
                      : 'bg-ink border-muted'
                  }`} />
                </div>

                {/* Spacer for center */}
                <div className="hidden md:block w-1/2" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="glass rounded-sm border border-white/5 hover:border-accent/15 p-6 transition-all duration-300 group">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display text-xl font-bold text-paper">{exp.role}</h3>
                        <p className="text-accent font-mono text-sm">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-xs text-muted">{exp.period}</p>
                        <span className={`font-mono text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${
                          exp.current
                            ? 'bg-green-400/15 text-green-400 border border-green-400/20'
                            : 'bg-white/5 text-muted'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted text-sm leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 border border-white/8 rounded-full font-mono text-xs text-muted group-hover:border-accent/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
