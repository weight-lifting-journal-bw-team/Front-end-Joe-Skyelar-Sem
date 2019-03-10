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

	axios
		.post(
			"https://weight-lifting-journal.herokuapp.com/api/auth/register",
			newUser
		)
		.then(res => {
			// set token of new user in storage
			localStorage.setItem("token", res.data.token);

			dispatch({
				type: REGISTER_USER_SUCCESS,
				payload: res.data.token
			});
		})
		.catch(err => {
			console.log(err.response);
			dispatch({
				type: REGISTER_USER_FAILURE,
				payload: err.response.data.message
			});
		});
};
