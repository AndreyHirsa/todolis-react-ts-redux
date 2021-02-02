import { ADD_TODO } from "redux/actions/addTodoAction";
import { ITodo } from "./ITodo";

export interface IAddTodo {
  type: typeof ADD_TODO,
  payload: ITodo
}
