import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
  console.log(todos)
  return (
    <div className="t-container">
      <ul className="t-list">
       {todos.map(todo => (
        <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} /> 
       ))}
      </ul>
    </div>
  )
}

export default TodoList