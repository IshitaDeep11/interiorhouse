import { useState } from 'react'
import { useReveal } from '../useReveal'

const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.0847355725477!2d83.00123757567847!3d25.334937477622507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2f4115a5b295%3A0x5de00536e38bb3b3!2sINTERIOR%20HOUSE!5e0!3m2!1sen!2sin!4v1777697916683!5m2!1sen!2sin"

export default function Contact() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()

  const [form, setForm] = useState({ name:'', phone:'', email:'', service:'', budget:'', address:'', message:'' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    const payload = {
      access_key: "YOUR_WEB3FORMS_KEY", // 🔑 Replace with key from https://web3forms.com
      subject: `🏠 New Interior Enquiry from ${form.name} — ${form.service}`,
      from_name: "Interior House Website",
      replyto: form.email,
      message: `
NEW ENQUIRY — INTERIOR HOUSE WEBSITE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name:     ${form.name}
📞 Phone:    ${form.phone}
📧 Email:    ${form.email}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔨 Service:  ${form.service}
💰 Budget:   ${form.budget}
📍 Address:  ${form.address}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 Message:
${form.message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`.trim()
    }
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name:'', phone:'', email:'', service:'', budget:'', address:'', message:'' })
      } else throw new Error()
    } catch {
      setStatus('error')
    }
  }

  const waText = encodeURIComponent(`Hi Interior House! 🏠\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage: ${form.message}`)

  return (
    <section id="contact" className="contact-section">
      <div className="reveal" ref={r1} style={{ textAlign:'center', maxWidth:600, margin:'0 auto 1rem' }}>
        <div className="section-tag" style={{ justifyContent:'center' }}>Get In Touch</div>
        <h2 className="section-title">Start Your <em>Dream Project</em></h2>
        <p style={{ fontSize:'.8rem', color:'var(--text-muted)', lineHeight:1.9 }}>
          Fill the form below and our design expert will contact you within 24 hours. Site visit is absolutely FREE.
        </p>
      </div>

      <div className="contact-wrap">
        {/* LEFT COLUMN — info + map */}
        <div className="contact-info reveal" ref={r2}>
          <h3>
            Let's Create Something<br />
            <em style={{ color:'var(--gold)', fontFamily:"'Cormorant Garamond', serif" }}>Beautiful Together</em>
          </h3>
          <p>We're based in Chaukaghat, Jaitpura, Varanasi and serve clients across the city and nearby areas. Reach out — we'd love to hear about your space.</p>

          <div className="contact-items">
            <div className="contact-item">
              <div className="ci-icon">📍</div>
              <div><div className="ci-label">Location</div><div className="ci-value">Chaukaghat, Jaitpura, Varanasi, UP</div></div>
            </div>
            <div className="contact-item">
              <div className="ci-icon">📞</div>
              <div><div className="ci-label">Phone / WhatsApp</div><div className="ci-value"><a href="tel:+917905039920">+91 7905039920</a></div></div>
            </div>
            <div className="contact-item">
              <div className="ci-icon">📸</div>
              <div><div className="ci-label">Instagram</div><div className="ci-value"><a href="https://instagram.com/interiorhouse" target="_blank" rel="noreferrer">@interiorhouse</a></div></div>
            </div>
            <div className="contact-item">
              <div className="ci-icon">🕐</div>
              <div><div className="ci-label">Working Hours</div><div className="ci-value">Mon – Sat: 9:00 AM – 7:00 PM</div></div>
            </div>
          </div>

          {/* MAP — inside left column, below contact items */}
          <div className="map-wrap">
            <div className="map-label">Find Us Here</div>
            <div className="map-container">
              <iframe
                src={MAP_SRC}
                title="Interior House Location"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="map-btns">
              <a className="map-btn-gold" href="https://maps.app.goo.gl/9B3Wwg5os5FhjuQr9" target="_blank" rel="noreferrer">
                📍 Open in Google Maps →
              </a>
              <a className="map-btn-white" href="https://wa.me/917905039920?text=Hi%2C+I+need+directions+to+your+showroom" target="_blank" rel="noreferrer">
                💬 WhatsApp for Directions
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — form */}
        <div className="contact-form reveal" ref={r3}>
          <div className="form-title">Request a Free Quote</div>
          <div className="form-subtitle">We'll get back to you within 24 hours · Free Site Visit Included</div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Rahul Gupta" required />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="rahul@example.com" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Service Required *</label>
                <select name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select Service</option>
                  <option>False Ceiling (PVC/POP/Gypsum)</option>
                  <option>Modular Kitchen</option>
                  <option>TV Unit / Wall Design</option>
                  <option>Wooden Work & Louvers</option>
                  <option>Wallpaper & Wall Panels</option>
                  <option>Flooring & Texture Painting</option>
                  <option>ACP & Glass Work</option>
                  <option>Sofa Repairing & Modern Bed</option>
                  <option>Complete Home Interior</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Budget Range</label>
                <select name="budget" value={form.budget} onChange={handleChange}>
                  <option value="">Select Budget</option>
                  <option>Under ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000 – ₹3,00,000</option>
                  <option>₹3,00,000 – ₹5,00,000</option>
                  <option>Above ₹5,00,000</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Your Address / Area in Varanasi</label>
              <input name="address" value={form.address} onChange={handleChange} placeholder="e.g. Sigra, Lanka, BHU Road..." />
            </div>

            <div className="form-group">
              <label>Tell Us About Your Project</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Describe your space and what you'd like to achieve..." />
            </div>

            <button type="submit" className="form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Enquiry — Get Free Quote'}
            </button>

            {status === 'success' && (
              <div className="form-msg success">✅ Enquiry sent! We will contact you within 24 hours.</div>
            )}
            {status === 'error' && (
              <div className="form-msg error">
                ⚠️ Could not send email.{' '}
                <a href={`https://wa.me/917905039920?text=${waText}`} target="_blank" rel="noreferrer" style={{ color:'var(--gold)' }}>
                  Send via WhatsApp instead →
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
