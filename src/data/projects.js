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
    liveUrl: null,
    githubUrl: 'https://github.com/HUMO-collab/levarto-premium-3d-website',
    status: 'live',
    featured: true,
  },
  {
    id: 3,
    title: 'Patternaiq Estates',
    description: 'Real estate platform with branded 3D perspective scroll effects, neural background aesthetics, and logo-matched design system built on Next.js and Supabase.',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'WebGL'],
    liveUrl: null,
    githubUrl: 'https://github.com/HUMO-collab/patternaiq-estates',
    status: 'live',
    featured: true,
  },
  {
    id: 4,
    title: 'OCR Till Slip Automation',
    description: 'Automated till slip reading pipeline using n8n and OCR. Captures receipts via WhatsApp, extracts line items and totals, and logs structured data — no manual data entry required.',
    tags: ['n8n', 'OCR', 'WhatsApp API', 'SendPulse', 'Make'],
    liveUrl: null,
    githubUrl: null,
    status: 'live',
    featured: false,
  },
  {
    id: 5,
    title: 'Levarto V2 — WebGL Landing Page',
    description: 'Second-generation Levarto landing page built with WebGL for premium visual fidelity. Focused on performance and immersive product presentation.',
    tags: ['Next.js', 'WebGL', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: 'https://github.com/HUMO-collab/Levartov2',
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
