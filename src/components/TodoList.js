import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    const {todos, onRemove, onToggle} = props;

    console.log(props, "somtehing");

    return (
            <ul>
                {todos.map((todo,i) => {
                    return(
                        <Todo
                            key={i}
                            onToggle={onToggle}
                            onRemove={onRemove}
                            todo={todo}
                        />

                        );
                })}
            </ul>

        );

};

export default TodoList;
