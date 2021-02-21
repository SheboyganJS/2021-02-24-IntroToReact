import React from 'react';
import './TodoList.css';
import Todo from './Todo';


const TodoList = props => {
    return <ul>
        {props.todos.map((todo) => {
            debugger;
            return <Todo {...props} todo={todo}></Todo>
        })}
    </ul>;
};

export default TodoList;
