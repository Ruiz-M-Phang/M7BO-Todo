import styles from './Todo.module.css';

function Todo() {
  return (
    <div>
      <h1>Todo list</h1>
      <h2>Add a new todo</h2>
        <input type="text" placeholder="Enter a new todo" />
        <button>Add</button>
        
     </div>
  );
}