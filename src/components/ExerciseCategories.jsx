// import React from 'react';

const exerciseCategories = {
  Chest: [
    { name: 'Bench Press', description: 'A compound upper body exercise targeting chest, triceps, and shoulders.' },
    { name: 'Incline Bench Press', description: 'Focuses on the upper portion of the chest muscles.' },
    { name: 'Push-Ups', description: 'Bodyweight exercise that engages chest, triceps, and core muscles.' },
    { name: 'Chest Fly', description: 'Isolation exercise that stretches and contracts the chest muscles.' },
    { name: 'Cable Crossovers', description: 'Cable machine exercise that provides constant tension on chest muscles.' },
    { name: 'Dumbbell Bench Press', description: 'Similar to barbell bench press but allows for independent arm movement.' }
  ],
  Back: [
    { name: 'Deadlifts', description: 'Compound exercise targeting back, glutes, and hamstrings.' },
    { name: 'Pull-Ups', description: 'Bodyweight exercise that primarily works the back and biceps.' },
    { name: 'Bent-Over Rows', description: 'Targets the middle and lower back muscles.' },
    { name: 'Lat Pulldowns', description: 'Machine exercise that mimics pull-up movement.' },
    { name: 'Seated Cable Rows', description: 'Cable machine exercise for back muscles.' },
    { name: 'Single-Arm Dumbbell Rows', description: 'Unilateral exercise for back muscles and core stability.' }
  ],
  Shoulders: [
    { name: 'Overhead Press', description: 'Compound shoulder exercise targeting all three deltoid heads.' },
    { name: 'Lateral Raises', description: 'Isolation exercise for the side deltoids.' },
    { name: 'Front Raises', description: 'Targets the anterior deltoid muscles.' },
    { name: 'Arnold Press', description: 'Variation of overhead press with a rotational movement.' },
    { name: 'Rear Delt Flys', description: 'Isolation exercise for the posterior deltoids.' },
    { name: 'Shrugs', description: 'Exercise targeting the trapezius muscles.' }
  ],
  Arms: {
    Biceps: [
      { name: 'Barbell Curls', description: 'Classic bicep isolation exercise using a barbell.' },
      { name: 'Dumbbell Curls', description: 'Bicep exercise allowing independent arm movement.' },
      { name: 'Hammer Curls', description: 'Targets biceps and forearms with a neutral grip.' },
      { name: 'Preacher Curls', description: 'Bicep isolation exercise performed on a preacher bench.' }
    ],
    Triceps: [
      { name: 'Tricep Dips', description: 'Bodyweight exercise targeting tricep muscles.' },
      { name: 'Skull Crushers', description: 'Lying tricep extension exercise.' },
      { name: 'Overhead Tricep Extension', description: 'Standing or seated tricep isolation exercise.' },
      { name: 'Cable Pushdowns', description: 'Cable machine exercise for triceps.' }
    ]
  },
  Legs: [
    { name: 'Squats', description: 'Compound lower body exercise targeting quads, glutes, and core.' },
    { name: 'Lunges', description: 'Unilateral exercise for legs with multiple variations.' },
    { name: 'Leg Press', description: 'Machine exercise targeting quads, glutes, and hamstrings.' },
    { name: 'Romanian Deadlifts', description: 'Focuses on hamstrings and lower back.' },
    { name: 'Leg Extensions', description: 'Isolation exercise for quadriceps.' },
    { name: 'Hamstring Curls', description: 'Isolation exercise targeting the back of the thighs.' }
  ],
  Core: [
    { name: 'Plank', description: 'Isometric core exercise that engages multiple muscle groups.' },
    { name: 'Russian Twists', description: 'Rotational core exercise for obliques.' },
    { name: 'Bicycle Crunches', description: 'Dynamic core exercise targeting abs and obliques.' },
    { name: 'Hanging Leg Raises', description: 'Advanced core exercise for lower abs.' },
    { name: 'Ab Rollouts', description: 'Challenging core stability exercise.' },
    { name: 'Mountain Climbers', description: 'Dynamic exercise combining core and cardio.' }
  ],
  Glutes: [
    { name: 'Hip Thrusts', description: 'Targeted glute strengthening exercise.' },
    { name: 'Glute Bridges', description: 'Bodyweight exercise for glute activation.' },
    { name: 'Bulgarian Split Squats', description: 'Unilateral leg exercise emphasizing glutes.' },
    { name: 'Cable Kickbacks', description: 'Isolation exercise for glute muscles.' },
    { name: 'Sumo Deadlifts', description: 'Variation of deadlift with wider stance.' },
    { name: 'Step-Ups', description: 'Functional exercise targeting glutes and legs.' }
  ]
};

export default exerciseCategories;
