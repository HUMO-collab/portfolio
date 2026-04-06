import { contact } from '../data/projects'

const stats = [
  { value: '8+', label: 'Projects Built' },
  { value: '5+', label: 'Automation Stacks' },
  { value: '3', label: 'Live Products' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto overflow-hidden pt-20 pb-28 sm:pb-20">

      {/* Background orbs */}
      <div className="orb w-[500px] h-[500px] bg-violet-700/20 top-0 -right-40 animate-float" />
      <div className="orb w-[400px] h-[400px] bg-cyan-500/15 bottom-10 -left-20 animate-float-delayed" />
      <div className="orb w-[200px] h-[200px] bg-brand/10 top-1/2 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 space-y-7">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-purple w-fit">
          <span className="w-2 h-2 bg-brand rounded-full animate-pulse-slow shadow-glow-green" />
          <span className="font-mono text-brand text-xs tracking-widest uppercase">
            Available for projects
          </span>
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
            Lehumo
          </h1>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight gradient-text">
            Manala
          </h1>
        </div>

        {/* Sub */}
        <p className="text-base sm:text-xl text-dim max-w-2xl leading-relaxed">
          Full-stack developer & automation engineer. I build{' '}
          <span className="text-white font-medium">n8n workflow systems</span>,{' '}
          <span className="text-white font-medium">React applications</span>, and{' '}
          <span className="text-white font-medium">AI-powered tools</span>{' '}
          that save time and generate revenue.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="#projects"
            className="px-6 py-3.5 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 hover:shadow-glow-purple transition-all duration-300 text-sm sm:text-base"
          >
            View Projects
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="px-6 py-3.5 glass rounded-xl text-white/70 font-semibold hover:text-white hover:border-violet-500/40 transition-all duration-300 text-sm sm:text-base"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 sm:gap-10 pt-3">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-2xl sm:text-3xl font-bold gradient-text">{s.value}</p>
              <p className="text-dimmer text-xs font-mono mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex flex-wrap gap-5 pt-1">
          {contact.github && (
            <a href={contact.github} target="_blank" rel="noreferrer"
               className="font-mono text-xs text-dimmer hover:text-white transition-colors tracking-wide">
              GitHub ↗
            </a>
          )}
          {contact.upwork && (
            <a href={contact.upwork} target="_blank" rel="noreferrer"
               className="font-mono text-xs text-dimmer hover:text-white transition-colors tracking-wide">
              Upwork ↗
            </a>
          )}
          {contact.fiverr && (
            <a href={contact.fiverr} target="_blank" rel="noreferrer"
               className="font-mono text-xs text-dimmer hover:text-white transition-colors tracking-wide">
              Fiverr ↗
            </a>
          )}
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noreferrer"
               className="font-mono text-xs text-dimmer hover:text-white transition-colors tracking-wide">
              LinkedIn ↗
            </a>
          )}
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
