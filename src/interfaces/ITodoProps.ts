import {ITodo} from "./ITodo";

export interface ITodoProps {
    todoName: string;
    key: number;
    completed: boolean;
    todo: ITodo;
    index: number;
}