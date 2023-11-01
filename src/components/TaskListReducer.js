const TaskListReducer = (todoList, action) => {
  switch (action.type) {
    case "complete_todo": {
      const newTodoList = todoList.map((item) => {
        if (action.todo.id === item.id) {
          let isCompleted = !action.todo.isCompleted;
          let newTodo = {
            ...action.todo,
            isCompleted: isCompleted,
            completionDate: isCompleted ? Date() : null,
          };
          return newTodo;
        }
        return item;
      });

      return newTodoList;
    }

    case "add_all_todo": {
      return action.todoList;
    }

    case "add_todo": {
      let latestId = todoList.reduce((max, current) => {
        let maxValue = max;
        let currentValue = Number(current.id);
        return maxValue < currentValue ? currentValue : maxValue;
      }, 0);

      const newTodo = {
        id: ++latestId,
        title: action.todo.title,
        description: action.todo.description,
        isCompleted: false,
        completionDate: null,
      };

      return [...todoList, newTodo];
    }

    case "delete_todo": {
      return todoList.filter((todo) => todo.id !== action.id);
    }

    case "update_todo": {
      return todoList.map((todo) => {
        if (action.todo.id === todo.id) {
          return action.todo;
        }
        return todo;
      });
    }

    default:
      throw Error("Invalid action:" + action.type);
  }
};

export default TaskListReducer;
