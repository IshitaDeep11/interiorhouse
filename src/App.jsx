import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Projects from './components/Projects'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 })

  // Loader
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900)
    return () => clearTimeout(t)
  }, [])

  // Custom cursor
  useEffect(() => {
    const move = e => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      setTimeout(() => setRingPos({ x: e.clientX, y: e.clientY }), 80)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {/* Loader */}
      <div className={`loader${loaded ? ' hide' : ''}`}>
        <div className="loader-logo">IH</div>
      </div>

      {/* Custom cursor */}
      <div className="cursor" style={{ left: cursorPos.x, top: cursorPos.y }} />
      <div className="cursor-ring" style={{ left: ringPos.x, top: ringPos.y }} />

      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <WhyUs />
      <Projects />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
