import React from 'react'
import type { Move } from '../data/workouts'

type Props = { move: Move }

export default function MoveCard({ move }: Props) {
  return (
    <article className="move-card">
      <h3>{move.name}</h3>
      <p className="move-desc">{move.description}</p>
      {move.benefits && (
        <ul className="move-benefits">
          {move.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      {move.tips && <p className="move-tips"><strong>Tips:</strong> {move.tips}</p>}
    </article>
  )
}
