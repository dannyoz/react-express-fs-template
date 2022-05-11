import React, { FC, useRef, useState } from 'react';
import styles from './TodoList.module.scss';
import Todo from '../Todo/Todo';

interface TodoListProps {}
export interface TodoItem {
  name: string;
  completed: boolean;
}

const initialTodos : TodoItem[] = [{
  name: 'Learn react',
  completed: true
}];

const TodoList: FC<TodoListProps> = () => {
  const [todos, setTodos] = useState(initialTodos);
  const todoInput = useRef<any>(null);

  const addTodo = () => {

    const newTodo: TodoItem = {
      name: todoInput.current!.value as unknown as string ,
      completed: false
    } 
    setTodos(prevState => [...prevState, newTodo]);
  }

  return (
    <div className={styles.TodoList}>
      TodoList Component
      {todos.map((todo, index) => <Todo key={index} name={todo.name} completed={todo.completed} />)}
      <input type="text" ref={todoInput}></input>
      <button onClick={addTodo}>Add</button>
    </div>
  )
};

export default TodoList;
