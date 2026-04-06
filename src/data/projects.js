// Portfolio projects — real projects by Lehumo Manala

export const projects = [
  {
    id: 1,
    title: 'CleanOps Pro',
    description: 'Full-stack cleaning operations management platform. Real-time job tracking, staff performance analytics, area verification with photo sign-off, guest mitigation, and financial growth dashboards. 16 phases shipped.',
    tags: ['Next.js 14', 'Supabase', 'Tailwind CSS', 'PostgreSQL'],
    liveUrl: 'https://humo-pearl.vercel.app',
    githubUrl: 'https://github.com/HUMO-collab/humo',
    status: 'live',
    featured: true,
  },
  {
    id: 2,
    title: 'Levarto Premium 3D Website',
    description: 'High-end 3D interactive brand website with Apple-style scroll-snap sections, full-screen carousel, and cinematic video integration. Built for a premium appliance brand.',
    tags: ['Next.js', 'Three.js', 'Tailwind CSS', 'GSAP'],
    liveUrl: 'https://levarto-premium-3d-website.vercel.app',
    githubUrl: 'https://github.com/HUMO-collab/levarto-premium-3d-website',
    status: 'live',
    featured: true,
  },
  {
    id: 3,
    title: 'Patternaiq Estates',
    description: 'High-converting lead generation landing page targeting real estate owners. Built to capture and qualify leads through a premium branded experience with 3D scroll effects and a neural background aesthetic.',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Lead Generation'],
    liveUrl: 'https://patternaiq-estates.vercel.app',
    githubUrl: 'https://github.com/HUMO-collab/patternaiq-estates',
    status: 'live',
    featured: true,
  },
  {
    id: 4,
    title: 'Aleino — Luxury Watch Landing Page',
    description: 'Premium single-page product landing page for a luxury watch brand. Cinematic hero section, editorial layout, and conversion-focused design built for client review.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    liveUrl: 'https://aleino.vercel.app',
    githubUrl: null,
    status: 'in-progress',
    featured: false,
  },
  {
    id: 6,
    title: 'OCR Till Slip Automation',
    description: 'Automated till slip reading pipeline. Captures receipts via WhatsApp, extracts line items and totals using OCR, and logs structured data — zero manual data entry.',
    tags: ['n8n', 'OCR', 'WhatsApp API', 'SendPulse', 'Make'],
    liveUrl: null,
    githubUrl: null,
    status: 'live',
    featured: false,
  },
  {
    id: 7,
    title: 'YouTube Faceless Automation Pipeline',
    description: 'End-to-end automation system for faceless YouTube channels — script generation, AI voiceover, video assembly, and upload scheduling. Zero manual production effort per video.',
    tags: ['n8n', 'AI', 'Remotion', 'ElevenLabs', 'YouTube API'],
    liveUrl: null,
    githubUrl: null,
    status: 'in-progress',
    featured: false,
  },
  {
    id: 8,
    title: 'Voice AI — Soap Production Assistant',
    description: 'Voice-powered AI assistant for a soap manufacturing business. Handles production queries, batch tracking, and operational workflows through natural voice interaction.',
    tags: ['Voice AI', 'Groq Whisper', 'Gemini', 'ElevenLabs', 'n8n'],
    liveUrl: null,
    githubUrl: null,
    status: 'in-progress',
    featured: false,
  },
  {
    id: 9,
    title: 'Personal AI Assistant System',
    description: 'Multi-workflow personal AI assistant handling scheduling, task management, research, and communications — built on n8n with Claude and Gemini as the reasoning layer.',
    tags: ['n8n', 'Claude API', 'Gemini', 'Workflow Automation'],
    liveUrl: null,
    githubUrl: null,
    status: 'in-progress',
    featured: false,
  },
]

export const skills = [
  { category: 'Automation', items: ['n8n', 'Make (Integromat)', 'Webhooks', 'API Integration', 'OCR Pipelines'] },
  { category: 'Frontend', items: ['React', 'Next.js 14', 'Vite', 'Tailwind CSS', 'Three.js / WebGL'] },
  { category: 'Backend & DB', items: ['Supabase', 'PostgreSQL', 'REST APIs', 'Node.js'] },
  { category: 'Infra & Tools', items: ['Vercel', 'VPS / Ubuntu', 'Git / GitHub', 'Docker basics'] },
  { category: 'AI & Integrations', items: ['Claude API', 'Gemini API', 'SendPulse', 'WhatsApp API', 'Prompt Engineering'] },
]

export const contact = {
  email: 'wesdonwynes@gmail.com',
  github: 'https://github.com/HUMO-collab',
  upwork: null,     // Add after profile is live
  fiverr: null,     // Add after gig is live
  linkedin: null,
}
