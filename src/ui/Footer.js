import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTasks } from '../engine/todos/thunk/deleteItems';
import { todosSelectors } from '../engine/todos/TodoSelector';

function Footer() {
    const todos = useSelector(todosSelectors.todos)
    
    const dispatch = useDispatch()
    const removeTodos = () => {
        dispatch(removeTasks())
    }
    
    return (
    <div className='footer'>
        <span style={{fontSize: '34px'}}>Tasks: {todos.length}</span>
        <button onClick={removeTodos}>Delete all tasks</button>
    </div>
  )
}

export default Footer