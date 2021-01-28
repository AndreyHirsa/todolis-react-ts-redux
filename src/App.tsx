import React from "react";
import "./App.css";
import { TodoContainer } from "./components/TodoContainer";
import { TodoForm } from "./components/TodoForm";

const App: React.FC = () => {

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
