import {DELETE_TODO} from "../redux/actions/DELETE_TODO";

export interface IDeleteTodo {
    type: typeof DELETE_TODO;
    payload: {
        id: number;
    };
}