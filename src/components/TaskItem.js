import { FaCheckCircle } from 'react-icons/fa';
import TaskControls from './TaskControls';

function TaskItem({todo, handleCompleteTodo}){
    return(
        <div className="flex task-item-container py-3 justify-between" onClick={(event) => handleCompleteTodo(event, todo)}>
            <div className="task-item-content flex">
                <div className="flex justify-items-center items-center px-2">
                    <FaCheckCircle className={'text-xl ' + (todo.isCompleted ? 'text-green-600' : 'text-gray-400')} />
                </div>
                <div>
                    <div className="TaskItemHeader flex">
                        <span className= { todo.isCompleted ? 'line-through':''}>{todo.title}</span>
                    </div>
                    <div className="task-item-description text-xs">
                        <p>{todo.description}</p>
                    </div>
                </div>
            </div>
            <TaskControls />
        </div>
    );
}
export default TaskItem;

