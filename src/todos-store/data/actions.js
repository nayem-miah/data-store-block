import { types } from "./types";
export const addTodo = (todo) => {
	return {
		type: types?.ADD_TODO,
		todo,
	};
};
