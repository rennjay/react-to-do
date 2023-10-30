const TodoForm = ({handleTodoAdd, handleTitleChange, title, handleDescriptionChange, description, isEditMode, handleTaskUpdate, titleField
    , handleCancelEdit}) => {
    return(
        <form id='TodoForm' className="flex flex-col justify-items-stretch" onSubmit={!isEditMode ? handleTodoAdd : handleTaskUpdate}>
            <h1 className="mb-3 text-center text-lg mt-3 font-semibold">{(!isEditMode ? 'Add':'Edit') + ' To-do'}</h1>
            <input ref={titleField} onChange={handleTitleChange} value={title} type="text" name="title" id="title" placeholder="Title" className="mb-3 drop-shadow p-2"/>
            <textarea onChange={handleDescriptionChange} value={description} name="description" id="description" cols="30" rows="10" placeholder="Description" className="mb-3 drop-shadow p-2"></textarea>
            <button type="submit" className="bg-green-600 py-1 text-white text-l">Add</button>
            {isEditMode ? <button onClick={handleCancelEdit} className="bg-yellow-600 py-1 text-white text-l mt-3">Cancel</button> : null}
        </form>
    );
};

export default TodoForm;