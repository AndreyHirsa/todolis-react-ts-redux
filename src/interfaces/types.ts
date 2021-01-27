
import {ADD_TODO,DELETE_TODO,UPDATE_TODO} from '../redux/actions/actions'
 

export interface ITodo{
    todoName:string,
    completed:boolean,
    id?:any
}

export interface IAddTodo{
    type: typeof ADD_TODO
    payload:ITodo
}

export interface IDeleteTodo{
    type: typeof DELETE_TODO
    payload:{
        id:any
    }
}

export interface IUpdateTodo{
    type: typeof UPDATE_TODO
    payload:{
        id:any
    }
}

export type TaskActionTypes= IUpdateTodo | IAddTodo | IDeleteTodo