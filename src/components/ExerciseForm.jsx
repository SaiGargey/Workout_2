// // import React from 'react';
// import '../assets/css/styles.css';
// import exerciseCategories from './ExerciseCategories';

// const ExerciseForm = ({ exerciseCategories }) => (
//   <div className="exercise-form">
//     <h3 className="exercise-title">{exerciseCategories.name} Form Guide</h3>
//     <p className="exercise-description">{exerciseCategories.description}</p>
//     <div className="exercise-tips">
//       <h4>Proper Form Tips:</h4>
//       <ul>
//         <li>Maintain proper body alignment</li>
//         <li>Control the weight throughout the movement</li>
//         <li>Breathe consistently</li>
//         <li>Start with lighter weights to perfect technique</li>
//       </ul>
//     </div>
//   </div>
// );

// export default ExerciseForm;

// import React from 'react';
// import PropTypes from 'prop-types';
import '../assets/css/styles.css';

// const ExerciseForm = ({ exercise }) => (
//   <div className="exercise-form">
//     <h3 className="exercise-title">{exercise.name} Form Guide</h3>
//     <p className="exercise-description">{exercise.description}</p>
//     <div className="exercise-tips">
//       <h4>Proper Form Tips:</h4>
//       <ul>
//         <li>Maintain proper body alignment</li>
//         <li>Control the weight throughout the movement</li>
//         <li>Breathe consistently</li>
//         <li>Start with lighter weights to perfect technique</li>
//       </ul>
//     </div>
//   </div>
// );

// ExerciseForm.propTypes = {
//   exercise: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default ExerciseForm;

const ExerciseForm = ({ exercise }) => {
  return (
    <div className="exercise-form">
      <h3 className="exercise-title">{exercise.name} Form Guide</h3>
      <p className="exercise-description">{exercise.description}</p>
      <div className="exercise-tips">
        <h4>Proper Form Tips:</h4>
        <ul>
          <li>Maintain proper body alignment</li>
          <li>Control the weight throughout the movement</li>
          <li>Breathe consistently</li>
          <li>Start with lighter weights to perfect technique</li>
        </ul>
      </div>
    </div>
  );
};

export default ExerciseForm;
