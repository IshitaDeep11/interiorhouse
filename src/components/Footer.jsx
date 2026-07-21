export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-logo">
        <img src="/images/IH_Logo.webp" alt="Interior House Logo" />
         </div>
        <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Interior House. All Rights Reserved.</p>

        <p className="designer-credit">
       Designed &amp; Managed by <strong>Ishita Deep</strong>
       </p>
        </div>
        <div className="footer-socials">
          <a href="https://wa.me/917905039920" className="social-btn" target="_blank" rel="noreferrer">💬</a>
          <a href="tel:+917905039920" className="social-btn">📞</a>
          <a href="https://www.instagram.com/interiorhouse.co.in/" className="social-btn" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" style={{color: '#ce2f2f'}}></i></a>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/917905039920?text=Hi%2C%20I%20am%20interested%20in%20your%20interior%20design%20services."
        className="wa-btn"
        target="_blank"
        rel="noreferrer"
      >
        💬
      </a>
    </>
  )
}
