import { combineReducers } from "redux";


import authReducer from "./authReducer";
import workoutReducer from './workoutReducer';
import exerciseReducer from "./exerciseReducer";

export default combineReducers({
	authReducer,
	workoutReducer,
	exerciseReducer
});
