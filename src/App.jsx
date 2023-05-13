import { useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";


export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }
  
  return (
  <>
    <NewTodoForm addTodo={addTodo} />
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} setTodos={setTodos} />
  </>
)}