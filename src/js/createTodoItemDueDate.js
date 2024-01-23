export const createTodoItemDueDate = (dueDate) => {
    const todoItemDueDate = document.createElement('p');
    todoItemDueDate.classList.add('todo-due-date');

    todoItemDueDate.innerText = dueDate;

    return todoItemDueDate
}