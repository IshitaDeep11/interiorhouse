import { useReveal } from '../useReveal'

const features = [
  { icon: '🏆', title: 'Premium Quality Materials', desc: 'We use only top-grade materials from trusted suppliers — ensuring durability and beauty that lasts for years.' },
  { icon: '⏱', title: 'On-Time Completion', desc: 'We respect your time. Our projects are delivered within the promised timeline without compromising quality.' },
  { icon: '💰', title: 'Affordable & Transparent Pricing', desc: 'No hidden costs. We offer competitive pricing with clear quotations — best design at the best price.' },
  { icon: '🎯', title: 'Free Site Visit & Consultation', desc: 'We visit your site, understand your vision, and provide expert design consultation — completely free.' },
]

export default function WhyUs() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()
  const r4 = useReveal()

  return (
    <section id="why" className="why-section">
      <div className="why-img-wrap reveal" ref={r1}>
  <div className="why-img-inner">
    <img
      src="/images/img16.jpeg"
      alt="Interior Design"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        display: 'block'
      }}
    />
  </div>
  <div className="why-img-border" />
  <div className="why-badge">
    <strong>500+</strong>Happy Clients<br />Across Varanasi
  </div>
</div>

      <div>
        <div className="section-tag reveal" ref={r2}>Why Choose Us</div>
        <h2 className="section-title reveal" ref={r3}>
          Crafting Spaces You'll<br /><em>Fall In Love With</em>
        </h2>
        <p style={{ fontSize: '.8rem', lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '2rem' }}>
          At Interior House, every project is treated as a masterpiece. Based in Chaukaghat, Jaitpura, Varanasi,
          we bring together creativity, quality materials, and skilled artisans to deliver interiors that exceed expectations.
        </p>
        <div className="why-features reveal" ref={r4}>
          {features.map(f => (
            <div className="why-feat" key={f.title}>
              <span className="why-feat-icon">{f.icon}</span>
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
