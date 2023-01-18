import './TodoList.css';

function TodoItem({todos}) {
    return (
        <div className='todo-item__wrapper'>
            {todos.map((todo) => (
                <label key={todo.id} className='todo-item'>
                    {todo.desc}
                </label>
            ))}
        </div>
    );
}

export default TodoItem;