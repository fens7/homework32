import React from 'react'
import TodoList from './component/Todo/TodoList';
import Footer from './Footer';


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