import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filterTodos }) => {
  console.log(todos)
  return (
    <div className="t-container">
      <ul className="t-list">
       {filterTodos.map(todo => (
        <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} /> 
       ))}
      </ul>
    </div>
  )
}

export default TodoList