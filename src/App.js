import React from 'react';
import './App.css';
import Title from './Title';
import TodoForm from './TodoFrom';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const addTodo = aTodo => { setTodos([aTodo, ...todos]) };
  const removeTodo = aTodo => { setTodos(todos.filter(todo => todo !== aTodo)) };

  React.useEffect(() => {
    document.title = `You Have ${todos.length} todos!`;
  });

  return (
    <main>
      <Title></Title>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </main>
  );
};

export default App;
