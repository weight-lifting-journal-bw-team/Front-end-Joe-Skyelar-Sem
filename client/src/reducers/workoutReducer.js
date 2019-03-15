import {
	TOGGLE_WORKOUT_MODAL,
	TOGGLE_ADD_WORKOUT_FORM,
	ADD_WORKOUT_START,
	ADD_WORKOUT_SUCCESS,
	ADD_WORKOUT_FAILURE,
	FETCH_WORKOUTS_START,
	FETCH_WORKOUTS_SUCCESS,
	FETCH_WORKOUTS_FAILURE,
	UPDATE_WORKOUT_START,
	UPDATE_WORKOUT_SUCCESS,
	UPDATE_WORKOUT_FAILURE,
	DELETE_WORKOUT_START,
	DELETE_WORKOUT_SUCCESS,
	DELETE_WORKOUT_FAILURE,
	ADD_EXERCISE_START,
	ADD_EXERCISE_SUCCESS,
	ADD_EXERCISE_FAILURE
} from "../actions";

const initialState = {
	toggleWorkoutModal: false,
	addExercise: false,
	workouts: [],
	workoutId: null,
	fetching: false,
	errors: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_WORKOUT_MODAL:
			return {
				...state,
				toggleWorkoutModal: !state.toggleWorkoutModal
			};

		case TOGGLE_ADD_WORKOUT_FORM:
			return {
				...state,
				addExercise: !state.addExercise
			};

		case ADD_WORKOUT_START:
			return {
				...state,
				fetching: true,
				errors: null
			};

		case ADD_WORKOUT_SUCCESS:
			const addWorkoutSorted = [...state.workouts, action.payload].sort(
				(a, b) => {
					return b.date - a.date;
				}
			);

			return {
				...state,
				workouts: addWorkoutSorted,
				workoutId: action.payload.id,
				fetching: false,
				errors: null
			};

		case ADD_WORKOUT_FAILURE:
			return {
				...state,
				fetching: false,
				errors: action.payload
			};

		case FETCH_WORKOUTS_START:
			return {
				...state,
				fetching: true,
				errors: null
			};

		case FETCH_WORKOUTS_SUCCESS:
			return {
				...state,
				workouts: action.payload,
				fetching: false,
				errors: null
			};

		case FETCH_WORKOUTS_FAILURE:
			return {
				...state,
				fetching: false,
				errors: action.payload
			};

		case UPDATE_WORKOUT_START:
			return {
				...state,
				fetching: true,
				errors: null
			};

		case UPDATE_WORKOUT_SUCCESS:
			return {
				...state,
				workouts: state.workouts.map(workout =>
					workout.id === action.payload.id ? action.payload : workout
				),
				fetching: false,
				errors: null
			};

		case UPDATE_WORKOUT_FAILURE:
			return {
				...state,
				fetching: false,
				errors: action.payload
			};

		case DELETE_WORKOUT_START:
			return {
				...state,
				fetching: true,
				errors: null
			};

		case DELETE_WORKOUT_SUCCESS:
			return {
				...state,
				fetching: false,
				workouts: state.workouts.filter(
					workout => workout.id !== action.payload
				),
				errors: null
			};

		case DELETE_WORKOUT_FAILURE:
			return {
				...state,
				fetching: false,
				errors: action.payload
			};

		case ADD_EXERCISE_START:
			return {
				...state,
				fetching: true,
				errors: null
			};
		case ADD_EXERCISE_SUCCESS:
			// Filter out all workouts that aren't equal to the workout of the newly created exercise
			const notChanged = state.workouts.filter(
				workout => workout.id !== action.payload.journalId
			);

			// filter out recently added exercise
			const changed = state.workouts.filter(
				workout => workout.id === action.payload.journalId
			);

			// oldExercises represents the exercises array on the workout being changed
			const oldExercises = changed[0].exercises;

			// newExercise represents the new exercise object that we added
			// we need to add this object to the oldExercises array
			const newExercise = action.payload;

			// we use completeExercises to stitch together the existing exercises and the new exercise
			const completeExercises = [...oldExercises, newExercise];

			// we replaced the exercises array o the changed wkout with completeExercisesg
			changed[0].exercises = completeExercises;

			// we use completeWorkout to stitch together all the unchanged workouts with our new changed workout that has an updated exercises array
			const completeWorkout = [...notChanged, ...changed];

			// Sort by newest workout
			const sorted = completeWorkout.sort((a, b) => {
				return b.date - a.date;
			});

			return {
				...state,
				workouts: sorted
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
