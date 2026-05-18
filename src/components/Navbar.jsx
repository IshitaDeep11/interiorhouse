import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <span className="nav-logo" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>
        Interior <span>House</span>
      </span>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {[['services','Services'],['projects','Projects'],['why','About'],['process','Process'],['contact','Contact']].map(([id,label]) => (
          <li key={id}><a onClick={() => scrollTo(id)}>{label}</a></li>
        ))}
      </ul>

      <a className="nav-cta" onClick={() => scrollTo('contact')}>Get Free Quote</a>

      <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
        <span/><span/><span/>
      </button>
    </nav>
  )
}
