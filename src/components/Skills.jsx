import { skills } from '../data/projects'

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 max-w-4xl mx-auto border-t border-zinc-900">
      <div className="mb-12">
        <p className="font-mono text-[#00FF94] text-sm tracking-widest uppercase mb-3">Stack</p>
        <h2 className="text-4xl font-bold">What I Build With</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(group => (
          <div key={group.category} className="border border-zinc-800 rounded-xl p-5">
            <h3 className="font-mono text-sm text-zinc-500 uppercase tracking-wider mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map(item => (
                <span key={item} className="text-sm text-zinc-300 bg-zinc-800/80 px-3 py-1 rounded-lg">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
