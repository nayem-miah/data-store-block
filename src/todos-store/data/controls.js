import { types } from "./types"

export const fetchTodos = () => {
    return {
        type: types?.FETCH_TODO
    }
}

export default {
    FETCH_TODO() {
        return window.fetch(
			'https://jsonplaceholder.typicode.com/todos?_limit=10'
        ).then((response)=>  response.json()
            
        );
    }
};