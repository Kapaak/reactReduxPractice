import { BUY_ICECREAM } from "./icecreamTypes";

export const buyIcecream = () => {
	return {
		type: BUY_ICECREAM,
		payload: 1,
	};
};
export const buyMultipleIcecreams = number => {
	return {
		type: BUY_ICECREAM,
		payload: number,
	};
};
