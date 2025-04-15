import { fetchTodos} from "./controls"

export function* getTodos() {
    const todos = yield fetchTodos()
    console.log(todos)
}