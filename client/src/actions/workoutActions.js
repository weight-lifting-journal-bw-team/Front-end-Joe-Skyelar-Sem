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
        

    const newWorkout = {
        date: moment(Date.now()).format('MMMM Do YYYY').toString(),
        region: workout.region,
        userId: 1
    }

    axios
        .post('https://weight-lifting-journal.herokuapp.com/api/restricted/journals/', newWorkout,
        {
			"Content-Type": "application/json",
			headers: { authorization: localStorage.getItem("token") }
		}
        )
        .then(res => {
            dispatch({
                type: ADD_WORKOUT_SUCCESS,
                payload: res.data.journal[res.data.journal.length - 1]
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_WORKOUT_FAILURE,
                payload: err.response.data.message
            })
        })      
}

// export const editWorkout = workout => dispatch => {
    // 
// }
    
// export const fetchWorkouts = () => dispatch => {
//     dispatch({
//         type: FETCH_WORKOUTS_START
//     });

//     axios
//         .get()
// }

// export const deleteWorkout = workout => dispatch => {
    //
// }