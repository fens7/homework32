import './TodoList.css';
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { useDispatch } from 'react-redux';
import { addItem } from '../../engine/todos/thunk/addItem';

function TodoList() {
    const [value, setValue] = useState('');

    const dispatch = useDispatch()

    const addTask = (event) => {
        dispatch(addItem(event, value, setValue))
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
            <TodoItem/>
        </>
    );
}

export default TodoList;