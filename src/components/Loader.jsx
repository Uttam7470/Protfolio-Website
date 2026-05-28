import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onDone, 600);
          }, 300);
          return 100;
        }
        return p + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Decorative orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="orb absolute w-64 h-64 rounded-full bg-accent/10 blur-3xl top-1/4 left-1/4" />
            <div className="orb absolute w-80 h-80 rounded-full bg-gold/8 blur-3xl bottom-1/4 right-1/4" />
          </div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-6xl font-black text-paper mb-2"
            >
              <span className="gradient-text">Uttam</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-muted text-xs tracking-widest uppercase mb-12"
            >
              Frontend Developer
            </motion.p>

            <div className="w-48 mx-auto">
              <div className="flex justify-between font-mono text-xs text-muted mb-2">
                <span>Loading</span>
                <span>{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="h-px bg-white/10 rounded overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent to-gold"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
