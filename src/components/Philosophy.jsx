const principles = [
  {
    step: '01',
    title: 'Diagnose First',
    subtitle: 'The Blueprint',
    color: 'violet',
    description: 'Before writing a single line of code or building a single workflow, I map the full operational picture. Where does data live? Where does it get stuck? Which manual step is costing the most time? The Blueprint produces a prioritised architecture document — what to build, in what order, and why. This is a paid engagement because the diagnosis is where the value lives.',
    output: 'Systems architecture doc + bottleneck audit + build roadmap',
  },
  {
    step: '02',
    title: 'Build for Autonomy',
    subtitle: 'No humans in the loop',
    color: 'cyan',
    description: 'Every system I build is designed to run without the founder\'s daily involvement. That means webhook-driven triggers, not manual uploads. Automated alerts, not status meetings. Self-healing retries, not someone checking logs. If you have to intervene daily, the system failed — even if the code works.',
    output: 'Modular, API-first systems that operate independently',
  },
  {
    step: '03',
    title: 'Hand Over Running',
    subtitle: 'Delivery = live system',
    color: 'brand',
    description: 'I don\'t deliver documentation and walk away. I hand over a live, tested system doing real work — on the day of delivery. That means your Telegram bot is already routing leads. Your onboarding workflow is already sending contracts. Your daily revenue report already arrived this morning. You\'re not starting something. You\'re inheriting something that already runs.',
    output: 'Live system, full walkthrough, operational from day one',
  },
]

const colorMap = {
  violet: {
    accent: 'text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/5',
    step: 'text-violet-400/40',
    tag: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
  },
  cyan: {
    accent: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/5',
    step: 'text-cyan-400/40',
    tag: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
  },
  brand: {
    accent: 'text-brand',
    border: 'border-brand/20',
    bg: 'bg-brand/5',
    step: 'text-brand/40',
    tag: 'text-brand bg-brand/10 border-brand/20',
  },
}

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative px-6 py-20 sm:py-28 max-w-5xl mx-auto overflow-hidden">

      <div className="orb w-[300px] h-[300px] bg-cyan-500/10 top-20 right-0 animate-float" />

      <div className="relative z-10">
        <div className="mb-14">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">How I Work</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            A process designed for{' '}
            <span className="gradient-text">one outcome.</span>
          </h2>
          <p className="text-dim text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            Every engagement follows three non-negotiable phases. This is not a methodology —
            it's the minimum required to actually solve an operational problem with AI.
          </p>
        </div>

        <div className="space-y-6">
          {principles.map((p) => {
            const c = colorMap[p.color]
            return (
              <div
                key={p.step}
                className={`gradient-border rounded-2xl p-6 sm:p-8 glass ${c.bg} hover:-translate-y-0.5 transition-transform duration-200`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Step number */}
                  <div className={`font-mono text-5xl sm:text-6xl font-bold ${c.step} shrink-0 leading-none`}>
                    {p.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className={`text-xl sm:text-2xl font-bold ${c.accent}`}>{p.title}</h3>
                      <span className={`font-mono text-xs px-2.5 py-1 rounded-full border ${c.tag}`}>
                        {p.subtitle}
                      </span>
                    </div>
                    <p className="text-dim text-sm sm:text-base leading-relaxed">{p.description}</p>
                    <div className={`inline-flex items-center gap-2 text-xs font-mono border rounded-lg px-3 py-1.5 ${c.tag}`}>
                      <span className="opacity-60">OUTPUT →</span>
                      <span>{p.output}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
