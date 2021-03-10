import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	numOfIcecreams: 20,
};

const icecreamReducer = createSlice({
	name: "icecream",
	initialState,
	reducers: {
		buyIcecream(state, action) {
			let icecreamState = state.numOfIcecreams - 1;
			state.numOfIcecreams = icecreamState;
		},
		buyMultipleIcecreams(state, action) {
			let icecreamState = state.numOfIcecreams - action.payload;
			state.numOfIcecreams = icecreamState;
		},
	},
});

export const { buyIcecream, buyMultipleIcecreams } = icecreamReducer.actions;
export default icecreamReducer.reducer;
