import { TodosActionTypes } from "interfaces/TodosActionTypes";

export const DELETE_TODO = 'DELETE_TODO';

export const deleteTodo = (id: number): TodosActionTypes => {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  }
}
