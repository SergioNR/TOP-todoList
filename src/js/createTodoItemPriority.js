export const createTodoItemPriority = (priority) => {
  const todoItemPriority = document.createElement(`p`);
  todoItemPriority.classList.add(`todo-priority`);

  todoItemPriority.innerText = `Priority: ${priority}`;

  if (priority.toLowerCase() === `high`) {
    todoItemPriority.classList.add(`todo-priority-high`);
  }
  if (priority.toLowerCase() === `medium`) {
    todoItemPriority.classList.add(`todo-priority-medium`);
  }
  if (priority.toLowerCase() === `low`) {
    todoItemPriority.classList.add(`todo-priority-low`);
  }

  return todoItemPriority;
};
