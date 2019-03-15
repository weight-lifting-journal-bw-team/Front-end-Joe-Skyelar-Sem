import axios from "axios";

import {
	TOGGLE_WORKOUT_MODAL,
	TOGGLE_ADD_WORKOUT_FORM,
	ADD_WORKOUT_START,
	ADD_WORKOUT_SUCCESS,
	ADD_WORKOUT_FAILURE,
	FETCH_WORKOUTS_START,
	FETCH_WORKOUTS_SUCCESS,
	FETCH_WORKOUTS_FAILURE,
	DELETE_WORKOUT_START,
	DELETE_WORKOUT_SUCCESS,
	DELETE_WORKOUT_FAILURE,
	UPDATE_WORKOUT_START,
	UPDATE_WORKOUT_SUCCESS,
	UPDATE_WORKOUT_FAILURE
} from "./index";

export const toggleWorkoutModal = () => dispatch => {
	dispatch({
		type: TOGGLE_WORKOUT_MODAL
	});
};

export const toggleAddWorkoutForm = () => dispatch => {
	dispatch({
		type: TOGGLE_ADD_WORKOUT_FORM
	});
};

export const addWorkout = (workout, userId) => dispatch => {
	dispatch({
		type: ADD_WORKOUT_START
	});

	const newWorkout = {
		date: Date.now().toString(),
		region: workout.region,
		userId
	};

	axios
		.post(
			"https://weight-lifting-journal.herokuapp.com/api/restricted/journals/",
			newWorkout,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			const appendEmptyArray = { ...res.data.journal[0], exercises: [] };

			dispatch({
				type: ADD_WORKOUT_SUCCESS,
				payload: appendEmptyArray
			});
		})
		.catch(err => {
			dispatch({
				type: ADD_WORKOUT_FAILURE,
				payload: err.response.data.message
			});
		});
};

export const fetchWorkouts = UserId => dispatch => {
	dispatch({
		type: FETCH_WORKOUTS_START
	});

	axios
		.get(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/journals/journals-exercises/${UserId}`,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			const journals = res.data.journals.sort((a, b) => {
				return b.date - a.date;
			});

			dispatch({
				type: FETCH_WORKOUTS_SUCCESS,
				payload: journals
			});
		})
		.catch(err => {
			console.log(err.response);
			dispatch({
				type: FETCH_WORKOUTS_FAILURE,
				payload: err
			});
		});
};

export const updateWorkout = (workout, workoutId) => dispatch => {
	dispatch({
		type: UPDATE_WORKOUT_START
	});

	axios
		.put(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/journals/${workoutId}`,
			workout,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			dispatch({
				type: UPDATE_WORKOUT_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: UPDATE_WORKOUT_FAILURE,
				payload: err.response.data.message
			});
		});
};

export const deleteWorkout = workoutId => dispatch => {
	dispatch({
		type: DELETE_WORKOUT_START
	});

	axios
		.delete(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/journals/${workoutId}`,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			dispatch({
				type: DELETE_WORKOUT_SUCCESS,
				payload: workoutId
			});
		})
		.catch(err => {
			dispatch({
				type: DELETE_WORKOUT_FAILURE,
				payload: err.response.data.message
			});
		});
};
