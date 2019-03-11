import axios from "axios";

import {
	REGISTER_USER_START,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAILURE,
	LOGIN_USER_START,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILURE
} from "./index";

export const registerUser = creds => dispatch => {
	dispatch({
		type: REGISTER_USER_START
	});

	const { firstName, lastName, username, email, password } = creds;

	// Create newUser object to match db schema
	const newUser = {
		first_name: firstName,
		last_name: lastName,
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
			// set token in storage
			localStorage.setItem("token", res.data.token);

			dispatch({
				type: REGISTER_USER_SUCCESS,
				payload: res.data.token
			});
		})
		.catch(err => {
			dispatch({
				type: REGISTER_USER_FAILURE,
				payload: err.response.data.message
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
			// set token in storage
			localStorage.setItem("token", res.data.token);

			dispatch({
				type: LOGIN_USER_SUCCESS,
				payload: res.data.token
			});
		})
		.catch(err => {
			dispatch({
				type: LOGIN_USER_FAILURE,
				payload: err.response.data.message
			});
		});
};
