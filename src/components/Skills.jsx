import { skills, architecturePrinciples } from '../data/projects'

const categoryColors = {
  'Automation & Integration': 'from-violet-500/20 to-violet-500/5 border-violet-500/20',
  'AI & Language Models':     'from-pink-500/20 to-pink-500/5 border-pink-500/20',
  'Frontend':                 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20',
  'Backend & Database':       'from-blue-500/20 to-blue-500/5 border-blue-500/20',
  'Infrastructure & DevOps':  'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20',
}

const categoryIcons = {
  'Automation & Integration': '⚡',
  'AI & Language Models':     '🤖',
  'Frontend':                 '🎨',
  'Backend & Database':       '🗄️',
  'Infrastructure & DevOps':  '🔧',
}

const principleColors = ['violet', 'cyan', 'brand', 'violet']

export default function Skills() {
  return (
    <section id="stack" className="relative px-6 py-20 sm:py-28 max-w-5xl mx-auto overflow-hidden">

      <div className="orb w-[300px] h-[300px] bg-cyan-500/10 top-10 right-0" />

      <div className="relative z-10">
        {/* Tech Stack */}
        <div className="mb-12">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">Stack</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            What I{' '}
            <span className="gradient-text">Build With</span>
          </h2>
          <p className="text-dim text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            Tools chosen for production reliability, not trend-following. Every item in this stack
            is something I've shipped with.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {skills.map(group => {
            const gradient = categoryColors[group.category] || 'from-white/10 to-white/5 border-white/10'
            const icon = categoryIcons[group.category] || '◆'
            return (
              <div
                key={group.category}
                className={`gradient-border rounded-2xl p-5 sm:p-6 bg-gradient-to-b ${gradient} hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{icon}</span>
                  <h3 className="font-mono text-xs text-white/50 uppercase tracking-widest">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span
                      key={item}
                      className="text-xs text-white/70 glass px-3 py-1.5 rounded-lg font-medium hover:text-white transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Architecture Principles */}
        <div className="mb-10">
          <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-3">Architecture</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            How every system{' '}
            <span className="gradient-text">is designed.</span>
          </h2>
          <p className="text-dim text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            These aren't preferences — they're requirements. A system that violates any one of these
            principles will fail in production, usually at the worst possible time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {architecturePrinciples.map((principle, i) => (
            <div
              key={principle.title}
              className="gradient-border rounded-2xl p-5 sm:p-6 glass bg-white/[0.02] hover:-translate-y-0.5 transition-transform duration-200"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-violet-400/40 mt-0.5 shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">{principle.title}</h3>
                  <p className="text-dim text-sm leading-relaxed">{principle.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
