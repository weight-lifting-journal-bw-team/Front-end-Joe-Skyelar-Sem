import axios from "axios";

import {
	ADD_EXERCISE_START,
	ADD_EXERCISE_SUCCESS,
	ADD_EXERCISE_FAILURE,
	FETCH_EXERCISES_START,
	FETCH_EXERCISES_SUCCESS,
	FETCH_EXERCISES_FAILURE,
	UPDATE_EXERCISES_START,
	UPDATE_EXERCISES_SUCCESS,
	UPDATE_EXERCISES_FAILURE,
	DELETE_EXERCISES_START,
	DELETE_EXERCISES_SUCCESS,
	DELETE_EXERCISES_FAILURE
} from "./index";

export const addExercise = (exercise, journalId, userId) => dispatch => {
	dispatch({
		type: ADD_EXERCISE_START
	});

	const { name, reps, sets, weight } = exercise;

	const newExercise = {
		journalId,
		userId,
		name,
		reps,
		sets,
		weight
	};

	axios
		.post(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/exercises/`,
			newExercise,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			console.log(res.data);
			dispatch({
				type: ADD_EXERCISE_SUCCESS,
				payload: res.data.exercise
			});
		})
		.catch(err => {
			dispatch({
				type: ADD_EXERCISE_FAILURE,
				payload: err.message
			});
		});
};

export const fetchExercises = journalId => dispatch => {
	dispatch({
		type: FETCH_EXERCISES_START
	});

	axios
		.get(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/exercises/journal/${journalId}`,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			dispatch({
				type: FETCH_EXERCISES_SUCCESS,
				payload: res.data.exercises
			});
		})
		.catch(err => {
			dispatch({
				type: FETCH_EXERCISES_FAILURE,
				payload: err.response.data.message
			});
		});
};

// export const updateExercise = (exercise, id) => dispatch => {
// 	dispatch({
// 		type: UPDATE_EXERCISES_START
// 	});

// 	const {
// 		workoutName,
// 		workoutType,
// 		workoutSubtype,
// 		workoutSets,
// 		workoutReps,
// 		maxWeight,
// 		currentWeight,
// 		workoutTime,
// 		workoutDistance,
// 		workoutNotes
// 	} = exercise;

// 	let updateExercise = {
// 		workout_name: workoutName,
// 		workout_type: workoutType,
// 		workout_subtype: workoutSubtype,
// 		workout_sets: parseInt(workoutSets, 10),
// 		workout_reps: parseInt(workoutReps, 10),
// 		max_weight: parseInt(maxWeight, 10),
// 		current_weight: parseInt(currentWeight, 10),
// 		workout_time: parseInt(workoutTime, 10),
// 		workout_distance: parseInt(workoutDistance, 10),
// 		workout_notes: workoutNotes,
//     body_region: null,
//     user_id: 1
//   };

//   console.log(updateExercise)

// 	axios
// 		.put(
// 			`https://weight-lifting-journal.herokuapp.com/api/restricted/workouts/${id}`,
// 			updateExercise,
// 			{
// 				"Content-Type": "application/json",
// 				headers: { authorization: localStorage.getItem("token") }
// 			}
// 		)
// 		.then(res => {
//       console.log(res)
// 			dispatch({
// 				type: UPDATE_EXERCISES_SUCCESS,
// 				payload: res.data.workout
// 			});
// 		})
// 		.catch(err => {
//       console.log(err.response)
// 			dispatch({
// 				type: UPDATE_EXERCISES_FAILURE,
// 				payload: err.response.data.message
// 			});
// 		});
// };

// export const deleteExercise = id => dispatch => {
// 	dispatch({
// 		type: DELETE_EXERCISES_START
// 	});

// 	axios
// 		.delete(
// 			`https://weight-lifting-journal.herokuapp.com/api/restricted/workouts/${id}`,
// 			{
// 				"Content-Type": "application/json",
// 				headers: { authorization: localStorage.getItem("token") }
// 			}
// 		)
// 		.then(res => {
// 			dispatch({
// 				type: DELETE_EXERCISES_SUCCESS,
// 				payload: id
// 			});
// 		})
// 		.catch(err => {
// 			dispatch({
// 				type: DELETE_EXERCISES_FAILURE,
// 				payload: err.response.data.message
// 			});
// 		});
// };
