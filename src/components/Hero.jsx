import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

const roles = ['Frontend Developer', 'React Specialist', 'Open Source Contributor', 'MERN Stack Developer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((r) => (r + 1) % roles.length);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const containerVars = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };
  const itemVars = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb absolute w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] -top-24 -right-32" />
        <div className="orb absolute w-[400px] h-[400px] rounded-full bg-gold/6 blur-[100px] bottom-0 left-0" />
        <div className="orb absolute w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(247,243,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(247,243,238,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div variants={itemVars} className="section-label justify-center mb-8">
          <span>Available for work</span>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
        </motion.div>

        <motion.h1
          variants={itemVars}
          className="font-display text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.9] tracking-tight mb-6"
        >
          <span className="block text-paper">Hi, I'm</span>
          <span className="block gradient-text">Uttam Patidar</span>
        </motion.h1>

        <motion.div variants={itemVars} className="font-mono text-lg md:text-xl text-muted mb-8 h-8">
          <span className="text-accent">&lt;</span>
          <span className="text-paper">{displayed}</span>
          <span className="typewriter-cursor" />
          <span className="text-accent">&nbsp;/&gt;</span>
        </motion.div>

        <motion.p variants={itemVars} className="max-w-2xl mx-auto text-muted text-base md:text-lg leading-relaxed mb-12">
          I craft <span className="text-paper">pixel-perfect</span>, performant web experiences with modern technologies.
          Passionate about clean code, stunning animations, and delightful user experiences.
        </motion.p>

        <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-accent text-ink font-mono text-sm tracking-wider uppercase rounded overflow-hidden hover:bg-accent/90 transition-colors"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          </button>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 glass border border-white/10 text-paper font-mono text-sm tracking-wider uppercase rounded hover:border-accent/40 transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVars} className="flex items-center justify-center gap-6">
          {[
            { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/Uttam7470' },
            { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/uttam-patidar7470' },
            { icon: TwitterIcon, label: 'Twitter', href: '#' },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200"
              data-cursor
            >
              <Icon size={18} />
              <span className="font-mono text-xs tracking-wider hidden sm:block">{label}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
