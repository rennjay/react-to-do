import "./App.css";
import { React, useEffect, useState, useRef, useReducer } from "react";
import ListOfTask from "./components/ListOfTask";
import TodoForm from "./components/TodoForm";
import TaskListReducer from "./components/TaskListReducer";

function App() {
  const [todoList, dispatch] = useReducer(TaskListReducer, null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const isEditMode = useRef(false);
  const todoToUpdate = useRef(null);
  const titleField = useRef(null);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "add_all_todo", todoList: data });
      });
  }, []);

  const handleCompleteTodo = (event, todo) => {
    dispatch({ type: "complete_todo", todo: todo });
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    isEditMode.current = false;
    todoToUpdate.current = null;
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: "add_todo",
      todo: {
        title: title,
        description: description,
      },
    });

    clearForm();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTaskDelete = (id) => {
    dispatch({ type: "delete_todo", id });
  };

  const handleTaskUpdate = (e) => {
    e.preventDefault();

    const updatedTodo = {
      ...todoToUpdate.current,
      title: title,
      description: description,
    };

    dispatch({ type: "update_todo", todo: updatedTodo });
    clearForm();
  };

  const handleTaskEdit = (todo) => {
    isEditMode.current = true;
    todoToUpdate.current = todo;
    setTitle(todo.title);
    setDescription(todo.description);
    titleField.current.focus();
  };

  const handleCancelEdit = () => {
    clearForm();
  };

  return (
    <main className="max-w-5xl mx-auto mt-5">
      <h1 className="text-5xl text-center bg-main p-5 rounded-t text-white">
        Your To-Do List
      </h1>
      <div className="flex justify-between">
        <section className="left p-3 w-2/3">
          <ListOfTask
            todoList={todoList}
            handleCompleteTodo={handleCompleteTodo}
            handleTaskDelete={handleTaskDelete}
            handleTaskEdit={handleTaskEdit}
          />
        </section>
        <section className="right p-3 w-1/3">
          <TodoForm
            handleTodoAdd={handleAddTodo}
            handleTitleChange={handleTitleChange}
            title={title}
            handleDescriptionChange={handleDescriptionChange}
            description={description}
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
