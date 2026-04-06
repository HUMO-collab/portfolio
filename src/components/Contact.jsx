import { contact } from '../data/projects'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 max-w-4xl mx-auto border-t border-zinc-900">
      <div className="max-w-2xl">
        <p className="font-mono text-[#00FF94] text-sm tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-4xl font-bold mb-6">Let's Build Something</h2>
        <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
          Open to freelance projects, agency partnerships, and automation consulting.
          If you have a problem that involves moving data, connecting systems, or building
          something on the web — reach out.
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#00FF94] text-zinc-950 font-semibold rounded-lg hover:bg-[#00e085] transition-colors text-lg"
        >
          {contact.email}
        </a>

        <div className="flex gap-6 mt-8">
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

      <div className="mt-16 pt-8 border-t border-zinc-900">
        <p className="font-mono text-zinc-600 text-sm">
          © {new Date().getFullYear()} Lehumo Manala — Built with React + Vite + Tailwind
        </p>
      </div>
    </section>
  )
}
