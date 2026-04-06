import { projects } from '../data/projects'

const statusConfig = {
  live: {
    label: 'Live',
    classes: 'text-brand bg-brand/10 border border-brand/25 shadow-glow-green',
    dot: 'bg-brand',
  },
  'in-progress': {
    label: 'In Progress',
    classes: 'text-amber-400 bg-amber-400/10 border border-amber-400/25',
    dot: 'bg-amber-400',
  },
  concept: {
    label: 'Concept',
    classes: 'text-white/40 bg-white/5 border border-white/10',
    dot: 'bg-white/40',
  },
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="relative px-6 py-20 sm:py-28 max-w-5xl mx-auto overflow-hidden">

      {/* Background orb */}
      <div className="orb w-[350px] h-[350px] bg-violet-700/15 top-20 -left-20" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-3">Work</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Selected{' '}
            <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Featured */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {featured.map(project => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        {/* Rest */}
        <div className="grid sm:grid-cols-2 gap-4">
          {rest.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured }) {
  const status = statusConfig[project.status] || statusConfig.concept

  return (
    <div className={`group relative gradient-border rounded-2xl p-5 sm:p-6 glass transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${
      featured ? 'bg-violet-950/20' : ''
    }`}>
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base sm:text-lg font-semibold leading-snug group-hover:gradient-text transition-all">
            {project.title}
          </h3>
          <span className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full shrink-0 ${status.classes}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
            {status.label}
          </span>
        </div>

        {/* Description */}
        <p className="text-dim text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span key={tag}
                  className="text-xs font-mono text-white/40 bg-white/5 border border-white/8 px-2 py-0.5 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer"
               className="font-mono text-xs text-dimmer hover:text-white transition-colors">
              Code ↗
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer"
               className="font-mono text-xs text-brand hover:text-white transition-colors">
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
