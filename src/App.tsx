import React, { useEffect } from "react";
import { TodoContainer } from "./components/TodoContainer/TodoContainer";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { useDispatch } from "react-redux";
import { loadData } from "./redux/actions/loadDataAction";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  });

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
