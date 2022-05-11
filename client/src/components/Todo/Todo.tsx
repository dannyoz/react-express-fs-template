import React, { FC } from 'react';
import { TodoItem } from '../TodoList/TodoList';
import styles from './Todo.module.scss';

interface TodoProps extends TodoItem {
  
}

const Todo: FC<TodoProps> = (todo) => (
  <div className={styles.Todo}>
    {todo.name}
  </div>
);

export default Todo;
