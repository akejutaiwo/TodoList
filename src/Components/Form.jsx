import React from 'react'

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

  const textHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([ 
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000  }
    ]); 
    setInputText('');
  }
  const statusHandler = (e) => {
    setStatus(e.target.value )
  }
  return (
    <form action="">
        <input value={inputText} onChange={textHandler} type='text' className='t-input' />
        <button onClick={submitHandler} className ='t-button' type='submit' >
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={ statusHandler } name="todos" id="" className="t-filter">
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='uncompleted'>Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form