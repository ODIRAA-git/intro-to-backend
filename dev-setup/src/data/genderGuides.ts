export type GenderGuide = {
  id: string
  title: string
  intro: string
  suitableFor: string[]
  recommendedWorkouts?: string[]
  notes?: string[]
}

export const genderGuides: GenderGuide[] = [
  {
    id: 'male',
    title: 'Workouts for Men',
    intro: 'While many principles of training are universal, some programs emphasize goals more common among men such as hypertrophy-focused strength cycles and heavier compound lifts. This guide highlights workout styles and considerations commonly suitable.',
    suitableFor: ['Strength training', 'Power & explosive training', 'Calisthenics', 'HIIT', 'Functional training'],
    recommendedWorkouts: ['strength-training','power','calisthenics','hiit'],
    notes: ['Focus on progressive overload and adequate recovery', 'Prioritize compound lifts, balanced accessory work, and mobility']
  },
  {
    id: 'female',
    title: 'Workouts for Women',
    intro: 'Women benefit from a wide variety of training styles. Programming often emphasizes lower-body strength, metabolic conditioning, and injury-preventive mobility work, while still using progressive overload for strength and hypertrophy.',
    suitableFor: ['Strength training', 'Cardio & endurance', 'Functional training', 'Pilates', 'HIIT'],
    recommendedWorkouts: ['strength-training','cardio','functional','pilates','hiit'],
    notes: ['Include posterior chain strength work, pelvic-floor aware programming if needed', 'Balance conditioning and strength sessions']
  },
  {
    id: 'nonbinary',
    title: 'Workouts for Non-binary & All Genders',
    intro: 'Training should reflect goals and preferences rather than assigned gender. This guide highlights adaptable training approaches useful for non-binary and all-gender athletes.',
    suitableFor: ['Calisthenics', 'Strength training', 'Cardio', 'Mobility & recovery', 'Sport-specific work'],
    recommendedWorkouts: ['calisthenics','strength-training','cardio','flexibility','sport-specific'],
    notes: ['Customize volume and intensity to individual recovery and goals', 'Use movement patterns and modalities you enjoy']
  }
]

export function getGuide(id: string) {
  return genderGuides.find((g) => g.id === id)
}
