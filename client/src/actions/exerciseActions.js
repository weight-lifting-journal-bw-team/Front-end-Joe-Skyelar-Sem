import axios from "axios";

import {
	ADD_EXERCISE_START,
	ADD_EXERCISE_SUCCESS,
	ADD_EXERCISE_FAILURE,
	FETCH_EXERCISES_START,
	FETCH_EXERCISES_SUCCESS,
	FETCH_EXERCISES_FAILURE,
	UPDATE_EXERCISE_START,
	UPDATE_EXERCISE_SUCCESS,
	UPDATE_EXERCISE_FAILURE,
	DELETE_EXERCISE_START,
	DELETE_EXERCISE_SUCCESS,
	DELETE_EXERCISE_FAILURE
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

export const updateExercise = (exercise, exerciseId) => dispatch => {
	dispatch({
		type: UPDATE_EXERCISE_START
	});

	axios
		.put(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/exercises/${exerciseId}`,
			exercise,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			console.log(res);
			dispatch({
				type: UPDATE_EXERCISE_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			console.log(err);
			dispatch({
				type: UPDATE_EXERCISE_FAILURE,
				payload: err.response.data.message
			});
		});
};

export const deleteExercise = exerciseId => dispatch => {
	dispatch({
		type: DELETE_EXERCISE_START
	});

	axios
		.delete(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/exercises/${exerciseId}`,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			dispatch({
				type: DELETE_EXERCISE_SUCCESS,
				payload: exerciseId
			});
		})
		.catch(err => {
			dispatch({
				type: DELETE_EXERCISE_FAILURE,
				payload: err.response.data.message
			});
		});
};
