
import {  useState } from 'react';
import { Todo } from '../Todo/Todo';
import styles from './Todolist.module.css';
import { useEffect } from 'react';
i

 export function Todolist() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchedTodos = [
      { id: 1, text: 'Learn React' },
      { id: 2, text: 'Build a Todo App' },
      { id: 3, text: 'Master JavaScript' },
    ];
    setTodos(fetchedTodos);
  }, []);
  return (
    <div className={styles.todolist}>
      <h1>Todo list</h1>
      <ul>

        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <div>
      <h2>Add a new todo</h2>
        <input type="text" placeholder="Enter a new todo" />
        <button>Add</button>
     </div>
      </div>

  );
}

