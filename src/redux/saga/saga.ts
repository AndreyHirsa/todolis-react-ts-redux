import {takeEvery,call,put} from "redux-saga/effects";
import {rsf} from "../../index";

import {putData} from "../actions/PUT_DATA";
import {LOAD_DATA} from "../actions/LOAD_DATA";


function* getTodos() {
    const data = yield call(rsf.database.read, 'todos');
    yield put(putData(Object.keys(data).map((key)=>data[key])))
}

export function* watchLoadData(){
  yield takeEvery(LOAD_DATA,getTodos);
}