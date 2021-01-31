import { TodosActionTypes} from "../../interfaces/TodosActionTypes";

export const UPDATE_TODO = "UPDATE__TODO";

export const updateTodo = (id:number):TodosActionTypes => {
  return {
    type: UPDATE_TODO,
    payload: {
      id,
    }
  };
}