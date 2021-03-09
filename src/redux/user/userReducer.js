import {
	FETCH_USERS_FAILURE,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_REQUEST,
	ALTER_USER_DATA,
} from "./userTypes";

const initialState = {
	loading: false,
	users: [],
	error: "",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_USERS_SUCCESS:
			return {
				loading: false,
				users: action.payload,
				error: "",
			};
		case FETCH_USERS_FAILURE:
			return {
				loading: false,
				users: [],
				error: action.payload,
			};
		case ALTER_USER_DATA:
			return {
				loading: false,
				users: action.payload,
				error: "",
			};

		default:
			return state;
	}
};

export default reducer;
