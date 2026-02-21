import React, { useEffect, useState } from 'react'

type Props = {
  images: string[]
  intervalMs?: number
  animDurationMs?: number
}

export default function CardStack({ images, intervalMs = 5200, animDurationMs = 900 }: Props) {
  const n = images.length
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (n <= 1) return
    const t = setInterval(() => setIndex((i) => (i + 1) % n), intervalMs)
    return () => clearInterval(t)
  }, [n, intervalMs])

  return (
    <div className="card-stack" aria-hidden={false}>
      {images.map((img, i) => {
        // distance from current front card, 0 is front
        const dist = (i - index + n) % n
        const z = n - dist
        // straight vertical offset for stacked look (no slant, no scale)
        const offsetY = dist * 12

        const baseStyle: React.CSSProperties = {
          zIndex: z,
          transform: `translate(-50%, -50%) translateY(${offsetY}px)`,
        }

        // front card gets the slide-up animation; others sit behind
        if (dist === 0) {
          return (
            <div
              key={img}
              className={`card front`}
              style={{
                ...baseStyle,
                animationDuration: `${animDurationMs}ms`,
              }}
            >
              <img src={img} alt={`card-${i}`} />
            </div>
          )
        }

        return (
          <div key={img} className="card back" style={baseStyle}>
            <img src={img} alt={`card-${i}`} />
          </div>
        )
      })}
    </div>
  )
}
