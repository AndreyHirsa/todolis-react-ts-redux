import React from 'react';
import firebase from 'firebase'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { store } from './redux/store/store';
import ReduxSagaFirebase from "redux-saga-firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdyFVkjVf9ouBKIL9aSC8r7YhVkO-S4-k",
  authDomain: "todo-react-ts-redux.firebaseapp.com",
  projectId: "todo-react-ts-redux",
  storageBucket: "todo-react-ts-redux.appspot.com",
  messagingSenderId: "610292566077",
  appId: "1:610292566077:web:16b086706d7910d8c48254"
};
// Initialize Firebase
export const firebaseApp=firebase.initializeApp(firebaseConfig);
export const rsf = new ReduxSagaFirebase(firebaseApp)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
