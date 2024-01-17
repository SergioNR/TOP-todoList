export const createTodoItemNotes = (notes) => {
    const todoItemNotes = document.createElement('p');
    todoItemNotes.classList.add('todo-Notes-status');
    todoItemNotes.innerText = notes

    return todoItemNotes
}