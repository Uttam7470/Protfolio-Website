import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

// ⬇ Yahan apni Web3Forms Access Key daalo
const WEB3FORMS_KEY = '4eccf1ee-7f17-46e8-8c2e-430d3ed6cc0b';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: true, margin: '-100px' });

  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent]       = useState(false);
  const [error, setError]     = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSending(true);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New message from ${form.name} — Portfolio`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setError('Kuch galat hua. Dobara try karo.');
      }
    } catch {
      setError('Network error. Dobara try karo.');
    } finally {
      setSending(false);
    }
  };

  const inputClass = `
    w-full border border-white/8 rounded px-4 py-3 font-body text-sm
    placeholder:text-white/30 focus:outline-none focus:border-accent/50
    transition-all duration-300
  `;

  return (
    <section id="contact" className="relative py-32" ref={sectionRef}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-accent/6 blur-[120px] right-0 top-1/2 -translate-y-1/2" />
        <div className="absolute w-64 h-64 rounded-full bg-gold/5 blur-[80px] left-0 bottom-0" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-label"
        >
          Get In Touch
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-black text-paper mb-6 leading-tight"
            >
              Let's build something <span className="gradient-text italic">amazing</span> together.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-muted leading-relaxed mb-10"
            >
              I'm currently open to freelance projects, full-time roles, and interesting collaborations.
              Whether you have a project in mind or just want to connect — my inbox is always open.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              {[
                { icon: Mail, label: 'patidaruttam74@gmail.com', href: 'mailto:patidaruttam74@gmail.com' },
                { icon: MapPin, label: 'Madhya Pradesh, India', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 group" data-cursor>
                  <div className="w-10 h-10 glass rounded flex items-center justify-center border border-white/8 group-hover:border-accent/30 transition-colors">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <span className="font-mono text-sm text-muted group-hover:text-paper transition-colors">{label}</span>
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex gap-4 flex-wrap"
            >
              {[
                { icon: GithubIcon,   label: 'GitHub',   href: 'https://github.com/Uttam7470' },
                { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/uttam-patidar7470' },
                { icon: TwitterIcon,  label: 'Twitter',  href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 glass px-4 py-2.5 rounded border border-white/8 hover:border-accent/30 hover:text-accent text-muted transition-all group"
                  data-cursor
                >
                  <Icon size={16} />
                  <span className="font-mono text-xs">{label}</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-sm border border-white/8 p-8">
              {sent ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-400/15 flex items-center justify-center">
                    <Send size={24} className="text-green-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-paper mb-2">Message Sent! ✓</h3>
                  <p className="text-muted text-sm">I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 font-mono text-xs text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-mono text-xs text-muted tracking-wider uppercase block mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-muted tracking-wider uppercase block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-muted tracking-wider uppercase block mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about your project..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="font-mono text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded px-3 py-2">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-3 bg-accent text-ink font-mono text-sm tracking-wider uppercase py-4 rounded hover:bg-gold transition-colors duration-300 disabled:opacity-60"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-ink/30 border-t-ink rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
