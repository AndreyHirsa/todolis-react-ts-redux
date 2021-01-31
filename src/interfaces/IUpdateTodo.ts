import {UPDATE_TODO} from "../redux/actions/UPDATE_TODO";

export interface IUpdateTodo {
    type: typeof UPDATE_TODO;
    payload: {
        id: number;
    };
}