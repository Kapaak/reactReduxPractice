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
	const numOfCakes = useSelector(state => state.cake.numOfCakes);
	const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams);

	const dispatch = useDispatch();

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
			<button onClick={() => dispatch(fetchUsers())}> fetchni users</button>
			<button onClick={() => dispatch(alterUserData(["Pavel", "Bara"]))}>
				Alter data
			</button>
		</div>
	);
};

export default TextElement;
