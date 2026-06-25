const stats = [
  { value: '6', label: 'Active Workflows' },
  { value: '9+', label: 'Systems Built' },
  { value: '3', label: 'Live Products' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto overflow-hidden pt-20 pb-28 sm:pb-20">

      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-violet-700/15 top-0 -right-60 animate-float" />
      <div className="orb w-[400px] h-[400px] bg-cyan-500/10 bottom-10 -left-20 animate-float-delayed" />
      <div className="orb w-[200px] h-[200px] bg-brand/8 top-1/3 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 space-y-8">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-purple w-fit">
          <span className="w-2 h-2 bg-brand rounded-full animate-pulse-slow shadow-glow-green" />
          <span className="font-mono text-brand text-xs tracking-widest uppercase">
            Available for Projects
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-1">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white">
            AI Systems That
          </h1>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight gradient-text">
            Run Without You.
          </h1>
        </div>

        {/* Sub */}
        <p className="text-base sm:text-xl text-dim max-w-2xl leading-relaxed">
          I'm <span className="text-white font-semibold">Lehumo Manala</span> — AI Solutions Architect based in
          Johannesburg, South Africa. I build AI operating systems that automate operations, remove bottlenecks,
          and generate measurable outcomes —{' '}
          <span className="text-white font-medium">then hand them over running.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="#contact"
            className="px-6 py-3.5 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 hover:shadow-glow-purple transition-all duration-300 text-sm sm:text-base"
          >
            Book a Discovery Call
          </a>
          <a
            href="#projects"
            className="px-6 py-3.5 glass rounded-xl text-white/70 font-semibold hover:text-white hover:border-violet-500/40 transition-all duration-300 text-sm sm:text-base"
          >
            View Work ↓
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 sm:gap-12 pt-2">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl font-bold gradient-text">{s.value}</p>
              <p className="text-dimmer text-xs font-mono mt-1 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex flex-wrap gap-6 pt-1">
          <a href="https://github.com/HUMO-collab" target="_blank" rel="noreferrer"
             className="font-mono text-xs text-dimmer hover:text-white transition-colors tracking-wide">
            GitHub ↗
          </a>
          <a href="https://wa.me/27752074400" target="_blank" rel="noreferrer"
             className="font-mono text-xs text-dimmer hover:text-brand transition-colors tracking-wide">
            WhatsApp ↗
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-dimmer">
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  )
}
