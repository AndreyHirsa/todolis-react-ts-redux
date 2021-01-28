import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/ADD_TODO";
import firebase from 'firebase';
import { ITodo } from "../interfaces/types";

export const TodoForm: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [buttonState, setButtonState] = useState(true);
  let dispatch = useDispatch();

  const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setInputText(value);
    value.trim() ? setButtonState(false) : setButtonState(true);
  };

  const addTodoEvent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    
    const newTodo:ITodo={
        todoName: inputText,
        id: Math.random(),
        completed: false,
    }

    dispatch(addTodo(newTodo))

    firebase.database().ref().child('todos').push(newTodo);

    setInputText("");
    setButtonState(true);
  };

  return (
    <form className="todoForm">
      <input
        value={inputText}
        onChange={inputTextHandler}
        className="todoName"
        type="text"
      />
      <button
        disabled={buttonState}
        onClick={addTodoEvent}
        className={`buttonAdd ${inputText.trim() ? "" : "disabled"}`}
        type="submit"
      >
        ADD
      </button>
    </form>
  );
};
