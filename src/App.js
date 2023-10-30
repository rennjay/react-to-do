import './App.css';
import {React, useEffect, useState, useRef} from 'react';
import ListOfTask from './components/ListOfTask';
import TodoForm from './components/TodoForm';


function App() {
let [todoList, setTodoList] = useState([]);
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const isEditMode = useRef(false);
const todoToUpdate = useRef(null);
const titleField = useRef(null);

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

  const clearForm = () => {
    setTitle('');
    setDescription('');
    isEditMode.current = false;
    todoToUpdate.current = null;
  }

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
    clearForm();
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTaskDelete = (id) => {
    setTodoList(
      todoList.filter( todo => todo.id !== id)
    );
  }

  const handleTaskUpdate =(e)=> {
    e.preventDefault();
    console.log("isEditMode", isEditMode.current);
    console.log('todotoupdate', todoToUpdate.current);
    const updatedList = todoList.map((todoItem) => {
      if(todoToUpdate.current.id === todoItem.id){
        console.log('this is todoUpdateItem', todoToUpdate.current)
        return {...todoToUpdate.current, title: title, description: description };
      }
      return todoItem;
    });
    setTodoList(updatedList);
    clearForm();
  };
  
  const handleTaskEdit = (todo) => {
    isEditMode.current = true;
    todoToUpdate.current = todo;
    setTitle(todo.title);
    setDescription(todo.description);
    titleField.current.focus();
  }

  const handleCancelEdit = () => {
    clearForm();
  };

  return (
    <main className='max-w-5xl mx-auto mt-5'>
      <h1 className='text-5xl text-center bg-green-600 p-5 rounded text-white'>Your To-Do List</h1>
      <div className='flex justify-between'>
        <section className="left p-3 w-2/3">
          <ListOfTask todoList={todoList} handleCompleteTodo={handleCompleteTodo} handleTaskDelete={handleTaskDelete} handleTaskEdit={handleTaskEdit} />
        </section>
        <section className="right p-3 w-1/3">
          <TodoForm handleTodoAdd={handleAddTodo} 
          handleTitleChange={handleTitleChange} title={title} 
          handleDescriptionChange={handleDescriptionChange} description={description}
          isEditMode={isEditMode.current} 
          handleTaskUpdate={handleTaskUpdate}
          titleField={titleField}
          handleCancelEdit={handleCancelEdit}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
