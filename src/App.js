import './App.css';
import React from 'react';
import ListOfTask from './components/ListOfTask'

function App() {
  return (
    <main className='max-w-xl mx-auto mt-5'>
    <h1 className='text-5xl text-center bg-green-600 p-5 rounded text-white'>Your To-Do List</h1>
    <ListOfTask />
    </main>
  );
}

export default App;
