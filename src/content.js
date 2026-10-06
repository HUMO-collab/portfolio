// CLAIMS REGISTER — every line below traces to a verified record (STATE.md files, git, memory).
// If it is not provable, it is not on the site. Edit here, the site updates.

export const contact = {
  email: 'mcebisenimanalalehumo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mcebisenimanala',
  github: 'https://github.com/HUMO-collab',
  site: 'https://pattern-ai-q.com',
}

export const hero = {
  kicker: 'Metallurgical engineer · AI systems builder · Johannesburg',
  title: ['I build systems', 'that keep running', 'after I leave.'],
  sub: 'Lehumo "Humo" Manala. Engineering student and founder of Patterniaq. I turn messy, manual business processes into automations that are tested, monitored and handed over working.',
  stats: [
    { n: '1 yr', l: 'in the AI space, building systems' },
    { n: 'R5k+', l: 'earned across client and side projects' },
    { n: '26', l: 'live tickets migrated, field-checked 26/26' },
    { n: '10/10', l: 'trading ideas I tested and killed with data' },
  ],
}

export const ticker = [
  'n8n', 'Supabase', 'WhatsApp API', 'Claude API', 'Agent Reach', 'Next.js', 'Three.js', 'Python',
  'Telegram bots', 'LinkedIn API', 'Airtable', 'SOLIDWORKS', 'Vercel', 'Remotion', 'PostgreSQL',
]

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
    t: 'I have been selling since primary school',
    d: 'Candy, then paid help, then affiliate links and reselling, then a bar job for 1 year 7 months. I know what manual, repetitive work feels like from the inside, so I build for the person doing it.',
  },
  {
    t: 'I show up with a diagnosis',
    d: 'On a live carpet-retailer site I measured mobile Lighthouse 34/100, 9.0 s LCP and ~18-30 MB per visit before proposing anything. You get numbers, then a plan.',
  },
]

export const journey = [
  {
    when: 'Primary school',
    role: 'Selling candy',
    saw: 'My first business: buy sweets, sell them on at school. Nobody taught me margins, I just noticed the gap.',
    led: 'I learned that a small spread, repeated, becomes money.',
  },
  {
    when: 'Grade 8',
    role: 'Getting paid for value',
    saw: 'I helped a classmate with an assignment and got paid. I used that cash to buy my first Bluetooth speaker.',
    led: 'That was the lesson that stuck: you make money by saving and by creating value for someone else.',
  },
  {
    when: 'High school',
    role: 'Affiliate and reseller',
    saw: 'I became an affiliate for a reseller selling earbuds: every person I sent their way earned me a percentage. Then I started reselling myself.',
    led: 'I saw that distribution is a product too, and that sending the right people to the right place pays.',
  },
  {
    when: 'First year, second semester',
    role: 'Bartender, then part-time manager',
    saw: 'My first real job. I worked for 1 year and 7 months while still reselling, later managing shifts for an events and craft-beer business: bookings, staffing, stock and follow-up, all in chats and heads.',
    led: 'This is where I met the follow-up problem: customers and leads do not leave, they just get answered late. I wanted to produce content, answer clients and list products while I was in class.',
  },
  {
    when: 'Getting into AI',
    role: 'Teaching myself to build',
    saw: 'I set up my own VPS from YouTube tutorials, working in a cloud terminal on Hostinger. Then I built my own personal agent on Meta and OpenRouter.',
    led: 'I liked building systems more than anything else I had done. That is what led to Patterniaq.',
  },
  {
    when: 'Now',
    role: 'Founder, Patterniaq',
    saw: 'One year in the AI space. R5k+ earned across different projects, some money lost, mistakes made, and I stayed curious through all of it. I study Metallurgical Engineering at TUT, and that training is why I test everything.',
    led: 'The obsession in one line: find the loop people repeat by hand, measure it, replace it with something that runs, and hand it over.',
  },
]

export const projects = [
  {
    id: 'research',
    tag: 'Research pipeline · Agent Reach',
    title: 'Internet research pipeline',
    line: 'Question in, sourced and honestly-labelled answer out, built on Agent Reach.',
    points: [
      'Agent Reach gives my agents one routed way to read 16 platforms: web, X, Reddit, YouTube, GitHub, LinkedIn, RSS and more.',
      'Method: question, parallel fetch, notes saved to disk with source links, every claim tagged verified or UNVERIFIED, then a decision memo.',
      'Outputs so far: a 6-leg algo-trading study (0 strategies executable at a R330 account), an InSAR mining study that caught a retracted paper, and an open-model licensing check that found one "open" model needs written commercial authorisation.',
      'The rule that makes it trustworthy: if a page failed to load, the memo says so instead of filling the gap.',
    ],
    imgs: [
      { src: '/build-terminal.jpg', alt: 'Terminal running Claude Code', cap: 'Claude Code session', shape: 'wide' },
      { src: '/build-skills.jpg', alt: 'Terminal installing agent skills', cap: 'Installing agent skills', shape: 'wide' },
    ],
    stack: ['Agent Reach', 'Claude Code', 'Python', 'Markdown vault'],
  },
  {
    id: 'invest',
    tag: 'Finance · investing system',
    title: 'EasyEquities investment tracker',
    line: 'A system that tracks my investments and helps me decide what is worth investing in.',
    points: [
      'It tracks my EasyEquities holdings in one place and helps me judge what is worth putting money into next.',
      'I modelled the real costs of the platform first: about 1% brokerage, free EFT deposits, R150 per cash-out.',
      'That cash-out fee is 45% of a R330 account, so the approach is slow holds, not frequent trading.',
      'No strategy gets money until it passes a written evidence bar. I built a significance gate (Bayesian P(edge), Deflated Sharpe, bootstrap CI) and ran it on my own ideas.',
      'Result: 0 of 208 configs passed and 10 of 10 trading families died, which is exactly why the plan is patient capital instead of a clever trick.',
    ],
    facts: [
      { k: '~1%', v: 'EasyEquities brokerage' },
      { k: '45%', v: 'R150 cash-out vs a R330 account' },
      { k: '0 / 208', v: 'strategy configs that passed the gate' },
      { k: '10 / 10', v: 'trading families killed by data' },
    ],
    note: 'Personal process, not financial advice.',
    stack: ['EasyEquities', 'Python', 'Statistics', 'Cost modelling'],
  },
  {
    id: 'linkedin',
    tag: 'Content system · n8n + Airtable',
    title: 'LinkedIn content system',
    line: 'A queue that drafts, schedules and posts carousels to my profile without me touching it.',
    points: [
      'A 37-node n8n workflow runs four slots a day (9:00, 12:00, 15:00, 18:00 SAST): next queued post from Airtable, lock, post, mark done, Telegram confirmation.',
      'I proved the old posting node had never been able to publish a carousel, then rebuilt it on LinkedIn\'s Documents API so a PDF becomes a real swipeable carousel.',
      'Found and fixed a silent bug: two post types had no error wiring, so failures vanished and rows stuck at "Posting". Now they alert and mark Failed.',
      'Designed the carousels myself in HTML, rendered with headless Chrome into PDF, hosted in a public Supabase bucket. The first carousel went live on 30 Sep 2026.',
    ],
    imgs: [
      { src: '/li-cover.jpg', alt: 'LinkedIn carousel cover slide', cap: 'Cover slide', shape: 'tall' },
      { src: '/li-delivery.jpg', alt: 'LinkedIn carousel layer slide', cap: 'Layer slide', shape: 'tall' },
      { src: '/li-menu.jpg', alt: 'LinkedIn carousel menu slide', cap: 'Menu slide', shape: 'tall' },
    ],
    stack: ['n8n', 'Airtable', 'LinkedIn API', 'Supabase', 'Headless Chrome'],
  },
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
    imgs: [{ src: '/build-n8n.jpg', alt: 'n8n AI agent workflow on the canvas', cap: 'An n8n AI-agent workflow on the canvas', shape: 'wide' }],
    stack: ['n8n', 'Supabase', 'Telegram', 'Tally', 'Cal.com'],
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
  },
  {
    id: 'sites',
    tag: 'Web · e-commerce & brand',
    title: 'FootFusionWear storefront and Levarto 3D site',
    line: 'Brand sites, tuned until they were measurably right. The reseller years, productised.',
    points: [
      'FootFusionWear (live): found and fixed a mobile-menu bug caused by backdrop-filter, and a stray config that was silently disabling redirects and security headers.',
      'Image weight cut 3.94 MB to 1.16 MB; 8-page audit, 61 links, 0 problems.',
      'Levarto: cinematic 3D site (Next.js, Three.js, GSAP) with 3 production automation workflows behind it.',
    ],
    imgs: [{ src: '/ff-pack.jpg', alt: 'FootFusionWear packaging concept sheet', cap: 'FootFusionWear packaging concept', shape: 'wide' }],
    stack: ['Next.js', 'Three.js', 'GSAP', 'Tailwind'],
    link: 'https://footfusionwear.vercel.app',
  },
]

export const skills = [
  { g: 'Automation', i: ['n8n', 'Webhooks & REST', 'WhatsApp / SendPulse', 'Telegram bots', 'Tally', 'Make'] },
  { g: 'AI & research', i: ['Claude API', 'Agent design', 'Agent Reach', 'Prompt engineering', 'Voice / video pipelines'] },
  { g: 'Build', i: ['React / Next.js', 'Tailwind', 'Three.js / GSAP', 'Python', 'Node.js'] },
  { g: 'Data & Ops', i: ['Supabase / PostgreSQL', 'Row-level security', 'Airtable', 'Vercel', 'Git / GitHub'] },
  { g: 'Engineering & finance', i: ['Hydrometallurgy', 'Reaction kinetics', 'SOLIDWORKS', 'Statistics', 'Cost modelling'] },
  { g: 'People', i: ['Customer-facing service', 'Shift management', 'Sourcing & resale', 'Negotiation', 'Loom outreach'] },
]

export const soft = [
  { t: 'Radical honesty', d: 'I report failures first, with the evidence.' },
  { t: 'First-principles thinking', d: 'I ask what is actually true before I build.' },
  { t: 'Ownership', d: 'I audit my own work harder than a client would.' },
  { t: 'Fast learner', d: 'Hands-on, in layers: new stack to working build quickly.' },
  { t: 'Clear communication', d: 'Short answers, numbers over adjectives.' },
  { t: 'Curiosity', d: 'Still learning every week, and open about what I got wrong.' },
  { t: 'Calm under pressure', d: 'Study, business and delivery run in parallel; I plan, then execute.' },
]

export const process = [
  { n: '01', t: 'Diagnose', d: 'Map the workflow, find the bottleneck, measure it.' },
  { n: '02', t: 'Scope', d: 'A written scope with done-criteria and a price, before building.' },
  { n: '03', t: 'Build & test', d: 'Small chunks, automated tests, checkpoints you can see.' },
  { n: '04', t: 'Hand over running', d: 'Monitoring, backup, and a plain-English runbook.' },
]
