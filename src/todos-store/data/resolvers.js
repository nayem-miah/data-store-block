import { types } from "./types";
import { populateToDo, addTodo } from './actions';



export function* getTodos() {
    const todos = yield {
        type: types?.FETCH_TODO,
    };
    yield populateToDo(todos)
    
    
}



export function* createNewTodo( title ) {
	console.log( 'createNewTodo called with title:', title ); // 👈 Check here

	const todo = yield {
		type: types.CREATE_TODO,
		title,
	};

	console.log( 'Returned from API:', todo ); // 👈 See if API returned anything

	yield addTodo( todo );
}
