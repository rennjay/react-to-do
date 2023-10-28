import './App.css';
import {React, useEffect, useState} from 'react';
import ListOfTask from './components/ListOfTask';


function App() {
let [todoList, setTodoList] = useState([]);

  useEffect(() => {

  fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    setTodoList(data);
  });
  },[]);

  const handleCompleteTodo = (event, todo) => {
    const updatedTodoList = todoList.map((item) => {
      if(todo.id === item.id)
      {
        return {...todo, isCompleted: !todo.isCompleted};
      }
      return item;
    });
    setTodoList(updatedTodoList);
    console.log('Todo processed!',todo);
  };

  return (
    <main className='max-w-xl mx-auto mt-5'>
    <h1 className='text-5xl text-center bg-green-600 p-5 rounded text-white'>Your To-Do List</h1>
    <ListOfTask todoList={todoList} handleCompleteTodo={handleCompleteTodo}/>
    </main>
  );
}

export default App;
