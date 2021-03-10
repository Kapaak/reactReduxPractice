import { useSelector, useDispatch } from "react-redux";
import {
	buyCake,
	returnCake,
	buyIcecream,
	buyMultipleIcecreams,
	fetchUsers,
	alterUserData,
	deleteUserData,
} from "../redux";
const TextElement = () => {
	const numOfCakes = useSelector(state => state.cake.numOfCakes);
	const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams);
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
			<button
				onClick={() =>
					dispatch(alterUserData([{ title: "Pavel" }, { title: "Bar" }]))
				}
			>
				Alter data
			</button>
			<button onClick={() => dispatch(deleteUserData())}>
				Delete all user data
			</button>

			{getData?.map((el, index) => (
				<div key={index}>{el.title}</div>
			))}
		</div>
	);
};

export default TextElement;
