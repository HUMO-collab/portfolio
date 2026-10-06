// CLAIMS REGISTER — every line below traces to a verified record (STATE.md files, git, memory).
// If it is not provable, it is not on the site. Edit here, the site updates.

export const contact = {
  email: '', // TODO(Humo): add the email you want public; the button appears automatically
  linkedin: 'https://www.linkedin.com/in/mcebisenimanala',
  github: 'https://github.com/HUMO-collab',
  site: 'https://pattern-ai-q.com',
}

export const hero = {
  kicker: 'Metallurgical engineer · AI systems builder · Johannesburg',
  title: ['I build systems', 'that keep running', 'after I leave.'],
  sub: 'Lehumo "Humo" Manala. Engineering student and founder of Patterniaq. I turn messy, manual business processes into automations that are tested, monitored and handed over working.',
  stats: [
    { n: '6', l: 'n8n workflows running my own business' },
    { n: '68', l: 'automated tests on my CAD-automation CLI' },
    { n: '26', l: 'live tickets migrated, field-checked 26/26' },
    { n: '10/10', l: 'trading ideas I tested and killed with data' },
  ],
}

export const why = [
  {
    t: 'Engineer-grade verification',
    d: 'I trained as a metallurgist: you do not claim a result you have not measured. I re-derive from source, test against a known-broken build first, and report failures plainly. When my own trading research failed a significance test, I killed it and wrote down why.',
  },
  {
    t: 'I hand over running systems',
    d: 'Not a demo, not a slide. A workflow with alerts, a backup, a test, and a note on what breaks. Your business should not need me on a Tuesday.',
  },
  {
    t: 'I show up with a diagnosis',
    d: 'On a live carpet-retailer site I measured mobile Lighthouse 34/100, 9.0 s LCP and ~18-30 MB per visit before proposing anything. You get numbers, then a plan.',
  },
  {
    t: 'Honest about where I am',
    d: 'Early-stage and pre-revenue, with real systems in production and the receipts below. You get the founder, not a layer of account managers.',
  },
]

export const story = [
  {
    h: 'The engineer',
    p: 'I study Metallurgical Engineering at Tshwane University of Technology. Leaching kinetics, solvent extraction, thermodynamics: fields where an unchecked assumption costs real money. That habit is the foundation of how I build software.',
  },
  {
    h: 'The bottleneck',
    p: 'In June 2026 I audited myself: my April systems had failed because I was doing everything by hand. I was the bottleneck. So I rebuilt the way I work around systems that run without me, and started with my own business first.',
  },
  {
    h: 'The company',
    p: 'Patterniaq is an AI-automation agency I run solo from Johannesburg. Outbound custom Loom videos are my validated channel, getting discovery calls booked. I am pre-revenue and openly so, which is why every claim on this page has a receipt.',
  },
]

export const projects = [
  {
    id: 'futuredev',
    tag: 'Client system · property maintenance',
    title: 'FutureDev maintenance dashboard + WhatsApp bot',
    line: 'Live ticketing dashboard for a property-management client, fed by a WhatsApp bot.',
    points: [
      'Dashboard live since July 2026 (Next.js, Supabase with row-level security, Vercel).',
      'Migrated 26 open tickets from their old tool, verified 26/26 field-exact, with a live UI check.',
      'Built emergency escalation; when its WhatsApp leg failed on a real ticket I traced it node-by-node and kept Telegram + email as containment.',
      'Production test suites: 16/16, 26/26 and 50/50 click-through before shipping fixes.',
    ],
    stack: ['Next.js', 'Supabase', 'n8n', 'WhatsApp', 'Vercel'],
    color: 'a',
  },
  {
    id: 'aios',
    tag: 'My own business · operating system',
    title: 'Patterniaq AIOS',
    line: 'The system that runs my agency so I do not have to.',
    points: [
      '6 core n8n workflows: lead intake, onboarding, daily revenue brief, pipeline commands over Telegram.',
      'Lead goes from form to database to Telegram alert automatically; a nightly sweep flags failures and drift.',
      'Qualify-first funnel: Tally application, booking, then WhatsApp nurture only after opt-in, tested 40/40 offline.',
    ],
    stack: ['n8n', 'Supabase', 'Telegram', 'Tally', 'Cal.com'],
    color: 'b',
  },
  {
    id: 'mcad',
    tag: 'Engineering × software',
    title: 'mcad: a command line for SOLIDWORKS',
    line: 'My metallurgy-meets-code build: batch CAD jobs from a terminal.',
    points: [
      '13 commands over SOLIDWORKS COM: STEP/STL/DXF/PDF export, BOM to CSV, mass properties, headless renders.',
      '68 passing tests; constants read from the type library after three hand-typed ones turned out wrong.',
      'Wraps a real service: three packages, client intake and a deposit gate.',
    ],
    stack: ['Python', 'COM automation', 'SOLIDWORKS'],
    color: 'c',
  },
  {
    id: 'sites',
    tag: 'Web · e-commerce & brand',
    title: 'FootFusionWear storefront and Levarto 3D site',
    line: 'Brand sites, tuned until they were measurably right.',
    points: [
      'FootFusionWear (live): found and fixed a mobile-menu bug caused by backdrop-filter, and a stray config that was silently disabling redirects and security headers.',
      'Image weight cut 3.94 MB to 1.16 MB; 8-page audit, 61 links, 0 problems.',
      'Levarto: cinematic 3D site (Next.js, Three.js, GSAP) with 3 production automation workflows behind it.',
    ],
    stack: ['Next.js', 'Three.js', 'GSAP', 'Tailwind'],
    link: 'https://footfusionwear.vercel.app',
    color: 'a',
  },
  {
    id: 'research',
    tag: 'Research discipline',
    title: 'Systematic trading research: the honest failure',
    line: 'The project that taught me to kill my own ideas.',
    points: [
      'Built a backtest, paper-trade and live-gate pipeline with a significance test (Bayesian P(edge), Deflated Sharpe).',
      'Result: 0 of 208 strategy configurations passed; 10 of 10 strategy families dead on correct-hour retests.',
      'Fixed two real bugs found along the way: a forming-bar phantom signal and a position-size error that overstated USDJPY 158x.',
    ],
    stack: ['Python', 'Statistics', 'MT5'],
    color: 'b',
  },
]

export const skills = [
  { g: 'Automation', i: ['n8n', 'Webhooks & REST', 'WhatsApp / SendPulse', 'Telegram bots', 'Tally', 'Make'] },
  { g: 'AI', i: ['Claude API', 'Agent design', 'Prompt engineering', 'Voice / video pipelines', 'HyperFrames / Remotion'] },
  { g: 'Build', i: ['React / Next.js', 'Tailwind', 'Three.js / GSAP', 'Python', 'Node.js'] },
  { g: 'Data & Ops', i: ['Supabase / PostgreSQL', 'Row-level security', 'Vercel', 'VPS / Ubuntu', 'Git / GitHub'] },
  { g: 'Engineering', i: ['Hydrometallurgy', 'Reaction kinetics', 'SOLIDWORKS', 'Process thinking', 'Statistics'] },
]

export const soft = [
  { t: 'Radical honesty', d: 'I report failures first, with the evidence.' },
  { t: 'First-principles thinking', d: 'I ask what is actually true before I build.' },
  { t: 'Ownership', d: 'I audit my own work harder than a client would.' },
  { t: 'Fast learner', d: 'Hands-on, in layers: new stack to working build quickly.' },
  { t: 'Clear communication', d: 'Short answers, numbers over adjectives.' },
  { t: 'Calm under pressure', d: 'Study, business and delivery run in parallel; I plan, then execute.' },
]

export const process = [
  { n: '01', t: 'Diagnose', d: 'Map the workflow, find the bottleneck, measure it.' },
  { n: '02', t: 'Scope', d: 'A written scope with done-criteria and a price, before building.' },
  { n: '03', t: 'Build & test', d: 'Small chunks, automated tests, checkpoints you can see.' },
  { n: '04', t: 'Hand over running', d: 'Monitoring, backup, and a plain-English runbook.' },
]
