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
} from "../actions";

const initialState = {
	exercises: [],
	fetching: false,
	errors: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_EXERCISE_START:
			return {
				...state,
				fetching: true,
				errors: null
			};

		case ADD_EXERCISE_SUCCESS:
			return {
				...state,
				exercises: [...state.exercises, action.payload],
				fetching: false,
				errors: null
			};

		case ADD_EXERCISE_FAILURE:
			return {
				...state,
				fetching: false,
				errors: action.payload
			};

		case FETCH_EXERCISES_START:
			return {
				...state,
				fetching: true,
				errors: null
			};

		case FETCH_EXERCISES_SUCCESS:
			return {
				...state,
				exercises: [...action.payload],
				fetching: false,
				errors: null
			};

		case FETCH_EXERCISES_FAILURE:
			return {
				...state,
				fetching: false,
				errors: action.payload
			};
		case DELETE_EXERCISES_START:
			return {
				...state,
				fetching: true,
				errors: null
			};

		case DELETE_EXERCISES_SUCCESS:
			return {
				...state,
				exercises: [
					...state.exercises.filter(
						workout => workout.workout_id !== action.payload
					)
				],
				fetching: false,
				errors: null
			};

		case DELETE_EXERCISES_FAILURE:
			return {
				...state,
				fetching: false,
				errors: action.payload
			};

		default:
			return state;
	}
};
