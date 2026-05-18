export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="hero-tag">Varanasi's Premier Design Studio</div>
        <h1 className="hero-title">
          Design Your<br /><em>Dream Space</em>
        </h1>
        <p className="hero-desc">
          We transform ordinary houses into extraordinary homes. Premium interior
          solutions crafted with passion, precision, and purpose.
        </p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Book Free Consultation
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('projects')}>
            View Our Work
          </button>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat"><div className="stat-num">500+</div><div className="stat-label">Projects Done</div></div>
        <div className="stat"><div className="stat-num">8+</div><div className="stat-label">Years Experience</div></div>
        <div className="stat"><div className="stat-num">100%</div><div className="stat-label">Client Satisfaction</div></div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        Scroll
      </div>
    </section>
  )
}
