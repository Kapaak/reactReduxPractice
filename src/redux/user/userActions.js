import axios from "axios";
import {
	FETCH_USERS_FAILURE,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_REQUEST,
	ALTER_USER_DATA,
} from "./userTypes";

export const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUEST,
	};
};
export const fetchUsersSuccess = users => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users,
	};
};
export const fetchUsersFailure = error => {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error,
	};
};

export const alterUserData = newData => {
	return {
		type: ALTER_USER_DATA,
		payload: newData,
	};
};

export const fetchUsers = () => {
	return dispatch => {
		dispatch(fetchUsersRequest());
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then(response => {
				const data = response.data;
				dispatch(fetchUsersSuccess(data));
			})
			.catch(error => {
				const err = error.message;
				dispatch(fetchUsersFailure(err));
			});
	};
};
