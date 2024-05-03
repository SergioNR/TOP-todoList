export const createNewTodo = (todoList) => {
  let newTodo = new TodoItem(
    document.querySelector(`.new-todo-title`).value,
    document.querySelector(`.new-todo-description`).value,
    document.querySelector(`.new-todo-due-date`).value,
    document.querySelector(`.new-todo-priority`).value,
    document.querySelector(`.new-todo-notes`).value,
    document.querySelector(`.new-todo-project`).value,
    false,
  );

  todoList.push(newTodo);

  return todoList;
}