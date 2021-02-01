import { takeEvery, call, put } from "redux-saga/effects";
import { rsf } from "../../services/fireBaseService";
import { putData } from "../actions/putDataAction";
import { LOAD_DATA } from "../actions/loadDataAction";
import { DELETE_TODO } from "../actions/deleteTodoAction";
import { UPDATE_TODO } from "../actions/updateTodoAction";
import { TodosActionTypes } from "../../interfaces/TodosActionTypes";

function* getTodos() {
  try {
    const data = yield call(rsf.database.read, 'todos');
    yield put(putData(Object.keys(data).map((key) => data[key])));
  } catch {
    yield put(putData([]));
  }
}

function* setTodoStatus(action: TodosActionTypes) {
  if (action.type === DELETE_TODO) {
    yield call(rsf.database.delete, `todos/${action.payload.id}`);
  } else if (action.type === UPDATE_TODO) {
    yield call(rsf.database.patch, `todos/${action.payload.id}`, {
      completed: !action.payload.completed,
    });
  }
}

export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, getTodos);
  yield takeEvery(DELETE_TODO, setTodoStatus);
  yield takeEvery(UPDATE_TODO, setTodoStatus);
}
