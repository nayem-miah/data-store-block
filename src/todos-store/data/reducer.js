import { types } from "./types";

const DEFAULT_STATE = {
	items: [],
};
const reducer = ( state = DEFAULT_STATE, action ) => {
	switch ( action.type ) {
		case types?.ADD_TODO:
			return { ...state, items: [ ...state.items, action.todo ] };
		default:
			return state;
	}
};

export default reducer;
