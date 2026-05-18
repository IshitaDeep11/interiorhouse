import { useReveal } from '../useReveal'

const projects = [
  { img: '/images/img9.jpeg', cat: 'Living Room', name: 'Modern Luxury Living' },
  { img: '/images/img12.jpeg', cat: 'Modular Kitchen', name: 'Sleek White Kitchen' },
  { img: '/images/img17.jpeg', cat: 'Master Bedroom', name: 'Warm Wood Retreat' },
  { img: '/images/img7.jpeg', cat: 'False Ceiling', name: 'Tray Ceiling Design' },
  { img: '/images/img18.jpeg', cat: 'TV Unit', name: 'Feature Wall Unit' },
]

export default function Projects() {
  const r1 = useReveal()
  const r2 = useReveal()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header reveal" ref={r1}>
        <div>
          <div className="section-tag">Our Portfolio</div>
          <h2 className="section-title">Recent <em>Projects</em></h2>
        </div>
        <button className="btn-secondary" style={{ flexShrink: 0 }} onClick={() => scrollTo('contact')}>
          Discuss Your Project
        </button>
      </div>
      <div className="projects-grid reveal" ref={r2}>
        {projects.map((p, i) => (
          <div className="proj-card" key={i}>
            <img src={p.img} alt={p.cat} />
            <div className="proj-overlay">
              <div className="proj-cat">{p.cat}</div>
              <div className="proj-name">{p.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
