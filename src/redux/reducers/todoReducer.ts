import { todos } from "redux/states/states";
import { ADD_TODO } from "redux/actions/addTodoAction";
import { DELETE_TODO } from "redux/actions/deleteTodoAction";
import { UPDATE_TODO } from "redux/actions/updateTodoAction";
import { ITodo } from "interfaces/ITodo";
import { TodosActionTypes } from "interfaces/TodosActionTypes";
import { PUT_DATA } from "redux/actions/putDataAction";

export function todoReducer(state = todos, action: TodosActionTypes): ITodo[] {
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
    case PUT_DATA:
      return action.payload;
    default:
      return state;
  }
}
