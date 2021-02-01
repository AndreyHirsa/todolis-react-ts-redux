import { useDispatch } from "react-redux";
import { ITodoProps } from "../../interfaces/ITodoProps";
import { deleteTodo } from "../../redux/actions/deleteTodoAction";
import { updateTodo } from "../../redux/actions/updateTodoAction";
import React from "react";
import { TodoStyles } from "./TodoStyles";

export  const Todo: React.FC<ITodoProps> = ({ todoName, todo, index }) => {
  let dispatch = useDispatch();

  return (
    <div style={TodoStyles.todoContainer}>
      <span>{index + 1}</span>
      <span style={todo.completed ? {...TodoStyles.todoTitle,...TodoStyles.completed} : TodoStyles.todoTitle}>
        {todoName}
      </span>
      <button onClick={() => dispatch(updateTodo(todo.id, todo.completed))}>
        <i className={`fas ${todo.completed ? 'fa-plus' : 'fa-check'}`} />
      </button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>
        <i className='fas fa-times' />
      </button>
    </div>
  );
};
