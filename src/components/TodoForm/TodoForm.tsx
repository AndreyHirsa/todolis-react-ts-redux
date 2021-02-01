import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/addTodoAction";
import firebase from "firebase";
import { ITodo } from "../../interfaces/ITodo";
import React from "react";
import { Form, InputText, ButtonAdd, Disabled } from "./TodoFormStyles";

export const TodoForm: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [buttonState, setButtonState] = useState(true);

  let dispatch = useDispatch();

  const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setInputText(value);
    value.trim() ? setButtonState(false) : setButtonState(true);
  };

  const addTodoHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const newTodo: ITodo = {
      todoName: inputText,
      id: new Date().getTime(),
      completed: false,
    };

    dispatch(addTodo(newTodo));

    firebase
      .database()
      .ref()
      .child('todos')
      .child(`${newTodo.id}`)
      .set(newTodo);

    setInputText('');
    setButtonState(true);
  };

  return (
    <form style={Form}>
      <input
        style={InputText}
        value={inputText}
        onChange={inputTextHandler}
        type='text'
      />
      <button
        disabled={buttonState}
        onClick={addTodoHandler}
        style={buttonState ? { ...ButtonAdd, ...Disabled } : ButtonAdd}
        type='submit'
      >
        ADD
      </button>
    </form>
  );
};
