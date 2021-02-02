import { DELETE_TODO } from "redux/actions/deleteTodoAction";

export interface IDeleteTodo {
  type: typeof DELETE_TODO,
  payload: {
    id: number
  }
}
