import { industries } from '../data/projects'

export default function Industries() {
  return (
    <section id="industries" className="relative px-6 py-20 sm:py-28 max-w-5xl mx-auto overflow-hidden">

      <div className="orb w-[300px] h-[300px] bg-cyan-500/10 top-0 left-0 animate-float" />

      <div className="relative z-10">
        <div className="mb-12">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">Industries</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            AI systems apply across{' '}
            <span className="gradient-text">every sector.</span>
          </h2>
          <p className="text-dim text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            The bottleneck problem is universal. The specific workflows differ — the underlying
            architecture and approach remain the same.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group gradient-border rounded-2xl p-5 sm:p-6 glass bg-white/[0.015] hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="text-3xl mb-4">{industry.icon}</div>
              <h3 className="text-white font-semibold text-base mb-2">{industry.name}</h3>
              <p className="text-dim text-sm leading-relaxed mb-4">{industry.description}</p>
              <p className="font-mono text-xs text-violet-400/70">{industry.relevance}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
