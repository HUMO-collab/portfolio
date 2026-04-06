import { skills } from '../data/projects'

const categoryColors = {
  'Automation': 'from-violet-500/20 to-violet-500/5 border-violet-500/20',
  'Frontend': 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20',
  'Backend & DB': 'from-blue-500/20 to-blue-500/5 border-blue-500/20',
  'Infra & Tools': 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20',
  'AI & Integrations': 'from-pink-500/20 to-pink-500/5 border-pink-500/20',
}

const categoryIcons = {
  'Automation': '⚡',
  'Frontend': '🎨',
  'Backend & DB': '🗄️',
  'Infra & Tools': '🔧',
  'AI & Integrations': '🤖',
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-20 sm:py-28 max-w-5xl mx-auto overflow-hidden">

      {/* Background orb */}
      <div className="orb w-[300px] h-[300px] bg-cyan-500/15 top-10 right-0" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">Stack</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            What I{' '}
            <span className="gradient-text">Build With</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map(group => {
            const gradient = categoryColors[group.category] || 'from-white/10 to-white/5 border-white/10'
            const icon = categoryIcons[group.category] || '◆'
            return (
              <div
                key={group.category}
                className={`gradient-border rounded-2xl p-5 bg-gradient-to-b ${gradient} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{icon}</span>
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
      </div>
    </section>
  )
}
