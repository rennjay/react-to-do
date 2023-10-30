import { FaCheckCircle } from 'react-icons/fa';
import TaskControls from './TaskControls';
import { useState } from 'react';

function TaskItem({todo, handleCompleteTodo, handleTaskDelete, handleTaskEdit}){
let [showTaskControls, setShowTaskControls] = useState(false);

const handleMouseOver = (e) =>    {
    setShowTaskControls(true);
};

const handleMouseLeave = (e) => {
    setShowTaskControls(false);
};
    return(
        <div className="flex task-item-container py-3 justify-between"
            onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <div className="task-item-content flex w-full" onClick={(event) => handleCompleteTodo(event, todo)}>
                <div className="flex justify-items-center items-center px-2">
                    <FaCheckCircle className={'text-2xl ' + (todo.isCompleted ? 'text-green-600' : 'text-gray-400')} />
                </div>
                <div>
                    <div className="TaskItemHeader flex">
                        <span className= { todo.isCompleted ? 'line-through':''}>{todo.title}</span>
                    </div>
                    <div className="task-item-description text-xs">
                        <p>{todo.description}</p>
                        {todo.isCompleted ? <p className='text-xs text-gray-400 italic'>Completed on {(new Date(todo.completionDate)).toLocaleString()}</p>:''}
                    </div>
                </div>
            </div>
            <TaskControls showTaskControls={showTaskControls} todo={todo} handleTaskDelete={handleTaskDelete} handleTaskEdit={handleTaskEdit}/>
        </div>
    );
}
export default TaskItem;