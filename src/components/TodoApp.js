import React from 'react';
import todos from '../todos';
import TodoList from './TodoList';
import {List} from 'immutable';
import TodoForm from './TodoForm';

export default class TodoApp extends React.Component {


    render() {

        const { todos, addTodo, removeTodo, toggleTodo } = this.props;

        console.log(this.props);

        return (
            <div>
            <TodoList
                onRemove={removeTodo}
                onToggle={toggleTodo}
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

    toggleTodo(id)  {
        this.setState({
            todos: this.state.todos.toggle(

                )
            });
        }
}
