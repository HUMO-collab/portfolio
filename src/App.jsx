import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import Industries from './components/Industries'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#projects' },
  { label: 'Stack',    href: '#stack' },
  { label: 'Contact',  href: '#contact' },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#06081a]">
      {/* Desktop Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 hidden sm:flex items-center justify-between px-8 py-4 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/5' : ''
      }`}>
        <a href="#hero" className="font-mono text-sm text-white/60 tracking-widest uppercase hover:text-white transition-colors">
          LM
        </a>
        <div className="flex items-center gap-7">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
               className="text-sm text-white/50 hover:text-white transition-colors font-mono tracking-wide">
              {link.label}
            </a>
          ))}
          <a href="#contact"
             className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:opacity-90 hover:shadow-glow-purple transition-all duration-200">
            Book a Call
          </a>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Services />
        <Industries />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/5 flex items-center justify-around px-2 py-3">
        <MobileNavItem href="#hero" label="Home">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </MobileNavItem>
        <MobileNavItem href="#services" label="Services">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </MobileNavItem>
        <MobileNavItem href="#projects" label="Work">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </MobileNavItem>
        <MobileNavItem href="#stack" label="Stack">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </MobileNavItem>
        <MobileNavItem href="#contact" label="Contact">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </MobileNavItem>
      </nav>
    </div>
  )
}

function MobileNavItem({ href, label, children }) {
  return (
    <a href={href} className="flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors px-2">
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        {children}
      </svg>
      <span className="text-xs font-mono">{label}</span>
    </a>
  )
}
