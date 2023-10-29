const TodoForm = ({handleTodoAdd, handleTitleChange, title, handleDescriptionChange, description}) => {
    return(
        <form id='TodoForm' className="flex flex-col justify-items-stretch" onSubmit={handleTodoAdd}>
            <h1 className="mb-3 text-center text-lg mt-3 font-semibold">Add To-do</h1>
            <input onChange={handleTitleChange} value={title} type="text" name="title" id="title" placeholder="Title" className="mb-3 drop-shadow p-2"/>
            <textarea onChange={handleDescriptionChange} value={description} name="description" id="description" cols="30" rows="10" placeholder="Description" className="mb-3 drop-shadow p-2"></textarea>
            <button type="submit" className="bg-green-600 py-1 text-white text-l">Add</button>
        </form>
    );
};

export default TodoForm;