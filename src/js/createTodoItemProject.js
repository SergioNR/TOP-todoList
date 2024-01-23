export const createTodoItemProject = (project) => {
  const todoItemProject = document.createElement("p");
  todoItemProject.classList.add("todo-Project-status");
  todoItemProject.innerText = `Project: ${project}`;

  return todoItemProject;
};
