import firebase from "firebase";
import ReduxSagaFirebase from "redux-saga-firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdyFVkjVf9ouBKIL9aSC8r7YhVkO-S4-k",
  authDomain: "todo-react-ts-redux.firebaseapp.com",
  projectId: "todo-react-ts-redux",
  storageBucket: "todo-react-ts-redux.appspot.com",
  messagingSenderId: "610292566077",
  appId: "1:610292566077:web:16b086706d7910d8c48254",
};
// Initialize Firebase

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const rsf = new ReduxSagaFirebase(firebaseApp);
