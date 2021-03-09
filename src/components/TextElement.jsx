import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	buyCake,
	returnCake,
	buyIcecream,
	buyMultipleIcecreams,
	fetchUsers,
	alterUserData,
} from "../redux";
const TextElement = () => {
	const [persons, setPersons] = useState([]);
	const numOfCakes = useSelector(state => state.cake.numOfCakes);
	const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams);
	// const getData = useSelector(async state => await state.user)
	// 	.then(resp => setPersons(resp.users))
	// 	.catch(err => err.message);
	const getData = useSelector(state => state.user.users);

	const dispatch = useDispatch();
	const fetchHandler = () => {
		dispatch(fetchUsers());
	};
	return (
		<div>
			<p>Number of cakes - {numOfCakes}</p>
			<p>Number of icecreams - {numOfIcecreams}</p>
			<button onClick={() => dispatch(buyCake())}>Buy cake</button>
			<button onClick={() => dispatch(returnCake())}>Return cake</button>
			<button onClick={() => dispatch(buyIcecream())}>Buy icecream</button>
			<button onClick={() => dispatch(buyMultipleIcecreams(5))}>
				Buy 5 icecreams
			</button>

			<button onClick={fetchHandler}> fetchni users</button>
			{/* <button onClick={() => dispatch(fetchHandler)}> fetchni users</button> //this worked lol */}
			{/* <button onClick={() => dispatch(fetchUsers())}> fetchni users</button> */}
			<button onClick={() => dispatch(alterUserData(["Pavel", "Bara"]))}>
				Alter data
			</button>

			{getData.map((el, index) => (
				<div key={index}>{el.name}</div>
			))}
		</div>
	);
};

export default TextElement;
