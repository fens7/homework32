import React from 'react'
import TodoList from './ui/Todo/TodoList';
import Footer from './ui/Footer'

function App() {
  return (
    <div className='page-container'>
        <div className='content-wrap'>
            <TodoList/>
        </div> 
        <Footer/>
    </div>
  )
}

export default App;