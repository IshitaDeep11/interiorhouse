import { useReveal } from '../useReveal'

const services = [
  { icon: '⬜', name: 'False Ceiling', desc: 'PVC, POP & Gypsum false ceilings with elegant lighting solutions that transform your room\'s ambiance instantly.' },
  { icon: '🍳', name: 'Modular Kitchen', desc: 'Sleek, functional modular kitchens designed for modern Indian homes — combining beauty with practical storage.' },
  { icon: '📺', name: 'TV Unit & Wall Design', desc: 'Custom TV units and feature walls crafted with wood, stone, and panel combinations that become your room\'s centrepiece.' },
  { icon: '🪵', name: 'Wooden Work & Louvers', desc: 'Precision carpentry — wardrobes, beds, partitions, and decorative louvers that add warmth and character to spaces.' },
  { icon: '🖼', name: 'Wallpaper & Wall Panels', desc: 'Premium imported wallpapers and 3D wall panels installed flawlessly to give your walls a luxurious, finished look.' },
  { icon: '🏠', name: 'Flooring & Texture Painting', desc: 'Marble, vitrified, wooden — every flooring type with texture painting finishes that elevate every square foot.' },
  { icon: '🪟', name: 'ACP & Glass Work', desc: 'Modern ACP cladding and glass partitions for that premium commercial and residential aesthetic.' },
  { icon: '🛋', name: 'Sofa Repairing & Modern Bed', desc: 'Custom upholstered beds and professional sofa restoration services to refresh your living spaces.' },
]

export default function Services() {
  const r1 = useReveal()
  const r2 = useReveal()
  return (
    <section id="services" className="services-section">
      <div className="reveal" ref={r1}>
        <div className="section-tag">What We Offer</div>
        <h2 className="section-title">Complete Interior<br /><em>Solutions Under One Roof</em></h2>
      </div>
      <div className="services-grid reveal" ref={r2}>
        {services.map((s) => (
          <div className="service-card" key={s.name}>
            <span className="service-icon">{s.icon}</span>
            <div className="service-name">{s.name}</div>
            <div className="service-desc">{s.desc}</div>
            <div className="service-line" />
          </div>
        ))}
      </div>
    </section>
  )
}
