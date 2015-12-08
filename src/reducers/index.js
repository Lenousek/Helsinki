import {List, Map} from 'immutable';
import uuid from 'node-uuid';

import { ADD_TODO } from '../actions/todo-actions';

const defaultState = Map({
    todos: List.of(
    {
        text: 'Get 100 litres of battery acid',
        done: true
    },
    {
        text: 'Acquire gardening tools',
        done: false
    },
    {
        text: 'Carve up the "meat"',
        done: true
    }

).map(todo => {

    return {
        ...todo,
        id: uuid.v4()
    };
    })

});


export default function(state=defaultState, action){

    console.log(action, "GETTING SOME ACTION");
    switch(action.type) {

        case ADD_TODO:
            return state.update('todos', todos => todos.push(action.payload));
            break;

        default:
            return state;
    }
    };



