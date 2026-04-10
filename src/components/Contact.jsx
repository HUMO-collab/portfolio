export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-20 sm:py-28 max-w-5xl mx-auto overflow-hidden pb-28 sm:pb-20">

      {/* Background orbs */}
      <div className="orb w-[400px] h-[400px] bg-violet-700/20 bottom-0 left-1/4" />
      <div className="orb w-[250px] h-[250px] bg-cyan-500/15 top-10 right-0" />

      <div className="relative z-10 max-w-2xl">
        {/* Header */}
        <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          Let's Build{' '}
          <span className="gradient-text">Something</span>
        </h2>
        <p className="text-dim text-base sm:text-lg mb-10 leading-relaxed">
          Open to freelance projects, agency partnerships, and automation consulting.
          If you need systems that move data, connect APIs, or ship fast — reach out via GitHub.
        </p>

        {/* CTA Card */}
        <div className="gradient-border rounded-2xl p-6 sm:p-8 glass mb-8 bg-violet-950/20">
          <p className="text-dimmer text-sm font-mono mb-2 uppercase tracking-widest">GitHub</p>
          <a
            href="https://github.com/HUMO-collab"
            target="_blank"
            rel="noreferrer"
            className="text-lg sm:text-xl font-semibold text-white hover:gradient-text transition-all"
          >
            github.com/HUMO-collab
          </a>
          <div className="mt-6">
            <a
              href="https://github.com/HUMO-collab"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 hover:shadow-glow-purple transition-all duration-300 text-sm"
            >
              View GitHub
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-20 pt-8 border-t border-white/5">
        <p className="font-mono text-dimmer text-xs">
          © {new Date().getFullYear()} Lehumo Manala — Built with React + Vite + Tailwind
        </p>
      </div>
    </section>
  )
}
