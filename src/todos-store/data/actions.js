import { types } from './types';

// Adds a single todo to the store
export function addTodo(addNewTodo) {  //step 1
	return {
		type: types?.ADD_TODO,
		addNewTodo,
	};
}

// Populates the store with a list of todos (from an API fetch)
export const populateToDo = ( todos ) => {
	return {
		type: types?.POPULATE_TODO,
		todos,
	};
};


export const createTodo = (title) => ({
	type: types.CREATE_TODO,
	title,
});
