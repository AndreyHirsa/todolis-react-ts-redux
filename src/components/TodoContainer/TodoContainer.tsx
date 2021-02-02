import React from "react";
import { useSelector } from "react-redux";
import { ITodo } from "interfaces/ITodo";
import { Todo } from "components/Todo/Todo";
import styles from "./TodoContainerStyles.module.css";

export const TodoContainer: React.FC = () => {
  let todos = useSelector((state: ITodo[]) => state);

  return (
    <div className={styles.todoWrapper}>
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
