import axios from "axios";
import {ADD_EXERCISE_START, ADD_EXERCISE_SUCCESS, ADD_EXERCISE_FAILURE} from './index';

export const addExercise = (exercise, id) => dispatch => {
    dispatch({type: ADD_EXERCISE_START });
    const headers = {
        'Content-Type':'application/json',
        'Authorization':localStorage.getItem('token')
    }
    const newExercise = {
        workout_name,
        workout_date,
        workout_type,
        workout_subtype,
        workout_reps	,
        workout_sets	,
        workout_time,
        workout_distance,
        workout_notes,
        body_region,
        max_weight	,
        progress_picture,
        user_id        
    }
    axios.post(`https://weight-lifting-journal.herokuapp.com/api/restricted/workouts/${id}`, newExercise, headers)
    .then()
    .catch()
    
}
