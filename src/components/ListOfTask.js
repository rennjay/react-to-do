import TaskItem from "./TaskItem";

function ListOfTask({
  todoList,
  handleCompleteTodo,
  handleTaskDelete,
  handleTaskEdit,
}) {
  return (
    <div className="my-5">
      <ul>
        {todoList &&
          todoList.map((todo) => {
            return (
              <li key={todo.id} className="border-b border-slate-400">
                <TaskItem
                  handleCompleteTodo={handleCompleteTodo}
                  todo={todo}
                  handleTaskDelete={handleTaskDelete}
                  handleTaskEdit={handleTaskEdit}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ListOfTask;
