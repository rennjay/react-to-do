import TaskItem from "./TaskItem"

function ListOfTask()
{
    return(
        <div className="my-5">
            <ul>
                <li className="border-b border-slate-400 py-3"><TaskItem title="Task 1" /></li>
                <li className="border-b border-slate-400 py-3"><TaskItem title="Task 2" /></li>
                <li className="border-b border-slate-400 py-3"><TaskItem title="Task 3" /></li>
                <li className="border-b border-slate-400 py-3"><TaskItem title="Task 4" /></li>
            </ul>
        </div>
    );
}

export default ListOfTask;