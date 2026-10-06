import { useEffect, useState } from 'react'
import { contact, hero, why, story, projects, behind, skills, soft, process } from './content'

const NAV = [
  ['why', 'Why me'],
  ['story', 'Story'],
  ['work', 'Work'],
  ['skills', 'Skills'],
  ['process', 'Process'],
]

function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const els = [...document.querySelectorAll('.reveal')]
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    document.documentElement.classList.add('js-armed')
    els.forEach((el) => io.observe(el))
    const t = setTimeout(() => els.forEach((el) => el.classList.add('in')), 1500)
    return () => { io.disconnect(); clearTimeout(t) }
  }, [])
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

  return (
    <>
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
          <div className="glow" style={{ width: 460, height: 460, background: '#ff6a1f', top: -140, right: -120 }} />
          <div className="glow" style={{ width: 320, height: 320, background: '#ffc56b', bottom: -120, left: -100, opacity: 0.18 }} />
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <div className="eyebrow">{hero.kicker}</div>
                <h1>
                  <span>{hero.title[0]}</span>
                  <span className="hot">{hero.title[1]}</span>
                  <span>{hero.title[2]}</span>
                </h1>
                <p className="lead" style={{ marginBottom: 28 }}>{hero.sub}</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a className="btn primary" href="#work">See the work →</a>
                  <a className="btn" href="#contact">Start a conversation</a>
                </div>
              </div>
              <div className="portrait">
                <img src="/humo.jpg" alt="Lehumo Manala" width="640" height="600" fetchpriority="high" />
                <div className="badge"><b>Lehumo "Humo" Manala</b><br />BEngTech Metallurgy · Founder, Patterniaq</div>
              </div>
            </div>
            <div className="stats">
              {hero.stats.map((s) => (
                <div className="stat reveal" key={s.l}><div className="n">{s.n}</div><div className="l">{s.l}</div></div>
              ))}
            </div>
          </div>
        </section>

        <section id="why">
          <div className="wrap">
            <Head eyebrow="01 / Why work with me" title="Four reasons, each with a receipt." lead="Plenty of people can wire up an automation. Here is what you get that is different." />
            <div className="grid g2">
              {why.map((w, i) => (
                <div className="card reveal" key={w.t}>
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
            <Head eyebrow="02 / Story" title="From the furnace floor to the workflow canvas." />
            {story.map((s) => (
              <div className="story-row reveal" key={s.h}><h3>{s.h}</h3><p>{s.p}</p></div>
            ))}
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
                <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Head eyebrow="Behind the build" title="Where the work actually happens." />
            <div className="grid g3">
              {behind.map((b) => (
                <figure className="shot reveal" key={b.src}>
                  <img src={b.src} alt={b.alt} loading="lazy" />
                  <figcaption>{b.cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" style={{ background: 'var(--bg2)' }}>
          <div className="wrap">
            <Head eyebrow="04 / Skills" title="Hard skills, and the soft ones that make them useful." />
            <div className="grid g3" style={{ marginBottom: 44 }}>
              {skills.map((s) => (
                <div className="card reveal" key={s.g}>
                  <h3>{s.g}</h3>
                  <div className="chips" style={{ marginTop: 6 }}>{s.i.map((x) => <span className="chip" key={x}>{x}</span>)}</div>
                </div>
              ))}
            </div>
            <div className="grid g3">
              {soft.map((s) => (
                <div className="reveal" key={s.t} style={{ borderLeft: '2px solid var(--amber)', paddingLeft: 16 }}>
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
              {process.map((s) => (
                <div className="step reveal" key={s.n}>
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
                {contact.email && <a className="btn primary" href={'mailto:' + contact.email}>Email me</a>}
                <a className={'btn' + (contact.email ? '' : ' primary')} href={contact.linkedin} target="_blank" rel="noreferrer">Message on LinkedIn</a>
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
