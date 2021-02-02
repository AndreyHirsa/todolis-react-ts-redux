import { ITodo } from "interfaces/ITodo";
import { TodosActionTypes } from "interfaces/TodosActionTypes";

export const ADD_TODO = 'ADD_TODO';

export const addTodo = (todo: ITodo): TodosActionTypes => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}
