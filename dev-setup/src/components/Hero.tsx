import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Learn, Practice, and Master Fitness Moves</h1>
        <p>Interactive demonstrations, clear tips, and animated examples to help you perform each movement safely and effectively.</p>
        <div className="hero-ctas">
          <a href="#explore" className="btn primary">Get Started</a>
          <a href="#benefits" className="btn secondary">Why it matters</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-visual">
          <div className="hero-logo-circle">
            <img src="/images/logo.png" alt="App logo" />
          </div>
          <svg viewBox="0 0 200 200" className="hero-svg" aria-hidden>
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#60a5fa" />
                <stop offset="1" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="80" fill="url(#g1)" opacity="0.12" />
            <g transform="translate(40,30)">
              <rect x="0" y="80" width="24" height="40" rx="4" fill="#fff" opacity="0.12" />
              <rect x="40" y="40" width="24" height="80" rx="4" fill="#fff" opacity="0.12" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
