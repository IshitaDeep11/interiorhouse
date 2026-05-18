import { useReveal } from '../useReveal'

const testimonials = [
  { initial: 'R', name: 'Rahul Gupta', city: 'Varanasi', text: 'Interior House completely transformed our drawing room. The false ceiling with LED lighting is just stunning. Excellent work and delivered on time. Highly recommended!' },
  { initial: 'P', name: 'Priya Singh', city: 'Varanasi', text: 'Got my modular kitchen done from them. The quality of materials and finish is superb. Very professional team and transparent pricing. Will definitely hire again!' },
  { initial: 'A', name: 'Amit Sharma', city: 'Jaitpura, Varanasi', text: 'Amazing TV unit and wooden work. The team was very professional and cleaned up after work daily. My home looks like a 5-star hotel now. Thank you Interior House!' },
]

export default function Testimonials() {
  const r1 = useReveal()
  const r2 = useReveal()

  return (
    <section id="testimonials" className="testi-section">
      <div className="reveal" ref={r1} style={{ textAlign: 'center' }}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>Client Reviews</div>
        <h2 className="section-title">What Our Clients <em>Say</em></h2>
      </div>
      <div className="testi-grid reveal" ref={r2}>
        {testimonials.map(t => (
          <div className="testi-card" key={t.name}>
            <div className="testi-quote">"</div>
            <p className="testi-text">{t.text}</p>
            <div className="testi-author">
              <div className="testi-avatar">{t.initial}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-city">{t.city}</div>
                <div className="testi-stars">★★★★★</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
