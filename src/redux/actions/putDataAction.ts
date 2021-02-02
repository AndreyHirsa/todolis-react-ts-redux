import { ITodo } from "interfaces/ITodo";
import { TodosActionTypes } from "interfaces/TodosActionTypes";

export const PUT_DATA = 'PUT_DATA';

export const putData = (dataFromServer: ITodo[]): TodosActionTypes => {
  return {
    type: PUT_DATA,
    payload: dataFromServer
  }
}
