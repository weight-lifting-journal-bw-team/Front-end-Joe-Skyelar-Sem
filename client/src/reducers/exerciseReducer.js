import {
	FETCH_EXERCISES_START,
	FETCH_EXERCISES_SUCCESS,
	FETCH_EXERCISES_FAILURE,
	UPDATE_EXERCISE_START,
	UPDATE_EXERCISE_SUCCESS,
	UPDATE_EXERCISE_FAILURE,
	DELETE_EXERCISE_START,
	DELETE_EXERCISE_SUCCESS,
	DELETE_EXERCISE_FAILURE
} from "../actions";

const initialState = {
	exercises: [],
	fetching: false,
	errors: null
};

export default (state = initialState, action) => {
	switch (action.type) {
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
		case UPDATE_EXERCISE_START:
			return {
				...state,
				fetching: true,
				errors: null
			};

		case UPDATE_EXERCISE_SUCCESS:
			return {
				...state,
				exercises: state.exercises.map(exercise =>
					exercise.id === action.payload.id
						? action.payload
						: exercise
				),
				fetching: false,
				errors: null
			};

		case UPDATE_EXERCISE_FAILURE:
			return {
				...state,
				fetching: false,
				errors: action.payload
			};
		case DELETE_EXERCISE_START:
			return {
				...state,
				fetching: true,
				errors: null
			};

		case DELETE_EXERCISE_SUCCESS:
			return {
				...state,
				exercises: state.exercises.filter(
					exercise => exercise.id !== action.payload
				),
				fetching: false,
				errors: null
			};

		case DELETE_EXERCISE_FAILURE:
			return {
				...state,
				fetching: false,
				errors: action.payload
			};

		default:
			return state;
	}
};
