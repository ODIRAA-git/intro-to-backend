import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getGuide } from '../data/genderGuides'

export default function GenderPage() {
  const { id } = useParams()
  const guide = id ? getGuide(id) : undefined

  if (!guide) {
    return (
      <section>
        <h2>Guide not found</h2>
        <p>Choose a guide from the home page.</p>
      </section>
    )
  }

  return (
    <div className="gender-page workout-page">
      <section className="workout-header">
        <h1>{guide.title}</h1>
        <p>{guide.intro}</p>
        <div className="workout-meta">
          <div className="meta-item">Recommended types: {guide.suitableFor.join(', ')}</div>
        </div>
      </section>

      <section className="program-section">
        <h2>Recommended Workouts</h2>
        <div className="sample-program">
          <div className="workout-grid">
            {guide.recommendedWorkouts && guide.recommendedWorkouts.length > 0 ? (
              guide.recommendedWorkouts.map((id) => (
                <Link key={id} to={`/workouts/${id}`} className="workout-preview">
                  <div className="preview-thumb" aria-hidden />
                  <div className="preview-body">
                    <h3>{id.replace(/[-]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</h3>
                  </div>
                </Link>
              ))
            ) : (
              <p>No specific workouts listed — explore the dropdown for types.</p>
            )}
          </div>
        </div>
      </section>

      <section className="program-section">
        <h2>Notes</h2>
        <div className="sample-program">
          <ul>
            {guide.notes?.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="program-section">
        <h2>Next Steps</h2>
        <div className="sample-program">
          <p>
            For in-depth exercise types, open the <strong>Workouts</strong> dropdown in the navigation and select a
            workout type you want to explore (e.g., Strength Training, HIIT, Yoga). The dropdown contains comprehensive
            pages for each workout category.
          </p>
        </div>
      </section>
    </div>
  )
}
