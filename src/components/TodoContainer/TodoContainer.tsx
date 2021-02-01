import React from "react";
import { useSelector } from "react-redux";
import { ITodo } from "../../interfaces/ITodo";
import { Todo } from "../Todo/Todo";
import { TodoWrapper } from "./TodoContainerStyles";

export const TodoContainer: React.FC = () => {
  let todos = useSelector((state: ITodo[]) => state);
  return (
    <div style={TodoWrapper}>
      {todos.map((todo: ITodo, index: number) => {
        return (
          <Todo
            index={index}
            key={todo.id}
            todo={todo}
            todoName={todo.todoName}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
};
