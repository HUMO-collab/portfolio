export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-20 sm:py-28 max-w-5xl mx-auto overflow-hidden pb-32 sm:pb-20">

      {/* Background orbs */}
      <div className="orb w-[500px] h-[500px] bg-violet-700/15 bottom-0 left-1/4" />
      <div className="orb w-[250px] h-[250px] bg-cyan-500/10 top-10 right-0" />

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-5">
            Ready to stop being{' '}
            <span className="gradient-text">the bottleneck?</span>
          </h2>
          <p className="text-dim text-base sm:text-lg leading-relaxed">
            Book a free 30-minute discovery call. We'll map the biggest operational drag in your business,
            identify what an AI system would solve, and outline what it would take to build it.
            No pitch. No pressure. Just a clear picture of what's possible.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">

          {/* Primary — Email */}
          <div className="gradient-border rounded-2xl p-6 sm:p-8 glass bg-violet-950/25">
            <p className="font-mono text-xs text-dimmer uppercase tracking-widest mb-2">Email</p>
            <p className="text-white font-semibold text-lg mb-1">wesdonwynes@gmail.com</p>
            <p className="text-dim text-sm mb-6">For project enquiries and scoping requests.</p>
            <a
              href="mailto:wesdonwynes@gmail.com?subject=Discovery Call Request&body=Hi Lehumo, I'd like to book a discovery call to discuss..."
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 hover:shadow-glow-purple transition-all duration-300 text-sm"
            >
              Book Discovery Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Secondary — WhatsApp + GitHub */}
          <div className="space-y-4">
            <div className="gradient-border rounded-2xl p-5 sm:p-6 glass bg-white/[0.02] hover:-translate-y-0.5 transition-transform duration-200">
              <p className="font-mono text-xs text-dimmer uppercase tracking-widest mb-2">WhatsApp</p>
              <p className="text-white font-semibold mb-1">+27 75 207 4400</p>
              <p className="text-dim text-sm mb-4">For quick questions or to send a voice note.</p>
              <a
                href="https://wa.me/27752074400"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-brand hover:text-white transition-colors"
              >
                Open WhatsApp ↗
              </a>
            </div>

            <div className="gradient-border rounded-2xl p-5 sm:p-6 glass bg-white/[0.02] hover:-translate-y-0.5 transition-transform duration-200">
              <p className="font-mono text-xs text-dimmer uppercase tracking-widest mb-2">GitHub</p>
              <p className="text-white font-semibold mb-1">HUMO-collab</p>
              <p className="text-dim text-sm mb-4">Source code, live projects, and build history.</p>
              <a
                href="https://github.com/HUMO-collab"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-white/50 hover:text-white transition-colors"
              >
                View GitHub ↗
              </a>
            </div>
          </div>
        </div>

        {/* Response commitment */}
        <div className="flex items-start gap-3 p-4 glass rounded-xl border border-brand/15 mb-14">
          <span className="w-2 h-2 bg-brand rounded-full shrink-0 mt-1 shadow-glow-green animate-pulse-slow" />
          <p className="text-dim text-sm">
            <span className="text-white font-medium">Response within 24 hours.</span>{' '}
            If your enquiry is time-sensitive, use WhatsApp for a faster response.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold">Lehumo Manala</p>
            <p className="text-dimmer text-xs font-mono mt-0.5">AI Solutions Architect · Patterniaq · Johannesburg, SA</p>
          </div>
          <p className="font-mono text-dimmer text-xs">
            © {new Date().getFullYear()} Patterniaq — Built with React + Vite + Tailwind
          </p>
        </div>
      </div>
    </section>
  )
}
