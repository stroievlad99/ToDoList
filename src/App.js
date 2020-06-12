import React, { useState } from 'react';
import "./styles.css";


export default function App() {

    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([
        {id:1, text:"Learn React, specifically Hooks"},
        {id:2, text:"Create first app in react"}
    ]);

    function handleNewTodoChange(e) {

        e.preventDefault()
        setNewTodo(e.target.value);
        

    }

    function handleNewTodo(e) {

      e.preventDefault()
      if (newTodo === "") return alert("Task name is required!");
      setTodos([...todos, {id: Date.now(), text: newTodo }])
      e.target.reset()
      

    }

    function removeTodo(id){

        setTodos(todos.filter((todo) => todo.id !== id))
          
   
    } 

  
return (

    <div className="app-component">
        <h1 className="header">To-do list</h1>
    <form onSubmit={handleNewTodo}>
        <input placeholder="Your todo..." onChange={handleNewTodoChange}/>
        <ul className="todoList">
            {todos.map((todo) => ( 
                
                <li key={todo.id} className="todo" >

                  <span>{todo.text}</span>
                   <a href="#" className="deletebtn" onClick={() => removeTodo(todo.id)}>X</a>
                  
                </li>
            ))}
        </ul>
    </form>
    </div>
)

}