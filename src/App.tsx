import React, {useEffect} from "react";
import "./App.css";
import { TodoContainer } from "./components/TodoContainer";
import { TodoForm } from "./components/TodoForm";
import {useDispatch} from "react-redux";
import {loadData} from "./redux/actions/LOAD_DATA";

const App: React.FC = () => {

  const dispatch=useDispatch()

  useEffect(()=>{
      dispatch(loadData());
  })

  return (
    <div className="wrapper">
      <div className="inner">
        <TodoForm />
        <TodoContainer />
      </div>
    </div>
  );
};

export default App;
