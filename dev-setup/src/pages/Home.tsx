import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import { genderGuides } from '../data/genderGuides'

export default function Home() {
  return (
    <div className="home-page">
      <Hero />

      <section id="benefits" className="benefits">
        <h2>Why stay active?</h2>
        <div className="benefit-grid">
          <div className="benefit-card">
            <h3>Physical Health</h3>
            <p>Regular training improves strength, mobility and cardiovascular health.</p>
          </div>
          <div className="benefit-card">
            <h3>Mental Wellbeing</h3>
            <p>Exercise reduces stress and improves focus and sleep quality.</p>
          </div>
          <div className="benefit-card">
            <h3>Longevity</h3>
            <p>Consistent movement supports joint health and metabolic resilience.</p>
          </div>
        </div>
      </section>

      <section id="explore" className="workouts-preview">
        <h2>Why different workouts by gender?</h2>
        <p>
          Training principles apply to everyone, but program emphasis can vary based on goals, hormonal differences,
          movement preferences, and injury risk. Below are entry points tailored to common goals — pick the one that
          reflects you best and explore tailored guidance.
        </p>

        <div className="workout-grid">
          {genderGuides.map((g) => {
            const imgSrc = g.id === 'female' ? '/images/female1.avif' : g.id === 'male' ? '/images/male1.jpg' : '/images/nonBinary.jpg'
            return (
              <Link key={g.id} to={`/gender/${g.id}`} className="workout-preview media-card">
                <div className="preview-thumb media-thumb" aria-hidden>
                  <img src={imgSrc} alt={g.title} />
                </div>
                <div className="preview-body media-body">
                  <h3>{g.title}</h3>
                  <p className="support">{g.intro}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="about" className="about">
        <h2>About this app</h2>
        <p>This frontend demonstrates workouts and animated move examples. Backend support (Node + MongoDB) to provide persistence and user data.</p>
      </section>
    </div>
  )
}
