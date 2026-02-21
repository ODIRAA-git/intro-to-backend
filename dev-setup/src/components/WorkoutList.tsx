import React from 'react'
import type { Workout } from '../data/workouts'

type Props = {
  workouts: Workout[]
  selectedId: string | null
  onSelect: (id: string) => void
}

export default function WorkoutList({ workouts, selectedId, onSelect }: Props) {
  return (
    <div className="workout-list">
      {workouts.map((w) => (
        <button
          key={w.id}
          className={"workout-item " + (w.id === selectedId ? 'active' : '')}
          onClick={() => onSelect(w.id)}
        >
          <div className="workout-title">{w.name}</div>
          <div className="workout-desc">{w.description}</div>
        </button>
      ))}
    </div>
  )
}
