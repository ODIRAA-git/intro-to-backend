export type Move = {
  id: string
  name: string
  description: string
  benefits?: string[]
  tips?: string
}

export type Workout = {
  id: string
  name: string
  description: string
  longDescription?: string
  moves: Move[]
  level?: 'Beginner' | 'Intermediate' | 'Advanced'
  duration?: string
  equipment?: string[]
  tags?: string[]
  sampleProgram?: Array<{ day: string; focus: string; exercises: string[] }>
  benefits?: string[]
  howTo?: string[]
  goals?: string[]
  types?: string[]
  examples?: string[]
  keyExercises?: string[]
}

export const workouts: Workout[] = [
  {
    id: 'full-body-1',
    name: 'Full Body Strength',
    description: 'Compound movements for strength and muscle',
    longDescription: 'A balanced full-body routine focused on major compound lifts and mobility.',
    level: 'Intermediate',
    duration: '50-75 min',
    equipment: ['Barbell', 'Squat Rack', 'Plates', 'Bench'],
    tags: ['strength', 'compound', 'mobility'],
    benefits: ['Builds full-body strength', 'Improves compound movement efficiency', 'Enhances mobility and stability'],
    sampleProgram: [
      { day: 'Day 1', focus: 'Strength', exercises: ['Back Squat 5x5', 'Bench Press 5x5', 'Barbell Row 4x8'] },
      { day: 'Day 3', focus: 'Deadlift Focus', exercises: ['Deadlift 5x3', 'Pull-ups 4x6-8', 'Accessory: Hamstring Curls'] },
      { day: 'Day 5', focus: 'Power + Mobility', exercises: ['Push Press 5x3', 'Front Squat 4x6', 'Mobility circuit'] }
    ],
    moves: [
      {
        id: 'back-squat',
        name: 'Back Squat',
        description: 'Compound lower-body movement targeting quads, glutes, and core.',
        benefits: ['Builds lower-body strength', 'Improves mobility'],
        tips: 'Keep chest up, drive through heels.'
      },
      {
        id: 'deadlift',
        name: 'Deadlift',
        description: 'Hip-hinge movement for posterior chain strength.',
        benefits: ['Strengthens hamstrings and back', 'Improves posture'],
        tips: 'Hinge at hips and keep a neutral spine.'
      },
      {
        id: 'push-press',
        name: 'Push Press',
        description: 'Shoulder press with leg drive to move heavier loads.',
        benefits: ['Builds overhead strength', 'Power development'],
        tips: 'Use a quick dip-drive and lock out overhead.'
      }
    ]
  },
  {
    id: 'upper-1',
    name: 'Upper Body Hypertrophy',
    description: 'Volume-focused upper body session',
    level: 'Beginner',
    duration: '40-60 min',
    equipment: ['Dumbbells', 'Bench', 'Resistance Band'],
    tags: ['hypertrophy', 'upper-body', 'volume'],
    benefits: ['Builds chest and back muscle', 'Increases upper-body volume and time-under-tension', 'Improves muscle symmetry and shoulder health'],
    sampleProgram: [
      { day: 'Day A', focus: 'Chest & Back', exercises: ['Bench Press 4x8-10', 'Incline DB Press 3x10', 'Barbell Row 4x8'] },
      { day: 'Day B', focus: 'Shoulders & Arms', exercises: ['Overhead Press 4x8', 'Lateral Raises 3x12', 'Triceps Dips 3x12'] }
    ],
    moves: [
      {
        id: 'bench-press',
        name: 'Bench Press',
        description: 'Primary horizontal pressing movement.',
        benefits: ['Builds chest, triceps, shoulders'],
        tips: 'Keep shoulder blades retracted.'
      },
      {
        id: 'barbell-row',
        name: 'Barbell Row',
        description: 'Horizontal pull to develop the back.',
        benefits: ['Improves back thickness', 'Balances pressing strength']
      }
    ]
  }
  ,
  {
    id: 'strength-training',
    name: 'Strength Training (Resistance Training)',
    description: 'Exercises that work muscles against resistance (weights, bands, bodyweight).',
    longDescription: 'Progressive resistance training to build muscle, strength and bone density.',
    benefits: ['Builds muscle', 'Increases strength', 'Improves metabolism', 'Improves bone density'],
    howTo: ['Controlled movements', '6–15 reps per set', 'Progressive overload over time'],
    goals: ['Muscle gain', 'Fat loss', 'Toning', 'Strength'],
    types: ['Bodyweight', 'Free weights', 'Machines', 'Resistance bands'],
    keyExercises: ['Squats', 'Deadlifts', 'Bench Press', 'Rows', 'Lunges'],
    tags: ['strength'],
    moves: [
      { id: 'sq', name: 'Squat', description: 'Fundamental lower-body compound movement.' },
      { id: 'dl', name: 'Deadlift', description: 'Posterior chain strength builder.' },
      { id: 'bp', name: 'Bench Press', description: 'Primary horizontal pressing movement.' }
    ]
  },
  {
    id: 'cardio',
    name: 'Cardio (Aerobic Training)',
    description: 'Continuous movement that increases heart rate for sustained periods.',
    benefits: ['Improves heart & lung health', 'Burns calories', 'Increases endurance', 'Reduces stress'],
    howTo: ['Sustained effort', 'Moderate intensity', '20–60 minutes sessions'],
    goals: ['Fat loss', 'Endurance', 'Heart health'],
    types: ['Walking', 'Running', 'Cycling', 'Swimming', 'Rowing'],
    keyExercises: ['Running', 'Cycling', 'Rowing'],
    tags: ['cardio'],
    moves: [
      { id: 'run', name: 'Running', description: 'Sustained pace running for cardiovascular fitness.' },
      { id: 'cycle', name: 'Cycling', description: 'Low-impact cardio with variable intensity.' }
    ]
  },
  {
    id: 'hiit',
    name: 'HIIT (High-Intensity Interval Training)',
    description: 'Short bursts of intense exercise followed by brief rest.',
    benefits: ['Burns fat fast', 'Improves cardiovascular fitness', 'Time-efficient'],
    howTo: ['20–40s work', '10–30s rest', '10–30 minutes total'],
    goals: ['Fat loss', 'Conditioning', 'Time-efficient workouts'],
    examples: ['Burpees', 'Sprint intervals', 'Jump squats', 'Mountain climbers'],
    tags: ['hiit'],
    moves: [
      { id: 'burpee', name: 'Burpee', description: 'Full-body plyometric movement.' },
      { id: 'sprint', name: 'Sprint Interval', description: 'Short max-effort sprints.' }
    ]
  },
  {
    id: 'flexibility',
    name: 'Flexibility & Mobility Training',
    description: 'Exercises that improve joint range of motion and muscle elasticity.',
    benefits: ['Reduces injury risk', 'Improves posture', 'Improves recovery'],
    howTo: ['Slow controlled movements', 'Hold stretches 15–60s', 'Include dynamic mobility drills'],
    goals: ['Recovery', 'Pain prevention', 'Mobility'],
    types: ['Static stretching', 'Dynamic stretching', 'Mobility drills'],
    tags: ['mobility'],
    moves: [
      { id: 'ham-stretch', name: 'Hamstring Stretch', description: 'Static stretch targeting hamstrings.' },
      { id: 'thoracic-rotation', name: 'Thoracic Rotation', description: 'Mobility drill for upper back.' }
    ]
  },
  {
    id: 'yoga',
    name: 'Yoga',
    description: 'Mind-body practice combining poses, breathing, and balance.',
    benefits: ['Flexibility', 'Core strength', 'Stress reduction', 'Balance'],
    howTo: ['Controlled poses', 'Focused breathing', 'Flow or hold depending on type'],
    types: ['Hatha', 'Vinyasa', 'Power', 'Restorative'],
    goals: ['Flexibility', 'Stress relief', 'Mobility'],
    tags: ['yoga'],
    moves: [
      { id: 'downward-dog', name: 'Downward Dog', description: 'Full-body lengthening pose.' },
      { id: 'warrior', name: 'Warrior II', description: 'Standing strength and balance pose.' }
    ]
  },
  {
    id: 'pilates',
    name: 'Pilates',
    description: 'Low-impact training focused on core strength and posture.',
    benefits: ['Strong core', 'Better posture', 'Controlled activation'],
    howTo: ['Slow, precise movements', 'Emphasis on breathing and control'],
    goals: ['Core strength', 'Rehab', 'Posture'],
    tags: ['pilates'],
    moves: [
      { id: 'pilates-roll', name: 'Roll-Up', description: 'Core articulation movement.' },
      { id: 'pilates-plank', name: 'Pilates Plank', description: 'Core stabilization.' }
    ]
  },
  {
    id: 'functional',
    name: 'Functional Training',
    description: 'Exercises that mimic everyday movements for practical strength.',
    benefits: ['Improves real-life strength', 'Balance', 'Coordination'],
    howTo: ['Multi-joint movements', 'Often bodyweight or light weights'],
    examples: ['Squat-to-press', 'Farmer\'s carry', 'Step-ups'],
    tags: ['functional'],
    moves: [
      { id: 'farmers-carry', name: 'Farmer\'s Carry', description: 'Loaded carry for core and grip.' },
      { id: 'step-up', name: 'Step-up', description: 'Single-leg functional strength.' }
    ]
  },
  {
    id: 'calisthenics',
    name: 'Calisthenics',
    description: 'Bodyweight-based strength training.',
    benefits: ['Strength without equipment', 'Body control', 'Athleticism'],
    howTo: ['Progressive difficulty', 'Master form before reps'],
    examples: ['Push-ups', 'Pull-ups', 'Dips', 'Muscle-ups'],
    tags: ['calisthenics'],
    moves: [
      { id: 'pull-up', name: 'Pull-up', description: 'Upper-body pulling strength.' },
      { id: 'dip', name: 'Dip', description: 'Upper-body pressing using bodyweight.' }
    ]
  },
  {
    id: 'power',
    name: 'Power & Explosive Training',
    description: 'Training focused on explosive force and speed.',
    benefits: ['Improves athletic performance', 'Develops explosive strength'],
    howTo: ['Short explosive reps', 'Full recovery between sets'],
    examples: ['Box jumps', 'Olympic lifts', 'Plyometrics'],
    tags: ['power'],
    moves: [
      { id: 'box-jump', name: 'Box Jump', description: 'Plyometric jumping for power.' },
      { id: 'power-clean', name: 'Power Clean', description: 'Olympic-style explosive lift.' }
    ]
  },
  {
    id: 'endurance',
    name: 'Endurance Training',
    description: 'Training to sustain effort for long durations.',
    benefits: ['Cardiovascular endurance', 'Mental toughness'],
    howTo: ['Long-duration sessions', 'Steady pace'],
    examples: ['Long-distance running', 'Cycling', 'Swimming'],
    tags: ['endurance'],
    moves: [
      { id: 'long-run', name: 'Long Run', description: 'Sustained steady-state running.' }
    ]
  },
  {
    id: 'core',
    name: 'Core Training',
    description: 'Focused training on abdominal and trunk muscles.',
    benefits: ['Stability', 'Injury prevention', 'Better posture'],
    howTo: ['Controlled core exercises', 'Mix anti-flexion, anti-rotation and anti-extension'],
    examples: ['Planks', 'Russian twists', 'Leg raises'],
    tags: ['core'],
    moves: [
      { id: 'plank', name: 'Plank', description: 'Isometric core hold.' },
      { id: 'leg-raise', name: 'Leg Raise', description: 'Lower abdominal strength.' }
    ]
  },
  {
    id: 'recovery',
    name: 'Recovery & Regeneration',
    description: 'Low-intensity sessions to promote recovery.',
    benefits: ['Faster recovery', 'Reduced soreness', 'Nervous system reset'],
    howTo: ['Low-intensity movement', 'Foam rolling and light stretching'],
    types: ['Foam rolling', 'Light yoga', 'Breathing exercises'],
    tags: ['recovery'],
    moves: [
      { id: 'foam-roll', name: 'Foam Rolling', description: 'Self-myofascial release.' },
      { id: 'light-yoga', name: 'Light Yoga', description: 'Gentle mobility and breathing.' }
    ]
  },
  {
    id: 'sport-specific',
    name: 'Sport-Specific Training',
    description: 'Training tailored to the demands of a particular sport.',
    benefits: ['Improves sport skills', 'Specific conditioning'],
    examples: ['Soccer conditioning', 'Basketball agility', 'Boxing drills'],
    tags: ['sport'],
    moves: [
      { id: 'agility-ladder', name: 'Agility Ladder', description: 'Footwork drills.' }
    ]
  },
  {
    id: 'special-populations',
    name: 'Special Populations Workouts',
    description: 'Programs tailored for beginners, seniors, prenatal, and rehab.',
    benefits: ['Safer progression', 'Targeted adaptations'],
    types: ['Beginner', 'Senior', 'Prenatal', 'Rehab'],
    tags: ['special'],
    moves: [
      { id: 'chair-squat', name: 'Chair Squat', description: 'Beginner-friendly squat variation.' }
    ]
  },
  {
    id: 'goal-based',
    name: 'Goal-Based Programs',
    description: 'Programs mapped to user goals such as fat loss, muscle gain, or endurance.',
    longDescription: 'Auto-generate weekly plans, progressions and exercise selections based on user goals.',
    goals: ['Fat loss', 'Muscle gain', 'Strength', 'Endurance', 'Flexibility'],
    tags: ['programs'],
    moves: []
  }
]
