import React from 'react';
import './TodoForm.css';

const TodoForm = props => {
    const [value, setValue] = React.useState("");
    const handleOnSubmit = e => {
      e.preventDefault();
      props.onAddTodo(value);
      setValue("");
    };
    return (
      <form onSubmit={handleOnSubmit} class='Form-container'>
        <input 
          class='Form-input'
          placeholder={"Enter a new task"}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  };

export default TodoForm;
