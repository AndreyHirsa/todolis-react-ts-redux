import { ITodo, TodosActionTypes } from "../../interfaces/types";

export const ADD_TODO = "ADD_TODO";

export const addTodo=(todo:ITodo):TodosActionTypes=> {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}