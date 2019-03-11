import { TOGGLE_WORKOUT_MODAL } from './index';


export const toggleWorkoutModal = () => dispatch => {
    console.log('fired');
    dispatch({
        type: TOGGLE_WORKOUT_MODAL
    });

}