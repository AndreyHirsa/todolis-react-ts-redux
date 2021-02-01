import { createStore, applyMiddleware } from "redux";
import { todoReducer } from "../reducers/todoReducer";
import createSagaMiddleware from "redux-saga";
import { watchLoadData } from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(todoReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLoadData);
