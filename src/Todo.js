import React from 'react';
import './Todo.css';

const Todo = props => {
    debugger;
  return (
    <li class='card'>
      <span class='text'>{props.todo}</span>
      <button class='button button-block' onClick={() => props.onRemoveTodo(props.todo)}>Jobs Done!</button>
    </li>
  );
};

export default Todo;
