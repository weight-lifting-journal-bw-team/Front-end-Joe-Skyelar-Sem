import {TOGGLE_WORKOUT_MODAL} from '../actions';

const initialState = {
    toggleWorkoutModal: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_WORKOUT_MODAL:         
            return {
                ...state,
                toggleWorkoutModal: !state.toggleWorkoutModal                
            }

        default: 
            return state;
    }

}