import {ADD_TODO} from "../redux/actions/ADD_TODO";
import {ITodo} from "./ITodo";

export interface IAddTodo {
    type: typeof ADD_TODO;
    payload: ITodo;
}