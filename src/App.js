import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
   
  const [inputText, setInputText] = useState('')
  const [todos, setTodos]= useState([]);
  const [status, setStatus] = useState('all ')
  const [filterTodos, setFilterTodos] = useState([]);
  
  useEffect(()=>{
    getLocalTodos();
  },[]);

  useEffect(() => {
    filterHandler();
    localTodos();
  },[todos, status])

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
      setFilterTodos(todos)
      break;
    }
  };

  const localTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
     }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
     }
  }
  return (
    <div className="App">
      hakeles
      <Form 
        setStatus={ setStatus } 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
      
      />

      <TodoList filterTodos={filterTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
