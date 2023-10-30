import { RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri';

const TaskControls = function({showTaskControls, handleTaskDelete, handleTaskEdit, todo}) {
    return (
        <div className={'task-controls flex justify-items-center items-center px-2 gap-1.5 ' + ( showTaskControls ? 'block':'hidden')}>
            <RiEditBoxLine className='text-gray-400 text-2xl z-10' onClick={() => handleTaskEdit(todo)}/>
            <RiDeleteBinLine className='text-gray-400 text-2xl z-10' onClick={() => handleTaskDelete(todo.id)}/>
        </div>
    );
}

export default TaskControls;