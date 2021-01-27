import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from './Todo'



export const TodoContainer=()=>{

    let todos=useSelector(state=>state)
    
    return(
        <div className="todoContainer">
            {todos.map((todo,index)=>{
                return <Todo index={index} key={todo.id} todo={todo} todoName={todo.todoName} completed={todo.completed}/>
            })}
        </div>
    )
}