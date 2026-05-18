import { useReveal } from '../useReveal'

const steps = [
  { num: '01', title: 'Consultation', desc: 'Free site visit to understand your space, vision, and budget. We listen before we design.' },
  { num: '02', title: 'Design & Planning', desc: 'Our team creates detailed 3D designs and material samples for your approval.' },
  { num: '03', title: 'Execution', desc: 'Skilled craftsmen execute the project with precision, using premium materials.' },
  { num: '04', title: 'Handover', desc: 'We deliver on time, do a final walkthrough, and ensure 100% satisfaction.' },
]

export default function Process() {
  const r1 = useReveal()
  const r2 = useReveal()

  return (
    <section id="process" className="process-section">
      <div className="reveal" ref={r1} style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 1rem' }}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>How We Work</div>
        <h2 className="section-title">Our Simple <em>4-Step Process</em></h2>
      </div>
      <div className="process-steps reveal" ref={r2}>
        {steps.map(s => (
          <div className="step" key={s.num}>
            <div className="step-num">{s.num}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
