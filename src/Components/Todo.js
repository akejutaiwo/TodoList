import React from 'react'

const Todo = ({ text, todos, setTodoss  }) => {
    const deleteHandler = ()=>{
         
    }
  return (
    <div className="todo">
        <li className="todo-item">{text  } </li>
        <button className='complete-btn' >
        <i  className="fa fa-check"></i> 
        </button>
        <button onClick={deleteHandler} className='trash-btn'>
        <i  className="fa fa-trash"></i>
        </button>
    </div>
  )
}

export default Todo