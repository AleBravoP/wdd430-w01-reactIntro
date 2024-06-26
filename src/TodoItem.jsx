export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <labels>
            <input 
                type="checkbox" 
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
            />
            {title}
            </labels>
            <button 
            onClick={() => deleteTodo(id)} 
            className="btn btn-danger"
            >
            Delete
            </button>
        </li>
    )
}