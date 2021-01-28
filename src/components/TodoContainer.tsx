import React from "react";
import { useSelector } from "react-redux";
import { ITodo } from "../interfaces/types";
import { Todo } from "./Todo";

export const TodoContainer: React.FC = () => {
  let todos = useSelector((state: ITodo[]) => state);

  return (
    <div className="todoContainer">
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
