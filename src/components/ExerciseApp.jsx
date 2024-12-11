// import  { useState } from 'react';
// import exerciseCategories from './ExerciseCategories';
// import ExerciseForm from './ExerciseForm';
// import '../assets/css/styles.css';

// const ExerciseApp = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedSubCategory, setSelectedSubCategory] = useState(null);
//   const [selectedExercise, setSelectedExercise] = useState(null);

//   const getExercises = () => {
//     if (!selectedCategory) return [];
//     if (selectedCategory === 'Arms') {
//       return selectedSubCategory ? exerciseCategories.Arms[selectedSubCategory] : [];
//     }
//     return exerciseCategories[selectedCategory];
//   };

//   return (
//     <div className="app-container">
//       <h1>Exercise Form Guide</h1>
//       <div className="category-selection">
//         {Object.keys(exerciseCategories).map((category) => (
//           <button
//             key={category}
//             onClick={() => {
//               setSelectedCategory(category);
//               setSelectedSubCategory(null);
//               setSelectedExercise(null);
//             }}
//             className={`category-button ${selectedCategory === category ? 'active' : ''}`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       {selectedCategory === 'Arms' && (
//         <div className="subcategory-selection">
//           {Object.keys(exerciseCategories.Arms).map((subCategory) => (
//             <button
//               key={subCategory}
//               onClick={() => setSelectedSubCategory(subCategory)}
//               className={`subcategory-button ${selectedSubCategory === subCategory ? 'active' : ''}`}
//             >
//               {subCategory}
//             </button>
//           ))}
//         </div>
//       )}
//       {selectedCategory && (
//         <div className="exercise-selection">
//           {getExercises().map((exercise) => (
//             <button
//               key={exercise}
//               onClick={() => setSelectedExercise({ name: exercise, description: 'Exercise Description' })}
//               className={`exercise-button ${selectedExercise?.name === exercise ? 'active' : ''}`}
//             >
//               {exercise}
//             </button>
//           ))}
//         </div>
//       )}
//       {selectedExercise && <ExerciseForm exercise={selectedExercise} />}
//     </div>
//   );
// };

// export default ExerciseApp;

// import { useState } from 'react';
// import exerciseCategories from './ExerciseCategories';
// import ExerciseForm from './ExerciseForm';
// import '../assets/css/styles.css';

// const ExerciseApp = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedSubCategory, setSelectedSubCategory] = useState(null);
//   const [selectedExercise, setSelectedExercise] = useState(null);

//   const getExercises = () => {
//     if (!selectedCategory) return [];
//     if (selectedCategory === 'Arms') {
//       return selectedSubCategory
//         ? exerciseCategories.Arms[selectedSubCategory]
//         : [];
//     }
//     return exerciseCategories[selectedCategory] || [];
//   };

//   return (
//     <div className="app-container">
//       <h1>Exercise Form Guide</h1>
//       <div className="category-selection">
//         {Object.keys(exerciseCategories).map((category) => (
//           <button
//             key={category}
//             onClick={() => {
//               setSelectedCategory(category);
//               setSelectedSubCategory(null);
//               setSelectedExercise(null);
//             }}
//             className={`category-button ${selectedCategory === category ? 'active' : ''}`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       {selectedCategory === 'Arms' && (
//         <div className="subcategory-selection">
//           {Object.keys(exerciseCategories.Arms).map((subCategory) => (
//             <button
//               key={subCategory}
//               onClick={() => setSelectedSubCategory(subCategory)}
//               className={`subcategory-button ${selectedSubCategory === subCategory ? 'active' : ''}`}
//             >
//               {subCategory}
//             </button>
//           ))}
//         </div>
//       )}
//       {selectedCategory && (
//         <div className="exercise-selection">
//           {getExercises().map((exercise, index) => (
//             <button
//               key={index}
//               onClick={() =>
//                 setSelectedExercise({ name: exercise, description: 'Exercise Description' })
//               }
//               className={`exercise-button ${selectedExercise?.name === exercise ? 'active' : ''}`}
//             >
//               {exercise}
//             </button>
//           ))}
//         </div>
//       )}
//       {selectedExercise && <ExerciseForm exercise={selectedExercise} />}
//     </div>
//   );
// };

// export default ExerciseApp;

import { useState } from 'react';
import exerciseCategories from './ExerciseCategories';
import ExerciseForm from './ExerciseForm';
import '../assets/css/styles.css';

const ExerciseApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const getExercises = () => {
    if (!selectedCategory) return [];
    if (selectedCategory === 'Arms') {
      return selectedSubCategory
        ? exerciseCategories.Arms[selectedSubCategory]
        : [];
    }
    return exerciseCategories[selectedCategory] || [];
  };

  return (
    <div className="app-container">
      <h1>Exercise Form Guide</h1>
      <div className="category-selection">
        {Object.keys(exerciseCategories).map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedSubCategory(null);
              setSelectedExercise(null);
            }}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory === 'Arms' && (
        <div className="subcategory-selection">
          {Object.keys(exerciseCategories.Arms).map((subCategory) => (
            <button
              key={subCategory}
              onClick={() => setSelectedSubCategory(subCategory)}
              className={`subcategory-button ${selectedSubCategory === subCategory ? 'active' : ''}`}
            >
              {subCategory}
            </button>
          ))}
        </div>
      )}
      {selectedCategory && (
        <div className="exercise-selection">
          {getExercises().map((exercise, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedExercise(exercise)
              }
              className={`exercise-button ${
                selectedExercise?.name === exercise.name ? 'active' : ''
              }`}
            >
              {exercise.name}
            </button>
          ))}
        </div>
      )}
      {selectedExercise && <ExerciseForm exercise={selectedExercise} />}
    </div>
  );
};

export default ExerciseApp;
