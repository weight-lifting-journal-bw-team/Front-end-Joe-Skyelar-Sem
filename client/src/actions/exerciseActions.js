import axios from "axios";
import {
	ADD_EXERCISE_START,
	ADD_EXERCISE_SUCCESS,
	ADD_EXERCISE_FAILURE,
	FETCH_EXERCISES_START,
	FETCH_EXERCISES_SUCCESS,
	FETCH_EXERCISES_FAILURE,
	DELETE_EXERCISES_START,
	DELETE_EXERCISES_SUCCESS,
	DELETE_EXERCISES_FAILURE
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
	dispatch({
		type: FETCH_EXERCISES_START
	});

	axios
		.get(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/workouts/user/1`,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			dispatch({
				type: FETCH_EXERCISES_SUCCESS,
				payload: res.data.workouts
			});
		})
		.catch(err => {
			dispatch({
				type: FETCH_EXERCISES_FAILURE,
				payload: err.response.data.message
			});
		});
};

export const deleteExercise = id => dispatch => {
	dispatch({
		type: DELETE_EXERCISES_START
	});

	axios
		.delete(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/workouts/${id}`,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			dispatch({
				type: DELETE_EXERCISES_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: DELETE_EXERCISES_FAILURE,
				payload: err.response.data.message
			});
		});
};
