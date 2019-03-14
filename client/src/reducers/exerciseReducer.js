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
		case UPDATE_EXERCISE_START:
			return {
				...state,
				fetching: true,
				errors: null
			};

		case UPDATE_EXERCISE_SUCCESS:
			let updatedExercise = [];

			state.exercises.map(exercise => {
				let newExercise =
					exercise.workout_id !== action.payload.workout_id
						? exercise
						: action.payload;

				return updatedExercise.push(newExercise);
			});

			// let check = state.exercises.map(exercise => exercise.workout_id !== action.payload.workout_id ? exercise : action.payload)
			// console.log(`check: ${check}`)

			return {
				...state,
				exercises: [...updatedExercise],
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
				exercises: [
					...state.exercises.filter(
						exercise => exercise.workout_id !== action.payload
					)
				],
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
