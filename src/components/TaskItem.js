function TaskItem({todo, handleCompleteTodo}){
    return(
        <div className="flex flex-col">
            <div className="TaskItemHeader">
                <input id={'checkbox' + todo.id} onClick={(event) => handleCompleteTodo(event, todo)} type="checkbox" /><span className= { todo.isCompleted ? 'line-through':''}>&nbsp;{todo.title}</span>
            </div>
            <div className="task-item-description text-xs">
                <p>{todo.description}</p>
            </div>
        </div>
    );
}
export default TaskItem;

