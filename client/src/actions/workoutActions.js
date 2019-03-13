import axios from 'axios';
import moment from 'moment';

import { 
    TOGGLE_WORKOUT_MODAL,
    TOGGLE_ADD_WORKOUT_FORM,

    ADD_WORKOUT_START,
    ADD_WORKOUT_SUCCESS,
    ADD_WORKOUT_FAILURE
} from './index';


export const toggleWorkoutModal = () => dispatch => {    
    dispatch({
        type: TOGGLE_WORKOUT_MODAL
    });  
}

export const toggleAddWorkoutForm = () => dispatch => {
         dispatch({
           type: TOGGLE_ADD_WORKOUT_FORM
         });
       };

export const addWorkout = workout => dispatch => {
    dispatch({
        type: ADD_WORKOUT_START
    });      
        

    const date = Date.now();

    // extract data

    console.log(workout)

    const newWorkout = {
        date: moment(date).format('MMMM Do YYYY'),
        region: workout.region
    }

    console.log(newWorkout)

    // axios
    //     .post('', newWorkout)
    //     .then(res => {
    //         console.log(res)
    //         dispatch({
    //             type: ADD_WORKOUT_SUCCESS
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err.response.data.message)
    //         dispatch({
    //             type: ADD_WORKOUT_FAILURE,
    //             payload: err.response.data.message
    //         })
    //     })      
}

// export const editWorkout = workout => dispatch => {
    // 
// }
    
// export const fetchWorkouts = workout => dispatch => {
    // 
// }

// export const deleteWorkout = workout => dispatch => {
    //
// }