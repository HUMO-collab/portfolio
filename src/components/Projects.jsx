import { projects } from '../data/projects'

const statusConfig = {
  live: { label: 'Live', color: 'text-[#00FF94] bg-[#00FF94]/10' },
  'in-progress': { label: 'In Progress', color: 'text-yellow-400 bg-yellow-400/10' },
  concept: { label: 'Concept', color: 'text-zinc-400 bg-zinc-400/10' },
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="px-6 py-24 max-w-4xl mx-auto">
      <div className="mb-12">
        <p className="font-mono text-[#00FF94] text-sm tracking-widest uppercase mb-3">Work</p>
        <h2 className="text-4xl font-bold">Projects</h2>
      </div>

      <div className="grid gap-6">
        {featured.map(project => (
          <ProjectCard key={project.id} project={project} featured />
        ))}
        {rest.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, featured }) {
  const status = statusConfig[project.status] || statusConfig.concept

  return (
    <div className={`group border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-all duration-200 ${featured ? 'bg-zinc-900/50' : ''}`}>
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-xl font-semibold group-hover:text-[#00FF94] transition-colors">
          {project.title}
        </h3>
        <span className={`text-xs font-mono px-2 py-1 rounded-full shrink-0 ${status.color}`}>
          {status.label}
        </span>
      </div>

      <p className="text-zinc-400 mb-4 leading-relaxed">{project.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-mono text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 ml-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer"
               className="text-zinc-500 hover:text-zinc-300 font-mono text-sm transition-colors shrink-0">
              Code ↗
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer"
               className="text-[#00FF94] hover:text-[#00e085] font-mono text-sm transition-colors shrink-0">
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
