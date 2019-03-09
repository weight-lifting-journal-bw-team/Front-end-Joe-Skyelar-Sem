import {
	REGISTER_USER_START,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAILURE,
	LOGIN_USER_START,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILURE
} from "../actions";

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
