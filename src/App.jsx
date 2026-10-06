import { useEffect, useRef, useState } from 'react'
import { contact, hero, ticker, why, journey, projects, skills, soft, process } from './content'

const NAV = [
  ['why', 'Why me'],
  ['story', 'Journey'],
  ['work', 'Work'],
  ['skills', 'Skills'],
  ['process', 'Process'],
]

/* ---------- motion hooks ---------- */
function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const els = [...document.querySelectorAll('.reveal')]
    if (new URLSearchParams(location.search).has('static')) {
      document.documentElement.classList.add('js-armed', 'static')
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    document.documentElement.classList.add('js-armed')
    els.forEach((el) => io.observe(el))
    const t = setTimeout(() => els.forEach((el) => el.classList.add('in')), 1800)
    return () => { io.disconnect(); clearTimeout(t) }
  }, [])
}

function useScrollFx() {
  useEffect(() => {
    const bar = document.getElementById('progress')
    const tl = document.getElementById('tl')
    const portrait = document.getElementById('portrait')
    let raf = 0
    const run = () => {
      raf = 0
      const h = document.documentElement
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)
      if (bar) bar.style.transform = `scaleX(${p})`
      if (portrait) portrait.style.setProperty('--py', `${Math.min(h.scrollTop, 600) * -0.06}px`)
      if (tl) {
        const r = tl.getBoundingClientRect()
        const f = Math.min(1, Math.max(0, (window.innerHeight * 0.7 - r.top) / r.height))
        tl.style.setProperty('--draw', f)
      }
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(run) }
    run()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [])
}

function useSpotlight() {
  useEffect(() => {
    const move = (e) => {
      const c = e.target.closest && e.target.closest('.spot')
      if (!c) return
      const r = c.getBoundingClientRect()
      c.style.setProperty('--mx', `${e.clientX - r.left}px`)
      c.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])
}

function CountUp({ value }) {
  const m = /^(\d+)(.*)$/.exec(value)
  const [n, setN] = useState(m ? 0 : null)
  const ref = useRef(null)
  useEffect(() => {
    if (!m) return
    const target = parseInt(m[1], 10)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) { setN(target); return }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / 1300)
        setN(Math.round(target * (1 - Math.pow(1 - k, 3))))
        if (k < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(ref.current)
    const f = setTimeout(() => setN(target), 2500)
    return () => { io.disconnect(); clearTimeout(f) }
  }, [value])
  return <span ref={ref}>{m ? n + m[2] : value}</span>
}

function Words({ text, base = 0 }) {
  return text.split(' ').map((w, i) => (
    <span className="w" key={i}><span style={{ '--i': base + i }}>{w}&nbsp;</span></span>
  ))
}

function Head({ eyebrow, title, lead }) {
  return (
    <div className="reveal" style={{ marginBottom: 36 }}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="sec">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  useReveal()
  useScrollFx()
  useSpotlight()

  return (
    <>
      <div id="progress" aria-hidden="true" />
      <header className="nav">
        <div className="wrap row">
          <a href="#top" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>Humo<b>.</b></a>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
          <nav className={'links' + (open ? ' open' : '')}>
            {NAV.map(([id, l]) => <a key={id} href={'#' + id} onClick={() => setOpen(false)}>{l}</a>)}
            <a className="btn primary" href="#contact" onClick={() => setOpen(false)} style={{ padding: '9px 18px' }}>Work with me</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="glow g-a" />
          <div className="glow g-b" />
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <div className="eyebrow fade-up">{hero.kicker}</div>
                <h1>
                  <span><Words text={hero.title[0]} base={0} /></span>
                  <span className="hot"><Words text={hero.title[1]} base={3} /></span>
                  <span><Words text={hero.title[2]} base={6} /></span>
                </h1>
                <p className="lead fade-up" style={{ marginBottom: 28, '--d': '0.9s' }}>{hero.sub}</p>
                <div className="fade-up" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', '--d': '1.05s' }}>
                  <a className="btn primary shine" href="#work">See the work →</a>
                  <a className="btn" href="#contact">Start a conversation</a>
                </div>
              </div>
              <div className="portrait-wrap fade-up" style={{ '--d': '0.5s' }}>
                <div className="portrait" id="portrait">
                  <img src="/humo.jpg" alt="Lehumo Manala" width="1280" height="1120" fetchpriority="high" />
                  <div className="badge"><b>Lehumo "Humo" Manala</b><br />BEngTech Metallurgy · Founder, Patterniaq</div>
                </div>
              </div>
            </div>
            <div className="stats">
              {hero.stats.map((s, i) => (
                <div className="stat reveal" key={s.l} style={{ '--d': i * 0.08 + 's' }}>
                  <div className="n"><CountUp value={s.n} /></div><div className="l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="track">
            {[...ticker, ...ticker].map((t, i) => <span key={i}>{t}<i /></span>)}
          </div>
        </div>

        <section id="why">
          <div className="wrap">
            <Head eyebrow="01 / Why work with me" title="Four reasons, each with a receipt." lead="Plenty of people can wire up an automation. Here is what you get that is different." />
            <div className="grid g2">
              {why.map((w, i) => (
                <div className="card spot reveal" key={w.t} style={{ '--d': (i % 2) * 0.1 + 's' }}>
                  <div className="num">0{i + 1}</div>
                  <h3 style={{ marginTop: 8 }}>{w.t}</h3>
                  <p>{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="story" style={{ background: 'var(--bg2)' }}>
          <div className="wrap">
            <Head eyebrow="02 / How I got here" title="Four jobs, one obsession." lead="Bartender, manager, reseller, engineer. Each one showed me a loop that people repeat by hand, and that is what I now build for." />
            <div className="timeline" id="tl">
              <div className="tl-line" />
              {journey.map((j, i) => (
                <div className="tl-item reveal" key={j.role} style={{ '--d': '0.05s' }}>
                  <div className="tl-dot" />
                  <div className="eyebrow">{String(i + 1).padStart(2, '0')} · {j.when}</div>
                  <h3 className="serif">{j.role}</h3>
                  <p className="tl-saw">{j.saw}</p>
                  <p className="tl-led"><b>What it led to:</b> {j.led}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <Head eyebrow="03 / Selected work" title="Systems I have built, and what they did." lead="Real builds, real numbers. Where something failed, it says so." />
            {projects.map((p) => (
              <article className="proj reveal" key={p.id}>
                <div>
                  <div className="eyebrow">{p.tag}</div>
                  <h3>{p.title}</h3>
                  <p className="line">{p.line}</p>
                  <div className="chips">{p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
                  {p.link && <a className="livelink" href={p.link} target="_blank" rel="noreferrer">Visit live site ↗</a>}
                </div>
                <div>
                  <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  {p.facts && (
                    <div className="facts">
                      {p.facts.map((f) => (
                        <div className="fact spot" key={f.v}><div className="fk">{f.k}</div><div className="fv">{f.v}</div></div>
                      ))}
                    </div>
                  )}
                  {p.note && <p className="pnote">{p.note}</p>}
                  {p.imgs && (
                    <div className={'media m' + p.imgs.length}>
                      {p.imgs.map((m) => (
                        <figure className={'shot ' + m.shape} key={m.src}>
                          <img src={m.src} alt={m.alt} loading="lazy" />
                          <figcaption>{m.cap}</figcaption>
                        </figure>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" style={{ background: 'var(--bg2)' }}>
          <div className="wrap">
            <Head eyebrow="04 / Skills" title="Hard skills, and the soft ones that make them useful." />
            <div className="grid g3" style={{ marginBottom: 44 }}>
              {skills.map((s, i) => (
                <div className="card spot reveal" key={s.g} style={{ '--d': (i % 3) * 0.08 + 's' }}>
                  <h3>{s.g}</h3>
                  <div className="chips" style={{ marginTop: 6 }}>{s.i.map((x) => <span className="chip" key={x}>{x}</span>)}</div>
                </div>
              ))}
            </div>
            <div className="grid g3">
              {soft.map((s, i) => (
                <div className="reveal soft" key={s.t} style={{ '--d': (i % 3) * 0.08 + 's' }}>
                  <div style={{ fontWeight: 600 }}>{s.t}</div>
                  <p style={{ color: 'var(--mute)', fontSize: 14.5 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <Head eyebrow="05 / How we would work" title="Diagnose first. Build small. Hand over running." />
            <div className="grid g4">
              {process.map((s, i) => (
                <div className="step reveal" key={s.n} style={{ '--d': i * 0.1 + 's' }}>
                  <div className="num">{s.n}</div>
                  <h3 className="serif" style={{ fontSize: 22, margin: '6px 0' }}>{s.t}</h3>
                  <p style={{ color: 'var(--mute)', fontSize: 15 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <div className="contact-box reveal">
              <div className="glow" style={{ width: 380, height: 380, background: '#ff6a1f', top: -180, left: '35%', opacity: 0.25 }} />
              <div className="eyebrow" style={{ position: 'relative' }}>06 / Contact</div>
              <h2 className="sec" style={{ position: 'relative' }}>Got a process that eats your week?</h2>
              <p className="lead" style={{ position: 'relative' }}>Tell me where the time goes. I will come back with a diagnosis, not a sales pitch.</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                {contact.email && <a className="btn primary shine" href={'mailto:' + contact.email}>Email me</a>}
                <a className="btn" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="btn" href={contact.site} target="_blank" rel="noreferrer">Patterniaq</a>
                <a className="btn" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <span>© 2026 Lehumo Manala · Johannesburg, South Africa</span>
          <span className="mono">Every claim here has a receipt.</span>
        </div>
      </footer>
    </>
  )
}
