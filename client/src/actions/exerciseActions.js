import axios from "axios";
import {
  ADD_EXERCISE_START,
  ADD_EXERCISE_SUCCESS,
  ADD_EXERCISE_FAILURE
} from "./index";

export const addExercise = exercise => dispatch => {
//   console.log(exercise);
  dispatch({ type: ADD_EXERCISE_START });
  const reqOptions = {
    "Content-Type": "multipart/form-data",
    headers: {authorization: localStorage.getItem("token")}
  };
  const {
    currentWeight,
    maxWeight,
    workoutDate,
    workoutName,
    workoutNotes,
    workoutReps,
    workoutSets,
    workoutSubtype,
    workoutTime,
    workoutType,
    workoutDistance
  } = exercise;

  let newExercise = {
    workout_name: workoutName,
    workout_date: workoutDate,
    // workout_type: workoutType ? workoutType : null,
    // workout_subtype: workoutSubtype ? workoutSubtype : null,
    // workout_reps: workoutReps ? workoutReps : null,
    // workout_sets: workoutSets ? workoutSets : null,
    // workout_time: workoutTime ? workoutTime : null,
    // workout_distance: workoutDistance ? workoutDistance : null,
    // workout_notes: workoutNotes ? workoutNotes : null,
    // body_region: null,    
    // max_weight: maxWeight ? maxWeight : null,    
    user_id: 1,
    // current_weight: currentWeight ? currentWeight : null
  };
  const progressPicture = null;
  const formData = new FormData();
  let rawData = {...newExercise};
  
  rawData = JSON.stringify(rawData);
  formData.append('workout', rawData);
  formData.append('image', progressPicture);
  console.log(formData);
  console.log(rawData);
  
  axios
    .post(
      `https://weight-lifting-journal.herokuapp.com/api/restricted/workouts`,
      formData,
      reqOptions
    )
    .then( res => {
        console.log(res);
        dispatch({type: ADD_EXERCISE_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err);
        dispatch({type: ADD_EXERCISE_FAILURE, payload: err.response.data.message })
    });
};
