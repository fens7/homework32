import './TodoList.css';
import { todosSelectors } from "../../engine/todos/TodoSelector"
import { useSelector } from 'react-redux';


function TodoItem() {
    const todos = useSelector(todosSelectors.todos)

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