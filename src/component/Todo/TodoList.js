import './TodoList.css';
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { addTodo } from './todoSlice';
import { useSelector, useDispatch } from 'react-redux';

function TodoList() {
    const [value, setValue] = useState('');

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos);

    const addTask = (e) => {
        e.preventDefault()
        dispatch(addTodo([...todos, {
            id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
            desc: value
        }]))
        setValue('')
    }

    return (
        <>
            <div className='App'>
                <div className='todo-logic'>
                    <form action='#' onSubmit={addTask}>
                        <h1>Todo List</h1>
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            type={'text'}
                            placeholder={'Type new task...'}
                        />
                        <button disabled={value.length < 1}>Add Task</button>
                        <br></br>
                        <br></br>
                    </form>
                </div>
            </div>
            <TodoItem todos={todos}/>
        </>
    );
}

export default TodoList;