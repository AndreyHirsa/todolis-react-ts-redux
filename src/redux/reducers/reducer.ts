import { todos } from "../states/states";
import { ADD_TODO } from "../actions/ADD_TODO";
import { DELETE_TODO } from "../actions/DELETE_TODO";
import { UPDATE_TODO } from "../actions/UPDATE_TODO";
import { ITodo, TodosActionTypes } from "../../interfaces/types";

export function Reducer(state = todos, action: TodosActionTypes): ITodo[] {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    default:
      return state;
  }
}
