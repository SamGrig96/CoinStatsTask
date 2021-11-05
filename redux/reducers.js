import {ADD_TODO, UPDATE_TODO, DELETE_TODO, GET_ALL_LIST, GET_BY_ID} from './actions.js'
import {todos} from './state'

export let reducers = (state = todos, action) => {

    let newTodos;

    switch (action.type) {
        case GET_BY_ID:
            newTodos = [...state];
            newTodos = [...action.payload]
            return newTodos
        case GET_ALL_LIST:
            newTodos = [...state];
            newTodos = [...action.payload]
            return newTodos
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload)
            return newTodos
        case DELETE_TODO:
            console.log(action.payload, 'fddss')
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id !== action.payload.id);
            return newTodos;
        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i]._id === action.payload._id)
                    break
            }
            if (index !== -1) {
                newTodos[index] = action.payload;
            }
            return newTodos
            break
    }
    return state
}


