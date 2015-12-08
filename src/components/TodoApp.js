import React from 'react';
import todos from '../todos';
import TodoList from './TodoList';
import {List} from 'immutable';
import TodoForm from './TodoForm';

export default class TodoApp extends React.Component {


    render() {

        const { todos, addTodo } = this.props;

        console.log(this.props);

        return (
            <div>
            <TodoList
                onRemove={this.removeTodo.bind(this)}
                onToggle={this.removeTodo.bind(this)}
                todos ={todos}
            />

            <TodoForm onAdd={addTodo} />

            </div>
            );
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.remove(
                this.state.todos.findIndex(t => t.id === id)
                )
        });

    }
}
