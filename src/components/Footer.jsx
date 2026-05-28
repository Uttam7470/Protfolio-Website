export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xl font-black">
          <span className="gradient-text">U.</span>
        </div>
        <p className="font-mono text-xs text-muted text-center">
          Designed & Built by <span className="text-accent">Uttam Patidar</span> · 2025
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-xs text-muted hover:text-accent transition-colors flex items-center gap-2"
          data-cursor
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
