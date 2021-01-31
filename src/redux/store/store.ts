import { createStore,applyMiddleware } from "redux";
import { TodoReducer } from "../reducers/TodoReducer";
import createSagaMiddleware from 'redux-saga'
import {watchLoadData} from "../saga/saga";


const sagaMiddleware =createSagaMiddleware();

export const store = createStore(TodoReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchLoadData);
