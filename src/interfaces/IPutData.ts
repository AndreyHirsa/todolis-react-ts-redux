import { PUT_DATA } from "../redux/actions/putDataAction";
import { ITodo } from "./ITodo";

export interface IPutData {
  type: typeof PUT_DATA;
  payload: ITodo[]
}
