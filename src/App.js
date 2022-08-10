import React, { useState } from "react";
import './App.css';
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos]= useState([]);
  const [status, setStatus] = useState('all')
  return (
    <div className="App">
      hakeles
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
