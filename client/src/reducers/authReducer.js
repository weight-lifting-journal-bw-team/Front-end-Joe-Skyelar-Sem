import {
	REGISTER_USER_START,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAILURE,
	LOGIN_USER_START,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILURE,
	PERSIST_USER,
	GET_CURRENT_USER_START,
	GET_CURRENT_USER_SUCCESS,
	GET_CURRENT_USER_FAILURE
} from "../actions";

const initialState = {
	token: localStorage.getItem("token"),
	currentUserId: null,
	currentUser: null,
	fetching: false,
	errors: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case PERSIST_USER:
			return {
				...state,
				currentUserId: action.payload
			};
		case GET_CURRENT_USER_START:
			return {
				...state
			};

		case GET_CURRENT_USER_SUCCESS:
			return {
				...state,
				currentUser: action.payload
			};
		case GET_CURRENT_USER_FAILURE:
			return {
				...state,
				fetching: false,
				errors: action.payload
			};
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
				fetching: false,
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
