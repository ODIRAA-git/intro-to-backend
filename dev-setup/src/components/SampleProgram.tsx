import React from 'react'

type Program = { day: string; focus: string; exercises: string[] }

export default function SampleProgram({ program }: { program: Program[] }) {
  return (
    <div className="sample-program">
      <h3>Sample Program</h3>
      <div className="program-grid">
        {program.map((p) => (
          <div className="program-day" key={p.day}>
            <h4>{p.day} — {p.focus}</h4>
            <ul>
              {p.exercises.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
