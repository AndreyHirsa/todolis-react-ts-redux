import { UPDATE_TODO } from "redux/actions/updateTodoAction";

export interface IUpdateTodo {
  type: typeof UPDATE_TODO,
  payload: {
    id: number,
    completed: boolean
  }
}
