import { TOGGLE_WORKOUT_MODAL } from './index';


export const toggleWorkoutModal = () => dispatch => {    
    dispatch({
        type: TOGGLE_WORKOUT_MODAL
    });

}