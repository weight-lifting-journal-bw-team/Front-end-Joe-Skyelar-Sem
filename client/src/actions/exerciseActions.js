import axios from "axios";
import {
	ADD_EXERCISE_START,
	ADD_EXERCISE_SUCCESS,
	ADD_EXERCISE_FAILURE
} from "./index";

export const addExercise = exercise => dispatch => {
	dispatch({ type: ADD_EXERCISE_START });

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
		workout_type: workoutType,
		workout_subtype: workoutSubtype,
		workout_reps: parseInt(workoutReps, 10),
		workout_sets: parseInt(workoutSets, 10),
		workout_time: parseInt(workoutTime, 10),
		workout_distance: parseInt(workoutDistance, 10),
		workout_notes: workoutNotes,
		body_region: null,
		max_weight: parseInt(maxWeight, 10),
		current_weight: parseInt(currentWeight, 10),
		user_id: 1
	};

	axios
		.post(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/workouts`,
			newExercise,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			dispatch({ type: ADD_EXERCISE_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err);
			dispatch({
				type: ADD_EXERCISE_FAILURE,
				payload: err.response.data.message
			});
		});
};

export const fetchExercises = id => dispatch => {
	// dispatch({
	// 	type: FETCH_EXERCISES_START
	// });

	axios
		.get(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/workouts/user/1`
		)
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err.response);
		});
};
