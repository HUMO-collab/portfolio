import { services } from '../data/projects'

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-20 sm:py-28 max-w-5xl mx-auto overflow-hidden">

      <div className="orb w-[400px] h-[400px] bg-violet-700/12 bottom-0 -right-20 animate-float-delayed" />

      <div className="relative z-10">
        <div className="mb-14">
          <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-3">Services</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Four ways I can{' '}
            <span className="gradient-text">build for you.</span>
          </h2>
          <p className="text-dim text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            Every engagement starts with The Blueprint. It's the only honest way to know what you actually need
            — and it pays for itself before the build begins.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-10 gradient-border rounded-2xl p-6 sm:p-8 glass bg-violet-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg">Not sure which service fits?</p>
            <p className="text-dim text-sm mt-1">The Blueprint answers that question. Start there.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3.5 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 hover:shadow-glow-purple transition-all duration-300 text-sm whitespace-nowrap"
          >
            Book a Discovery Call →
          </a>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  const isHighlight = service.highlight

  return (
    <div className={`group relative gradient-border rounded-2xl p-6 sm:p-7 glass transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${
      isHighlight ? 'bg-violet-950/30 sm:col-span-2' : 'bg-white/[0.02]'
    }`}>
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative">
        {/* ID + highlight badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs text-violet-400/60 tracking-widest">{service.id}</span>
          {isHighlight && (
            <span className="font-mono text-xs text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-full">
              Start here
            </span>
          )}
        </div>

        <div className={isHighlight ? 'grid sm:grid-cols-2 gap-6' : ''}>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{service.name}</h3>
            <p className="text-violet-300 font-medium text-sm mb-3">{service.tagline}</p>
            <p className="text-dim text-sm leading-relaxed">{service.description}</p>
          </div>

          <div className="space-y-4 mt-4 sm:mt-0">
            {/* Price */}
            <div className="glass rounded-xl p-4">
              <p className="font-mono text-xs text-dimmer uppercase tracking-widest mb-1">Investment</p>
              <p className="text-white font-semibold">{service.price}</p>
            </div>

            {/* Deliverable */}
            <div className="glass rounded-xl p-4">
              <p className="font-mono text-xs text-dimmer uppercase tracking-widest mb-1">What You Get</p>
              <p className="text-white/80 text-sm">{service.deliverable}</p>
            </div>

            {/* Ideal for */}
            <div className="glass rounded-xl p-4">
              <p className="font-mono text-xs text-dimmer uppercase tracking-widest mb-1">Ideal For</p>
              <p className="text-dim text-sm">{service.ideal}</p>
            </div>

            {isHighlight && (
              <a
                href="#contact"
                className="block text-center px-5 py-3 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 hover:shadow-glow-purple transition-all duration-300 text-sm"
              >
                Book The Blueprint →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
