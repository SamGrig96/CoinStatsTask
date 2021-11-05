// import axios from "axios"
import {firestore} from './config.js';

export const ADD_TODO = 'ADD_TODO '
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const GET_ALL_LIST = 'GET_ALL_LIST'
export const GET_BY_ID = 'GET_BY_ID'


export function getById() {
    // return function (dispatch) {
    //     axios.get(`https://todo.eachbase.com/api/SamvelGrigoryan/todos/:todoId`).then(res => {
    //         dispatch({
    //             type: GET_BY_ID,
    //             payload: res.data,
    //         })
    //     })
    // }
}


export function getTodoList() {
    return function (dispatch) {
        firestore.collection('message').get().then(snapshot => {
                const todos = snapshot.docs.map((doc, index) => {
                    return {
                        id: snapshot.docs[index].id || 0,
                        ...doc.data()
                    }
                })

                dispatch({
                    type: GET_ALL_LIST,
                    payload: todos
                })
            }
        )
    };

}

export function addTodo(todo) {
    const item = todo
    return function (dispatch) {
        firestore.collection('message').add(
            item
        ).then(
            dispatch({
                type: ADD_TODO,
                payload: todo,
            })
        )
    }
}


export function deleteTodo(todo) {
    console.log(todo,'toof')
    return function (dispatch) {
        firestore.collection('message').doc(`${todo.id}`).delete().then(
            dispatch({
                type: DELETE_TODO,
                payload: todo,
            })
        )
    }
}

export function updateTodo(todo) {
    return function (dispatch) {
        firestore.collection('message').doc(`${todo.id}`).set({id: todo.id, rate: todo.rate,name:todo.name}).then(
            dispatch({
                type: UPDATE_TODO,
                payload: todo,
            })
        )
    }
}