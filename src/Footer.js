import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodos } from './component/Todo/todoSlice';

function Footer() {
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()

    const removeTasks = () => dispatch(removeTodos())
    
    return (
    <div className='footer'>
        <span style={{fontSize: '34px'}}>Tasks: {todos.length}</span>
        <button onClick={removeTasks}>Delete all tasks</button>
    </div>
  )
}

export default Footer