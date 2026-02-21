import React from 'react'
import type { Workout } from '../data/workouts'
import MoveCard from './MoveCard'

type Props = { workout: Workout }

export default function WorkoutDetail({ workout }: Props) {
  return (
    <div className="workout-detail">
      <h2>{workout.name}</h2>
      <p className="workout-long">{workout.longDescription ?? workout.description}</p>
      <section className="moves">
        {workout.moves.map((m) => (
          <MoveCard key={m.id} move={m} />
        ))}
      </section>
    </div>
  )
}
