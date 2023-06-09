export default function TodoList({ todos, setTodos }) {
    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
          return currentTodos.map(todo => {
            if (todo.id === id) {
              return { ...todo, completed }
            }
    
            return todo;
          })
        })
    }
    
    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id);
        })
    }

    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                <li key={todo.id}>
                    <label>
                    <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                    {todo.title}
                    </label>
                    <button className="btn btn-danger" onClick={e => deleteTodo(todo.id)}>Delete</button>
                </li>
                )
            })}
        </ul>
    )
}