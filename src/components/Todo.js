import { useDispatch } from "react-redux"
import { deleteTodo, updateTodo } from "../redux/actions/actions"

export const Todo=({todoName,key,completed,todo,index})=>{
    let dispatch=useDispatch()
    return(
    <div className="todo">
    <span>{index + 1}</span>
    <span className={`todoName ${todo.completed?"completed":""}`}>{todoName}</span>
    <button  className="button__complete_task" onClick={()=>dispatch(updateTodo(todo.id))}>
        <i className={`fas ${todo.completed?"fa-plus":"fa-check"}`}/>
    </button>
    <button  className="button__delete_task" onClick={()=>dispatch(deleteTodo(todo.id))}>
        <i className="fas fa-times"/>
    </button>
</div>
   )
}