import {IAddTodo} from "./IAddTodo";
import {IDeleteTodo} from "./IDeleteTodo";
import {IPutData} from "./IPutData";
import {IUpdateTodo} from "./IUpdateTodo";

export type TodosActionTypes = IUpdateTodo | IAddTodo | IDeleteTodo | IPutData;