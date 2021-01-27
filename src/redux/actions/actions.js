

export const ADD_TODO="ADD_TODO"


export function addTodo(todo){
    return{
        type:ADD_TODO,
        payload:todo,
    }
}

export const DELETE_TODO="DELETE_TODO"

export function deleteTodo(todoId){
    return{
        type:DELETE_TODO,
        payload:todoId,
    }
}


export const UPDATE_TODO="UPDATE__TODO"

export function updateTodo(todoId){
    return{
        type:UPDATE_TODO,
        payload:todoId,
    }
}