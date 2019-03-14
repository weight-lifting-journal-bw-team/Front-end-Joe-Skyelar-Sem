import axios from "axios";
import history from "../helpers/history";

import {
	REGISTER_USER_START,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAILURE,
	LOGIN_USER_START,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILURE,
	PERSIST_USER
} from "./index";

export const persistUser = id => dispatch => {
	dispatch({
		type: PERSIST_USER,
		payload: id
	});
};

export const registerUser = creds => dispatch => {
	dispatch({
		type: REGISTER_USER_START
	});

	const { firstName, lastName, username, email, password } = creds;

	const newUser = {
		firstName,
		lastName,
		username,
		email,
		password
	};

	return axios
		.post(
			"https://weight-lifting-journal.herokuapp.com/api/auth/register",
			newUser
		)
		.then(res => {
			localStorage.setItem("token", res.data.token);

			dispatch({
				type: REGISTER_USER_SUCCESS,
				payload: res.data.token
			});

			history.push("/");
		})
		.catch(err => {
			dispatch({
				type: REGISTER_USER_FAILURE,
				payload: err.response.data
			});
		});
};

export const loginUser = creds => dispatch => {
	dispatch({
		type: LOGIN_USER_START
	});
	return axios
		.post(
			"https://weight-lifting-journal.herokuapp.com/api/auth/login",
			creds
		)
		.then(res => {
			localStorage.setItem("token", res.data.token);

			dispatch({
				type: LOGIN_USER_SUCCESS,
				payload: res.data.token
			});

			history.push("/");
		})
		.catch(err => {
			dispatch({
				type: LOGIN_USER_FAILURE,
				payload: err.response.data.message
			});
		});
};
