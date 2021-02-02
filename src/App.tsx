import React, { useEffect } from "react";
import { TodoContainer } from "components/TodoContainer/TodoContainer";
import { TodoForm } from "components/TodoForm/TodoForm";
import { useDispatch } from "react-redux";
import { loadData } from "redux/actions/loadDataAction";
import styles from "styles/App.module.css"

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <TodoForm />
        <TodoContainer />
      </div>
    </div>
  );
};

export default App;
