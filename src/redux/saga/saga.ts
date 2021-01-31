import {takeEvery,call,put} from "redux-saga/effects";
import {rsf} from "../../index";
import {ITodo, TodosActionTypes} from "../../interfaces/types";





export const LOAD_DATA='LOAD_DATA';
export const PUT_DATA='PUT_DATA';


export  const loadData=()=>{
    return{
        type:LOAD_DATA,
    }
}

export const putData=(dataFromServer:ITodo[]):TodosActionTypes=>{
    return{
        type:PUT_DATA,
        payload:dataFromServer
    }
}


function* getTodos() {
    const data = yield call(rsf.database.read, 'todos');
    yield put(putData(Object.keys(data).map((key)=>data[key])))
}




export function* watchLoadData(){
  yield takeEvery(LOAD_DATA,getTodos);
}