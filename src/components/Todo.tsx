import { useDispatch } from "react-redux";
import { ITodoProps} from "../interfaces/ITodoProps";
import { deleteTodo } from "../redux/actions/DELETE_TODO";
import { updateTodo } from "../redux/actions/UPDATE_TODO";
import React from "react";


export const Todo: React.FC<ITodoProps> = ({
  todoName,
  key,
  completed,
  todo,
  index,
}) => {

  let dispatch = useDispatch();

  return (
    <div className="todo">
      <span>{index + 1}</span>
      <span className={`todoName ${todo.completed ? "completed" : ""}`}>
        {todoName}
      </span>
      <button
        className="button__complete_task"
        onClick={() => dispatch(updateTodo(todo.id))}
      >
        <i className={`fas ${todo.completed ? "fa-plus" : "fa-check"}`} />
      </button>
      <button
        className="button__delete_task"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        <i className="fas fa-times" />
      </button>
    </div>
  );
};
