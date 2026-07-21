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
  

  // Loader
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900)
    return () => clearTimeout(t)
  }, [])

  

  return (
    <>
      {/* Loader */}
      <div className={`loader${loaded ? ' hide' : ''}`}>
        <img src='/images/IH_Logo.png' alt="Interior House" className="loader-logo-img" />
      </div>

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
