import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '◈',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'HTML5 / CSS3', level: 92 },
      { name: 'Java', level: 75 },
    ],
  },
  {
    title: 'Styling & UI',
    icon: '◇',
    skills: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 82 },
      { name: 'Redux', level: 78 },
      { name: 'Responsive Design', level: 88 },
    ],
  },
  {
    title: 'Backend & Tools',
    icon: '◉',
    skills: [
      { name: 'Node.js / Express', level: 72 },
      { name: 'MongoDB', level: 70 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'Postman / VS Code', level: 85 },
    ],
  },
];

const techBadges = ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub', 'Postman', 'Java', 'Firebase'];

function SkillBar({ name, level, delay, isInView }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="font-body text-sm text-paper/80">{name}</span>
        <span className="font-mono text-xs text-accent">{level}%</span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-gold rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.34, 1.56, 0.64, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-80 h-80 rounded-full bg-gold/5 blur-[100px] right-0 top-0" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-label"
        >
          Skills & Expertise
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-black text-paper mb-4"
        >
          What I <span className="gradient-text italic">work with</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted mb-16 max-w-xl"
        >
          A curated toolkit built through real-world projects and continuous learning.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="glass rounded-sm p-6 border border-white/5 hover:border-accent/20 transition-colors group card-3d"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl text-accent group-hover:scale-110 transition-transform">{cat.icon}</span>
                <h3 className="font-display text-lg font-bold text-paper">{cat.title}</h3>
              </div>
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={0.3 + ci * 0.15 + si * 0.1}
                  isInView={isInView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-6 text-center">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.05, type: 'spring' }}
                className="px-4 py-2 glass border border-white/8 rounded-full font-mono text-xs text-muted hover:text-accent hover:border-accent/30 transition-all cursor-default"
                data-cursor
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
