import {
	REGISTER_USER_START,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAILURE,
	LOGIN_USER_START,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILURE
} from "../actions";

const initialState = {
	token: localStorage.getItem("token"),
	fetching: false,
	errors: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_USER_START:
			return {
				...state,
				fetching: true,
				errors: null
			};
		case REGISTER_USER_SUCCESS:
			return {
				...state,
				token: action.payload,
				fetching: false,
				errors: null
			};
		case REGISTER_USER_FAILURE:
			return {
				...state,
				errors: action.payload
			};
		case LOGIN_USER_START:
			return {
				...state,
				fetching: true,
				errors: null
			};
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				token: action.payload,
				fetching: false,
				errors: null
			};
		case LOGIN_USER_FAILURE:
			return {
				...state,
				fetching: false,
				errors: action.payload
			};
		default:
			return state;
	}
};
