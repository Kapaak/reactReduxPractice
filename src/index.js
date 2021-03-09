import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { createStore } from "redux";

// const initialState = {
// 	value: 0,
// };
// const actionIncrement = () => {
// 	return {
// 		type: "INCREMENT",
// 	};
// };

// const incrementReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case "INCREMENT":
// 			return {
// 				...state,
// 				value: state.value + 1,
// 			};
// 		default:
// 			return state;
// 	}
// };

// const store = createStore(incrementReducer);
// store.subscribe(() => console.log(store.getState()));
// store.dispatch(actionIncrement());
// store.dispatch(actionIncrement());
// store.dispatch(actionIncrement());

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
