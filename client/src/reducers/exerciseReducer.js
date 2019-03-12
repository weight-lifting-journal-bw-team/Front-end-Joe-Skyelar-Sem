import {
	ADD_EXERCISE_START,
	ADD_EXERCISE_SUCCESS,
	ADD_EXERCISE_FAILURE
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
		default:
			return state;
	}
};
