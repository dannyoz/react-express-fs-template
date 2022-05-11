import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList.lazy';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
