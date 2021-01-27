import {todos} from '../states/states'
import {ADD_TODO,DELETE_TODO,UPDATE_TODO} from '../actions/actions'




export function reducer(state=todos,action){
    switch(action.type){
        case ADD_TODO:
            return [...state,action.payload]
        case DELETE_TODO:
            return state.filter(todo=>todo.id!==action.payload)
        case UPDATE_TODO:
            return state.map(todo=>{
                if(todo.id===action.payload){
                    return {
                        ...todo,completed:!todo.completed
                    }
                }
                return todo;
                })
        default:
            return state;
    }
}

