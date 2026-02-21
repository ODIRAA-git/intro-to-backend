export type MoveGuide = {
  id: string
  name: string
  steps: string[]
  reps?: string
  progressions?: { level: string; description: string }[]
}

export const moveGuides: Record<string, MoveGuide> = {
  sq: {
    id: 'sq',
    name: 'Squat',
    steps: [
      'Stand with feet shoulder-width apart, toes slightly out.',
      'Hinge at the hips and bend knees, keeping chest up and weight on heels.',
      'Descend until thighs are at least parallel to the floor, then drive through heels to stand.'
    ],
    reps: '3 sets × 6–12 reps'
    ,progressions: [
      { level: 'Beginner', description: 'Box squats to a chair, 3 sets × 8–12 reps' },
      { level: 'Intermediate', description: 'Barbell back squat, 3–4 sets × 6–10 reps' },
      { level: 'Advanced', description: 'Front squats / paused squats, 3–5 sets × 3–6 reps' }
    ]
  },
  dl: {
    id: 'dl',
    name: 'Deadlift',
    steps: [
      'Stand with feet under the bar, hips back and chest up.',
      'Grip the bar, brace your core, and lift by driving hips forward while keeping a neutral spine.',
      'Lower with control by hinging at the hips.'
    ],
    reps: '3–5 sets × 3–6 reps (strength) or 3 sets × 6–10 reps (hypertrophy)'
    ,progressions: [
      { level: 'Beginner', description: 'Kettlebell deadlift or Romanian deadlift, focus on hip hinge' },
      { level: 'Intermediate', description: 'Conventional deadlift, 3–5 sets × 3–6 reps' },
      { level: 'Advanced', description: 'Deficit or paused deadlifts for technique and strength' }
    ]
  },
  bp: {
    id: 'bp',
    name: 'Bench Press',
    steps: [
      'Lie flat on the bench, feet planted, shoulder blades slightly retracted.',
      'Grip the bar slightly wider than shoulder-width, lower it to the mid-chest under control.',
      'Press the bar up while keeping tight core and stable shoulders.'
    ],
    reps: '3–5 sets × 4–8 reps'
    ,progressions: [
      { level: 'Beginner', description: 'Push-ups with incline or dumbbell presses' },
      { level: 'Intermediate', description: 'Barbell bench press, 3–5 sets × 4–8 reps' },
      { level: 'Advanced', description: 'Paused bench press or close-grip for triceps emphasis' }
    ]
  },
  burpee: {
    id: 'burpee',
    name: 'Burpee',
    steps: [
      'From standing, drop into a squat and place hands on the floor.',
      'Kick feet back into a plank, perform a push-up (optional), then jump feet forward.',
      'Explosively jump up with arms overhead to finish one rep.'
    ],
    reps: '3–5 rounds × 10–20 reps or 20–40s work for HIIT'
    ,progressions: [
      { level: 'Beginner', description: 'Step back plank + step forward + small jump' },
      { level: 'Intermediate', description: 'Standard burpee with push-up' },
      { level: 'Advanced', description: 'Burpee + tuck jump or burpee pull-up' }
    ]
  },
  plank: {
    id: 'plank',
    name: 'Plank',
    steps: [
      'Position forearms on the ground, elbows under shoulders.',
      'Keep a straight line from head to heels, brace the core and avoid sagging.',
      'Hold for time with controlled breathing.'
    ],
    reps: '3 sets × 20–90s hold depending on level'
    ,progressions: [
      { level: 'Beginner', description: 'Knee plank holds, 3 sets × 20–40s' },
      { level: 'Intermediate', description: 'Forearm plank, 3 sets × 40–90s' },
      { level: 'Advanced', description: 'Weighted plank or single-arm plank holds' }
    ]
  },
  'pull-up': {
    id: 'pull-up',
    name: 'Pull-up',
    steps: [
      'Grip the bar with palms facing away, hands slightly wider than shoulders.',
      'Engage scapula and pull chest toward the bar, leading with the elbows.',
      'Lower with control to full hang.'
    ],
    reps: '3–5 sets × 3–12 reps (use assistance if needed)'
    ,progressions: [
      { level: 'Beginner', description: 'Assisted pull-ups or negative reps' },
      { level: 'Intermediate', description: 'Standard pull-ups' },
      { level: 'Advanced', description: 'Weighted pull-ups or muscle-ups' }
    ]
  },
  dip: {
    id: 'dip',
    name: 'Dip',
    steps: [
      'Support yourself on parallel bars with arms straight.',
      'Lower the body by bending the elbows until shoulders are below elbows.',
      'Press back up to the start position.'
    ],
    reps: '3–5 sets × 4–12 reps'
    ,progressions: [
      { level: 'Beginner', description: 'Bench dips or assisted dips' },
      { level: 'Intermediate', description: 'Parallel bar dips' },
      { level: 'Advanced', description: 'Weighted dips or ring dips' }
    ]
  },
  'box-jump': {
    id: 'box-jump',
    name: 'Box Jump',
    steps: [
      'Stand facing the box with feet hip-width apart.',
      'Dip slightly and swing arms to jump onto the box, landing softly with knees slightly bent.',
      'Step down carefully and reset.'
    ],
    reps: '3–6 sets × 3–8 reps (power-focused)'
    ,progressions: [
      { level: 'Beginner', description: 'Low box/step jumps or squat jumps' },
      { level: 'Intermediate', description: 'Standard box jumps, focus on soft landing' },
      { level: 'Advanced', description: 'Depth jumps or higher boxes for power' }
    ]
  },
  'step-up': {
    id: 'step-up',
    name: 'Step-up',
    steps: [
      'Stand facing a stable box or bench.',
      'Place one foot on the box and press through the heel to bring the body up, finishing with both standing on the box.',
      'Step down with control and repeat.'
    ],
    reps: '3 sets × 8–12 reps per leg'
    ,progressions: [
      { level: 'Beginner', description: 'Step-ups with bodyweight to a low box' },
      { level: 'Intermediate', description: 'Weighted step-ups with dumbbells' },
      { level: 'Advanced', description: 'Explosive step-ups or walking lunges' }
    ]
  },
  'farmers-carry': {
    id: 'farmers-carry',
    name: "Farmer's Carry",
    steps: [
      'Pick up heavy dumbbells or kettlebells at your sides with a neutral spine.',
      'Walk a measured distance with tight core and upright posture.',
      'Set the weights down with control.'
    ],
    reps: '3–5 rounds × 30–60m carries'
    ,progressions: [
      { level: 'Beginner', description: 'Short carries with moderate weight' },
      { level: 'Intermediate', description: 'Longer carries with heavier load' },
      { level: 'Advanced', description: 'Farmer\'s walk with timed intervals or heavy loads' }
    ]
  },
  'leg-raise': {
    id: 'leg-raise',
    name: 'Leg Raise',
    steps: [
      'Lie supine with hands under your hips for support.',
      'Lift legs up to vertical with control, then slowly lower without letting the lower back arch.',
      'Progress by adding control or hanging leg raises.'
    ],
    reps: '3 sets × 8–15 reps'
    ,progressions: [
      { level: 'Beginner', description: 'Bent-knee leg raises' },
      { level: 'Intermediate', description: 'Straight-leg raises' },
      { level: 'Advanced', description: 'Hanging leg raises' }
    ]
  },
  'long-run': {
    id: 'long-run',
    name: 'Long Run',
    steps: [
      'Plan a steady, conversational pace that you can maintain for the target duration.',
      'Maintain consistent effort, focus on cadence and breathing.',
      'Include easy warm-up and cooldown.'
    ],
    reps: '1 session × 30–120 minutes depending on training phase'
    ,progressions: [
      { level: 'Beginner', description: '30–45 minute easy runs' },
      { level: 'Intermediate', description: '60–90 minute runs with varied pace' },
      { level: 'Advanced', description: 'Progressive long runs and marathon prep' }
    ]
  }
}

export function getMoveGuide(id: string) {
  return moveGuides[id]
}

