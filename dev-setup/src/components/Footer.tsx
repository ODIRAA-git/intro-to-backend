import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()

  function goHomeTop() {
    navigate('/')
    // smooth scroll to top after route change
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)
  }

  return (
    <footer className="site-footer modern">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand">Fitness<span className="accent">Moves</span></div>
          <p className="imprint">Fitness Moves Ltd. — 123 Fit St, Sport City</p>
        </div>

        <div className="footer-nav">
          <button className="btn-link" onClick={goHomeTop}>Home (Top)</button>
          <Link to="/">Workouts</Link>
          <a href="#benefits">Benefits</a>
          <a href="#about">About</a>
        </div>

        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.63.28-1.3.48-2 .57.72-.43 1.27-1.12 1.53-1.94-.67.4-1.42.69-2.22.85A3.52 3.52 0 0 0 16.5 4c-1.95 0-3.53 1.6-3.53 3.57 0 .28.03.55.09.82C9.7 8.24 6.5 6.5 4.39 3.9c-.31.53-.48 1.15-.48 1.81 0 1.24.63 2.34 1.6 2.98-.59-.02-1.15-.18-1.63-.45v.05c0 1.74 1.22 3.19 2.85 3.52-.3.08-.61.12-.93.12-.23 0-.46-.02-.68-.06.46 1.43 1.8 2.48 3.39 2.51A7.06 7.06 0 0 1 2 19.54 9.96 9.96 0 0 0 7.29 21c6.5 0 10.07-5.59 10.07-10.44v-.48c.7-.48 1.3-1.09 1.77-1.78-.64.28-1.32.47-2.03.56z" fill="currentColor"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.3A4.7 4.7 0 1 0 16.7 13 4.7 4.7 0 0 0 12 8.3zm5.2-3.4a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z" fill="currentColor"/></svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.8 8s-.2-1.6-.8-2.3c-.7-.9-1.5-.9-1.9-1-2.7-.2-6.8-.2-6.8-.2h-.1s-4.1 0-6.8.2c-.4.1-1.2.1-1.9 1C2.4 6.4 2.2 8 2.2 8S2 9.8 2 11.6v.8c0 1.8.2 3.6.2 3.6s.2 1.6.8 2.3c.7.9 1.7.9 2.2 1 1.6.1 6.8.2 6.8.2s4.1 0 6.8-.2c.4-.1 1.2-.1 1.9-1 .6-.7.8-2.3.8-2.3s.2-1.8.2-3.6v-.8c0-1.8-.2-3.6-.2-3.6zM10 14.8V8.8l5.2 3z" fill="currentColor"/></svg>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Fitness Moves — All rights reserved</div>
        <div className="legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Imprint</a>
        </div>
      </div>
    </footer>
  )
}
