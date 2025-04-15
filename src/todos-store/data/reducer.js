import { types } from "./types";

const DEFAULT_STATE = {
	items: [],
};
const reducer = (state = DEFAULT_STATE, action) => {  //step 2
	switch ( action.type ) {
		case types?.ADD_TODO:
			return { ...state, items: [ ...state.items, action.addNewTodo ] };
		
		case types?.POPULATE_TODO:
			return { ...state, items: action.todos }
		
		default:
			return state;
	}
};

export default reducer;
