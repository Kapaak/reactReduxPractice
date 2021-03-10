import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	numOfCakes: 10,
};

// const cakeReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case BUY_CAKE:
// 			return {
// 				...state,
// 				numOfCakes: state.numOfCakes - 1,
// 			};
// 		case RETURN_CAKE:
// 			return {
// 				...state,
// 				numOfCakes: state.numOfCakes + 1,
// 			};

// 		default:
// 			return state;
// 	}
// };

// export default cakeReducer;

const cakeReducer = createSlice({
	name: "cake",
	initialState,
	reducers: {
		buyCake(state, action) {
			let cakeState = state.numOfCakes - 1;
			state.numOfCakes = cakeState;
		},
		returnCake(state, action) {
			let cakeState = state.numOfCakes + 1;
			state.numOfCakes = cakeState;
		},
	},
});

export const { buyCake, returnCake } = cakeReducer.actions;
console.log(cakeReducer.actions, "akce");

export default cakeReducer.reducer;
