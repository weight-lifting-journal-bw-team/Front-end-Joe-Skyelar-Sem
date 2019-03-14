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
		case UPDATE_EXERCISES_START:
			return {
				...state,
				fetching: true,
				errors: null
			};

		case UPDATE_EXERCISES_SUCCESS:
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

		case UPDATE_EXERCISES_FAILURE:
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
						exercise => exercise.workout_id !== action.payload
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
