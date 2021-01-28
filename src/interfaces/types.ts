import { ADD_TODO } from "../redux/actions/ADD_TODO";
import { DELETE_TODO } from "../redux/actions/DELETE_TODO";
import { UPDATE_TODO } from "../redux/actions/UPDATE_TODO";

export interface ITodoProps {
  todoName: string;
  key: number;
  completed: boolean;
  todo: ITodo;
  index: number;
}

export interface ITodo {
  todoName: string;
  completed: boolean;
  id: number;
}

export interface IAddTodo {
  type: typeof ADD_TODO;
  payload: ITodo;
}

export interface IDeleteTodo {
  type: typeof DELETE_TODO;
  payload: {
    id: number;
  };
}

export interface IUpdateTodo {
  type: typeof UPDATE_TODO;
  payload: {
    id: number;
  };
}

export type TodosActionTypes = IUpdateTodo | IAddTodo | IDeleteTodo;
