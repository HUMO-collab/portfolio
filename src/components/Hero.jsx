import { contact } from '../data/projects'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto">
      <div className="space-y-6">
        <p className="font-mono text-[#00FF94] text-sm tracking-widest uppercase">
          Available for projects
        </p>

        <h1 className="text-5xl sm:text-7xl font-bold leading-tight tracking-tight">
          Lehumo<br />
          <span className="text-zinc-500">Manala</span>
        </h1>

        <p className="text-xl sm:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
          Full-stack developer & automation engineer. I build{' '}
          <span className="text-zinc-100">n8n workflow systems</span>,{' '}
          <span className="text-zinc-100">React applications</span>, and{' '}
          <span className="text-zinc-100">AI-powered tools</span> that save time and generate revenue.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#00FF94] text-zinc-950 font-semibold rounded-lg hover:bg-[#00e085] transition-colors"
          >
            View Projects
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="px-6 py-3 border border-zinc-700 text-zinc-300 font-semibold rounded-lg hover:border-zinc-500 hover:text-zinc-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex gap-6 pt-2">
          {contact.github && (
            <a href={contact.github} target="_blank" rel="noreferrer"
               className="text-zinc-500 hover:text-zinc-300 font-mono text-sm transition-colors">
              GitHub ↗
            </a>
          )}
          {contact.upwork && (
            <a href={contact.upwork} target="_blank" rel="noreferrer"
               className="text-zinc-500 hover:text-zinc-300 font-mono text-sm transition-colors">
              Upwork ↗
            </a>
          )}
          {contact.fiverr && (
            <a href={contact.fiverr} target="_blank" rel="noreferrer"
               className="text-zinc-500 hover:text-zinc-300 font-mono text-sm transition-colors">
              Fiverr ↗
            </a>
          )}
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noreferrer"
               className="text-zinc-500 hover:text-zinc-300 font-mono text-sm transition-colors">
              LinkedIn ↗
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
