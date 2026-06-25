export default function About() {
  return (
    <section id="about" className="relative px-6 py-20 sm:py-28 max-w-5xl mx-auto overflow-hidden">

      {/* Background orbs */}
      <div className="orb w-[350px] h-[350px] bg-violet-700/12 top-10 right-0 animate-float-delayed" />

      <div className="relative z-10">
        <div className="mb-12">
          <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-3">About</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Most businesses are{' '}
            <span className="gradient-text">bottlenecked by their founder.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — narrative */}
          <div className="space-y-5 text-dim text-base sm:text-lg leading-relaxed">
            <p>
              Every lead gets followed up manually. Every client onboarding is a back-and-forth on WhatsApp.
              Every revenue report is a spreadsheet someone built on a Sunday.
              The founder is the system — and the system breaks when they step away.
            </p>
            <p>
              I build the alternative: <span className="text-white font-medium">AI operating systems</span> that
              handle lead intake, client management, reporting, and internal communications without human
              intervention. The founder becomes the owner, not the operator.
            </p>
            <p>
              My background is metallurgical engineering — I understand industrial operations, process flows,
              and what it means when a system fails at 2am. That operational mindset shapes every system I build:
              modular, observable, and reliable enough to run unsupervised.
            </p>
            <p>
              I've applied this to my own business: 6 active n8n workflows handle lead intake, client onboarding,
              daily revenue briefings, and pipeline visibility — without me doing anything manually.
              I only build what I've already run myself.
            </p>
          </div>

          {/* Right — conviction cards */}
          <div className="space-y-4">
            {[
              {
                label: '01',
                title: 'Systems over tasks',
                body: 'A task done once is a task you\'ll do forever. A system done once runs forever.',
              },
              {
                label: '02',
                title: 'Build for autonomy',
                body: 'If the founder is required to operate it daily, it\'s not a system — it\'s a job with extra steps.',
              },
              {
                label: '03',
                title: 'Hand over running',
                body: 'Delivery isn\'t a Notion doc. It\'s a live system doing work on day one.',
              },
            ].map(item => (
              <div key={item.label} className="gradient-border rounded-2xl p-5 glass bg-violet-950/10 hover:-translate-y-0.5 transition-transform duration-200">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-violet-400/60 mt-0.5 shrink-0">{item.label}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-dim text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Location badge */}
            <div className="flex items-center gap-3 px-4 py-3 glass rounded-xl w-fit">
              <span className="text-lg">🇿🇦</span>
              <div>
                <p className="text-white text-sm font-medium">Johannesburg, South Africa</p>
                <p className="text-dimmer text-xs font-mono">Available globally — remote-first</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
