import {
    TOGGLE_WORKOUT_MODAL,
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
} from '../actions';

const initialState = {
    toggleWorkoutModal: false,
    workouts: [],
    workoutId: null,
    fetching: false,
    errors: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_WORKOUT_MODAL:         
            return {
                ...state,
                toggleWorkoutModal: !state.toggleWorkoutModal                
            }

        case ADD_WORKOUT_START:
            return {
                ...state,
                fetching: true,
                errors: null
            }
            
        case ADD_WORKOUT_SUCCESS:
            return {
                ...state,
                workouts: [...state.workouts, action.payload],
                workoutId: action.payload.journalId,
                fetching: false,
                errors: null                
            }
            
        case ADD_WORKOUT_FAILURE:
            return {
                ...state,
                fetching: false,
                errors: action.payload        
            } 
            
        case FETCH_WORKOUTS_START:
            return {
                ...state,
                fetching: true,
                errors: null
            }    
        
        case FETCH_WORKOUTS_SUCCESS:
            return {
                ...state,
                fetching: false,
                errors: null
            }    
        
        case FETCH_WORKOUTS_FAILURE:    
            return {
                ...state,
                fetching: false,
                errors: action.payload
            }
        
        case UPDATE_WORKOUT_START:
            return {
                ...state,
                fetching: true,
                errors: null
            }

        case UPDATE_WORKOUT_SUCCESS:
            return {
                ...state,
                fetching: false,
                errors: null
            }   
            
        case UPDATE_WORKOUT_FAILURE:
            return {
                ...state,
                fetching: false,
                errors: action.payload
            }
            
        case DELETE_WORKOUT_START:
            return {
                ...state,
                fetching: true,
                errors: null
            }   
        
        case DELETE_WORKOUT_SUCCESS:
            return {
                ...state,
                fetching: false,
                errors: null
            }   
            
        case DELETE_WORKOUT_FAILURE:
            return {
                ...state,
                fetching: false,
                errors: action.payload
            }    

        default: 
            return state;
    }

}