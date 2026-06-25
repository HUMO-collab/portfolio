const placeholders = [
  {
    id: 1,
    label: 'Levarto',
    role: 'Premium Appliance Brand',
    note: 'Testimonial pending — project live, review in progress.',
  },
  {
    id: 2,
    label: 'Real Estate Client',
    role: 'Property Developer',
    note: 'Slot reserved — onboarding in pipeline.',
  },
  {
    id: 3,
    label: 'Operations Client',
    role: 'Field Services Business',
    note: 'Slot reserved — post-deployment review pending.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-20 sm:py-28 max-w-5xl mx-auto overflow-hidden">

      <div className="orb w-[300px] h-[300px] bg-violet-700/12 bottom-10 -left-10 animate-float" />

      <div className="relative z-10">
        <div className="mb-12">
          <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-3">Social Proof</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            What clients{' '}
            <span className="gradient-text">will say.</span>
          </h2>
          <p className="text-dim text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            Testimonials are earned, not fabricated. These slots are reserved for clients currently
            in delivery or post-delivery review. They'll be filled with verified quotes only.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {placeholders.map((item) => (
            <div
              key={item.id}
              className="gradient-border rounded-2xl p-6 glass bg-white/[0.015] flex flex-col justify-between gap-4"
            >
              {/* Quote placeholder */}
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-white/10" />
                  ))}
                </div>
                <div className="space-y-2 mb-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={`h-2.5 rounded-full bg-white/8 ${i === 2 ? 'w-2/3' : 'w-full'}`} />
                  ))}
                </div>
                <p className="font-mono text-xs text-dimmer italic">{item.note}</p>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-8 h-8 rounded-full glass bg-violet-500/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-violet-400">
                    {item.label.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium">{item.label}</p>
                  <p className="text-dimmer text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integrity note */}
        <p className="text-center text-dimmer text-xs font-mono mt-8">
          No fabricated testimonials. All quotes will be attributed and verified.
        </p>
      </div>
    </section>
  )
}
