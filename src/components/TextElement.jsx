import { useSelector, useDispatch } from "react-redux";
import {
	buyCake,
	buyIcecream,
	buyMultipleIcecreams,
	fetchUsers,
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
			<button onClick={() => dispatch(buyIcecream())}>Buy icecream</button>
			<button onClick={() => dispatch(buyMultipleIcecreams(5))}>
				Buy 5 icecreams
			</button>
			<button onClick={() => dispatch(fetchUsers())}> fetchni users</button>
		</div>
	);
};

export default TextElement;
