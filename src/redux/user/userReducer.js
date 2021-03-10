import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	users: [],
	error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/posts"
	);
	return response.data;
});

const userReducer = createSlice({
	name: "user",
	initialState,
	reducers: {
		alterUserData(state, action) {
			state.users = action.payload;
			state.loading = false;
			state.error = "";
		},
		deleteUserData(state, action) {
			delete state.users;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, (state, action) => {
				state.loading = true;
				state.error = "hi from extraReducer";
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.loading = false;
				state.users = action.payload;
				state.error = "fullfilled extraReducer baby!";
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.loading = false;
				state.users = [];
				state.error = action.payload;
			});
	},
});

export const { alterUserData, deleteUserData } = userReducer.actions;
export default userReducer.reducer;
