export const createTodoItemTitle = (title) => {
    const todoItemTitle = document.createElement('h3');
    todoItemTitle.classList.add('todo-title');
    todoItemTitle.textContent = title;

    return todoItemTitle;
}