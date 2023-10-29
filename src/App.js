import './App.css';
import {React, useEffect, useState} from 'react';
import ListOfTask from './components/ListOfTask';
import TodoForm from './components/TodoForm';


function App() {
let [todoList, setTodoList] = useState([]);
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");

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

  const handleAddTodo = (e) => {
    e.preventDefault();
    let latestId = todoList.reduce((max, current) => {
      let maxValue = max;
      let currentValue = Number(current.id);
      return maxValue < currentValue ? currentValue: maxValue;
    },0);
    
    const newTodo =  {
      id: ++latestId,
      title: title,
      description: description,
      isCompleted: false,
      completionDate: null
    };
    const updatedList = [...todoList,newTodo];
    setTodoList(updatedList);
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <main className='max-w-3xl mx-auto mt-5'>
    <h1 className='text-5xl text-center bg-green-600 p-5 rounded text-white'>Your To-Do List</h1>
    <div className='flex justify-between'>
      <section className="left p-3 w-full">
        <ListOfTask todoList={todoList} handleCompleteTodo={handleCompleteTodo}/>
      </section>
      <section className="right p-3 w-full">
        <TodoForm handleTodoAdd={handleAddTodo} 
        handleTitleChange={handleTitleChange} title={title} 
        handleDescriptionChange={handleDescriptionChange} description={description} />
      </section>
    </div>
    </main>
  );
}

export default App;
