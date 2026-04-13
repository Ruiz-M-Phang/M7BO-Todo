import { useState } from 'react'
import {Todolist} from './Todolist/Todolist.jsx';
import {Navbar} from './Navigatie/Navbar.jsx';
import {Todo} from './Todo/Todo.jsx';


 export function App() {
 

  return (
    <>
    
      <Navbar />
      <Todolist />

    </>
  )
}

export default App
