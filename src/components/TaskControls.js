import { RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri';

const TaskControls = function() {
    return (
        <div className="task-controls flex justify-items-center items-center px-2 gap-1.5">
            <RiEditBoxLine className='text-gray-400 text-xl'/>
            <RiDeleteBinLine className='text-gray-400 text-xl'/>
        </div>
    );
}

export default TaskControls;