export const createTodoItemDescription = (description) => {
    const todoItemDescription = document.createElement('p');
    todoItemDescription.classList.add('todo-description');

    todoItemDescription.innerText = description;

    return todoItemDescription
}