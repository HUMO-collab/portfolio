import { useState } from 'react'
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
  const [expanded, setExpanded] = useState(null)
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="relative px-6 py-20 sm:py-28 max-w-5xl mx-auto overflow-hidden">

      <div className="orb w-[350px] h-[350px] bg-violet-700/12 top-20 -left-20" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-3">Work</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Systems built.{' '}
            <span className="gradient-text">Problems solved.</span>
          </h2>
          <p className="text-dim text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            Every project below is presented as a business case — problem first, solution second, outcome last.
            Code is the implementation detail, not the product.
          </p>
        </div>

        {/* Featured projects */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          {featured.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              featured
              expanded={expanded === project.id}
              onToggle={() => setExpanded(expanded === project.id ? null : project.id)}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-10">
          <div className="h-px flex-1 bg-white/5" />
          <span className="font-mono text-xs text-dimmer uppercase tracking-widest">More Projects</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        {/* Rest of projects */}
        <div className="grid sm:grid-cols-2 gap-4">
          {rest.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={false}
              expanded={expanded === project.id}
              onToggle={() => setExpanded(expanded === project.id ? null : project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured, expanded, onToggle }) {
  const status = statusConfig[project.status] || statusConfig.concept

  return (
    <div
      className={`group relative gradient-border rounded-2xl glass transition-all duration-300 hover:shadow-card-hover ${
        featured ? 'bg-violet-950/20' : 'bg-white/[0.015]'
      } ${expanded ? 'shadow-card-hover' : 'hover:-translate-y-1'}`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative p-5 sm:p-6">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-1">
          <div>
            {project.clientNote && (
              <span className="inline-block font-mono text-xs text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-md mb-2">
                ✓ Real Client
              </span>
            )}
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
              {project.title}
            </h3>
          </div>
          <span className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full shrink-0 ${status.classes}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
            {status.label}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-violet-300/80 text-sm font-medium mb-3">{project.tagline}</p>

        {/* Problem → Solution */}
        <div className="space-y-3 mb-4">
          <div>
            <p className="font-mono text-xs text-dimmer uppercase tracking-widest mb-1">Problem</p>
            <p className="text-dim text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-dimmer uppercase tracking-widest mb-1">Solution</p>
            <p className="text-dim text-sm leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Expandable detail */}
        {expanded && (
          <div className="space-y-4 mb-4 border-t border-white/5 pt-4">
            {/* Impact */}
            <div>
              <p className="font-mono text-xs text-brand/70 uppercase tracking-widest mb-2">Impact</p>
              <ul className="space-y-1.5">
                {project.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-dim">
                    <span className="text-brand shrink-0 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Architecture */}
            <div>
              <p className="font-mono text-xs text-cyan-400/70 uppercase tracking-widest mb-2">Architecture</p>
              <p className="text-dim text-sm leading-relaxed font-mono text-xs bg-white/3 border border-white/5 rounded-lg p-3">
                {project.architecture}
              </p>
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span key={tag}
                  className="text-xs font-mono text-white/40 bg-white/5 border border-white/8 px-2 py-0.5 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Links + expand */}
        <div className="flex items-center justify-between">
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
            {!project.githubUrl && !project.liveUrl && (
              <span className="font-mono text-xs text-white/20">Internal system</span>
            )}
          </div>
          <button
            onClick={onToggle}
            className="font-mono text-xs text-dimmer hover:text-violet-400 transition-colors"
          >
            {expanded ? 'Less ↑' : 'Details ↓'}
          </button>
        </div>
      </div>
    </div>
  )
}
