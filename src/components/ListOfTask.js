import TaskItem from "./TaskItem"

function ListOfTask({ todoList,handleCompleteTodo })
{
    return(
        <div className="my-5">
            <ul>
            {
                todoList.map( todo => {
                   return <li key={todo.id} className="border-b border-slate-400 py-3"><TaskItem handleCompleteTodo={handleCompleteTodo} todo={todo} /></li>
                })
            }
            </ul>
        </div>
    );
}

export default ListOfTask;