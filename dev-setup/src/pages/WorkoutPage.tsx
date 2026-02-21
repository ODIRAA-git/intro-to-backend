import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { workouts } from '../data/workouts'
import MovesAnimation from '../components/MovesAnimation'
import CardStack from '../components/CardStack'
import MoveCard from '../components/MoveCard'
import SampleProgram from '../components/SampleProgram'
import { getMoveGuide } from '../data/moveGuides'
import StepMedia from '../components/StepMedia'

export default function WorkoutPage() {
  const { id } = useParams()
  const workout = workouts.find((w) => w.id === id)
  const isFull = workout?.id && workout.id.includes('full-body')

  const [flexShowLoop, setFlexShowLoop] = useState(false)
  const [hiitShowLoop, setHiitShowLoop] = useState(false)
  useEffect(() => {
    if (id === 'flexibility') {
      setFlexShowLoop(false)
      const t = setTimeout(() => setFlexShowLoop(true), 3000)
      return () => clearTimeout(t)
    }
    setFlexShowLoop(false)
  }, [id])

  useEffect(() => {
    if (id === 'hiit') {
      setHiitShowLoop(false)
      const t = setTimeout(() => setHiitShowLoop(true), 3000)
      return () => clearTimeout(t)
    }
    setHiitShowLoop(false)
  }, [id])

  if (!workout) return <div className="not-found">Workout not found</div>
  const uniqueMoves = Array.from(new Map((workout.moves || []).map((m) => [m.id, m])).values())

  return (
    <div className="workout-page">
      <header className="workout-header">
        <h2>{workout.name}</h2>
        <p>{workout.longDescription ?? workout.description}</p>

        <div className="workout-meta">
          {workout.level && <div className="meta-item"><strong>Level:</strong> {workout.level}</div>}
          {workout.duration && <div className="meta-item"><strong>Duration:</strong> {workout.duration}</div>}
          {workout.equipment && <div className="meta-item"><strong>Equipment:</strong> {workout.equipment.join(', ')}</div>}
          {workout.tags && <div className="meta-item"><strong>Tags:</strong> {workout.tags.join(', ')}</div>}
        </div>
      </header>

      {workout.benefits && workout.benefits.length > 0 && (
        <section className="benefits-section program-section">
          <h2>Benefits</h2>
          <div className="benefits-body">
            <ul className="benefit-list">
              {workout.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
            </ul>
            {workout.id === 'flexibility' && (
              <div className="flex-benefit-image">
                <img src="/images/flex0.jpg" alt="Flex benefit" />
              </div>
            )}
            {/* Core benefit image removed to avoid duplication with main stage card stack */}
            {/* HIIT benefit image removed to avoid duplication with main stage card stack */}
          </div>
        </section>
      )}

      

      <section className="animation-row">
        {workout.id === 'upper-1' ? (
          <>
            <div className="animation-stage upper-stage">
              <CardStack images={[
                '/images/UpperBodyHypertrophyImage/UpperA.webp',
                '/images/UpperBodyHypertrophyImage/UpperB.webp',
                '/images/UpperBodyHypertrophyImage/UpperC.jpg',
                '/images/UpperBodyHypertrophyImage/UpperD.jpg',
                '/images/UpperBodyHypertrophyImage/UpperEjpg',
                '/images/UpperBodyHypertrophyImage/UpperF.webp',
              ]} intervalMs={5200} animDurationMs={900} />
            </div>
            <div className="move-list-panel">
              {uniqueMoves.slice(2).map((m) => (
                <MoveCard key={m.id} move={m} />
              ))}
            </div>
          </>
        ) : (
          <>
            {workout.id === 'hiit' && (
              <div className="animation-stage hiit-stage">
                <CardStack images={[
                  '/images/HIITImages/HIIT2.jpg',
                  '/images/HIITImages/HIIT3.avif',
                  '/images/HIITImages/HIITA.webp',
                  '/images/HIITImages/HIITB.jpg',
                  '/images/HIITImages/HIITC.avif',
                  '/images/HIITImages/HIITD.jpg',
                ]} intervalMs={5200} animDurationMs={900} />
              </div>
            )}
            {workout.id === 'flexibility' && (
              <div className="animation-stage flex-stage">
                <CardStack images={[
                  '/images/FlexImages/flex2.jpg',
                  '/images/FlexImages/flex3.jpg',
                  '/images/FlexImages/FlexA.jpg',
                  '/images/FlexImages/FlexB.png',
                  '/images/FlexImages/FlexC.jpeg',
                  '/images/FlexImages/FlexD.jpg',
                  '/images/FlexImages/FlexE.webp',
                  '/images/FlexImages/FlexF.jpg',
                ]} intervalMs={5200} animDurationMs={900} />
              </div>
            )}
            {workout.id && workout.id.includes('full-body') && (
              <div className="animation-stage fullbody-stage">
                <CardStack images={[
                  '/images/FullBodyImages/FullBA.webp',
                  '/images/FullB.gif',
                  '/images/FullBodyImages/FullBC.webp',
                  '/images/FullBodyImages/FullBD.avif',
                  '/images/FullBodyImages/FullBE.jpeg',
                  '/images/FullBodyImages/FullBF.webp',
                ]} intervalMs={5200} animDurationMs={900} />
              </div>
            )}
            {workout.id === 'core' && (
              <div className="animation-stage core-stage">
                <CardStack images={[
                  '/images/CoreImages/core1.webp',
                  '/images/CoreImages/CoreA.webp',
                  '/images/CoreImages/CoreC.webp',
                  '/images/CoreImages/CoreD.webp',
                  '/images/CoreImages/CoreE.webp',
                  '/images/CoreImages/CoreF.webp',
                ]} intervalMs={5200} animDurationMs={900} />
              </div>
            )}
            {workout.id !== 'hiit' && workout.id !== 'flexibility' && workout.id !== 'core' && (
              <MovesAnimation workoutId={workout.id} />
            )}
            <div className="move-list-panel">
              {uniqueMoves.map((m) => (
                <MoveCard key={m.id} move={m} />
              ))}
            </div>
          </>
        )}
      </section>

      <section className="program-section">
        <h2>How to perform (step-by-step)</h2>
        {workout.id === 'upper-1' && (
          <div className="program-row">
            <div className="program-loop-image">
              <img
                src="/images/UpperBGif.gif"
                alt="Upper body loop"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement
                  t.onerror = null
                  t.src = '/images/UpperBodyHypertrophyImage/UpperA.webp'
                }}
              />
            </div>
            <div className="howto-list">
                {uniqueMoves.map((m) => {
                const guide = getMoveGuide(m.id)
                return (
                  <div key={m.id} className="howto-card">
                    <h3>{m.name}</h3>
                    <p className="support">{m.description}</p>
                    {guide ? (
                      <div>
                        <ol>
                          {guide.steps.map((s, i) => (
                            <li key={i}>
                              <div className="step-row">
                                <div className="step-text">{s}</div>
                                <div className="step-action"><StepMedia moveId={m.id} stepIndex={i} /></div>
                              </div>
                            </li>
                          ))}
                        </ol>
                        {guide.reps && <p><strong>Reps & Sets:</strong> {guide.reps}</p>}
                        {guide.progressions && (
                          <div className="progressions">
                            <h4>Progressions</h4>
                            <ul>
                              {guide.progressions.map((p, idx) => (
                                <li key={idx}><strong>{p.level}:</strong> {p.description}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <p>Perform this movement with control. A general recommendation is <strong>3 sets × 8–12 reps</strong>, adjust based on goals.</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
        {isFull ? (
          <div className="program-row">
            <div className="program-loop-image">
              <img
                src="/images/FullB.gif"
                alt="Full body loop"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement
                  t.onerror = null
                  t.src = '/images/FullBodyImages/FullBA.webp'
                }}
              />
            </div>
              <div className="howto-list">
              {workout.id === 'hiit' && (!hiitShowLoop ? (
                <div className="hiit-step-image">
                  <img src="/images/HIIT2.jpg" alt="HIIT step" />
                </div>
              ) : (
                <div className="hiit-loop-image">
                  <img src="/images/HIITGif.webp" alt="HIIT loop" />
                </div>
              ))}
              {workout.id === 'flexibility' && (!flexShowLoop ? (
                <div className="flex-step-image">
                  <img src="/images/flex3.jpg" alt="Flex step" />
                </div>
              ) : (
                <div className="flex-loop-image">
                  <img src="/images/flex22.webp" alt="Flex loop" />
                </div>
              ))}
              {workout.id === 'core' && (
                <div className="core-step-image">
                  <img src="/images/core3.gif" alt="Core step" />
                </div>
              )}
                {uniqueMoves.map((m) => {
                const guide = getMoveGuide(m.id)
                return (
                  <div key={m.id} className="howto-card">
                    <h3>{m.name}</h3>
                    <p className="support">{m.description}</p>
                    {guide ? (
                      <div>
                        <ol>
                          {guide.steps.map((s, i) => (
                            <li key={i}>
                              <div className="step-row">
                                <div className="step-text">{s}</div>
                                <div className="step-action"><StepMedia moveId={m.id} stepIndex={i} /></div>
                              </div>
                            </li>
                          ))}
                        </ol>
                        {guide.reps && <p><strong>Reps & Sets:</strong> {guide.reps}</p>}
                        {guide.progressions && (
                          <div className="progressions">
                            <h4>Progressions</h4>
                            <ul>
                              {guide.progressions.map((p, idx) => (
                                <li key={idx}><strong>{p.level}:</strong> {p.description}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <p>Perform this movement with control. A general recommendation is <strong>3 sets × 8–12 reps</strong>, adjust based on goals.</p>
                      </div>
                    )}
                  </div>
                )
              })}
                </div>
          </div>
        ) : (
          <>
            {workout.id && workout.id.includes('full-body') && (
              <div className="program-loop-image">
                <img
                  src="/images/FullB.gif"
                  alt="Full body loop"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement
                    t.onerror = null
                    t.src = '/images/FullBodyImages/FullBA.webp'
                  }}
                />
              </div>
            )}
                <div className="howto-list">
              {workout.id === 'hiit' && (!hiitShowLoop ? (
                <div className="hiit-step-image">
                  <img src="/images/HIIT2.jpg" alt="HIIT step" />
                </div>
              ) : (
                <div className="hiit-loop-image">
                  <img src="/images/HIITGif.webp" alt="HIIT loop" />
                </div>
              ))}
              {workout.id === 'flexibility' && (!flexShowLoop ? (
                <div className="flex-step-image">
                  <img src="/images/flex3.jpg" alt="Flex step" />
                </div>
              ) : (
                <div className="flex-loop-image">
                  <img src="/images/flex22.webp" alt="Flex loop" />
                </div>
              ))}
              {workout.id === 'core' && (
                <div className="core-step-image">
                  <img src="/images/core3.gif" alt="Core step" />
                </div>
              )}
                {uniqueMoves.map((m) => {
                const guide = getMoveGuide(m.id)
                return (
                  <div key={m.id} className="howto-card">
                    <h3>{m.name}</h3>
                    <p className="support">{m.description}</p>
                    {guide ? (
                      <div>
                        <ol>
                          {guide.steps.map((s, i) => (
                            <li key={i}>
                              <div className="step-row">
                                <div className="step-text">{s}</div>
                                <div className="step-action"><StepMedia moveId={m.id} stepIndex={i} /></div>
                              </div>
                            </li>
                          ))}
                        </ol>
                        {guide.reps && <p><strong>Reps & Sets:</strong> {guide.reps}</p>}
                        {guide.progressions && (
                          <div className="progressions">
                            <h4>Progressions</h4>
                            <ul>
                              {guide.progressions.map((p, idx) => (
                                <li key={idx}><strong>{p.level}:</strong> {p.description}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <p>Perform this movement with control. A general recommendation is <strong>3 sets × 8–12 reps</strong>, adjust based on goals.</p>
                      </div>
                    )}
                  </div>
                )
              })}
                </div>
          </>
        )}
      </section>

      {/* Always render a sample-program section so dropdown pages are consistent.
          Use provided sampleProgram when available, otherwise generate a small fallback program. */}
      <section className="program-section">
        <SampleProgram program={workout.sampleProgram ?? (
          // fallback program: up to 3 days built from available moves or generic placeholders
          (function() {
            const moves = workout.moves || []
            const exercises = moves.length > 0 ? moves.slice(0,6).map(m => m.name) : ['Bodyweight Squats', 'Push-ups', 'Plank']
            return [
              { day: 'Day 1', focus: workout.name + ' — Session A', exercises: exercises.slice(0,3) },
              { day: 'Day 2', focus: workout.name + ' — Session B', exercises: exercises.slice(3) || exercises.slice(0,3) }
            ]
          })()
        )} />
      </section>

      
    </div>
  )
}
