import { FaCheckCircle } from 'react-icons/fa';

function TaskItem({todo, handleCompleteTodo}){
    return(
        <div className="flex task-item-container py-3" onClick={(event) => handleCompleteTodo(event, todo)}>
            <div className="flex justify-items-center items-center px-2">
                <FaCheckCircle className={'text-xl ' + (todo.isCompleted ? 'text-green-600' : 'text-gray-400')} />
            </div>
            <div>
                <div className="TaskItemHeader flex">
                    {/* <input id={'checkbox' + todo.id} onClick={(event) => handleCompleteTodo(event, todo)} type="checkbox" /> */}
                    <span className= { todo.isCompleted ? 'line-through':''}>{todo.title}</span>
                </div>
                <div className="task-item-description text-xs">
                    <p>{todo.description}</p>
                </div>
            </div>
        </div>
    );
}
export default TaskItem;

