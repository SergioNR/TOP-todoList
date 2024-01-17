export const createTodoItemCompletionStatus = (completed) => {
    const todoItemCompletion = document.createElement('p');
    todoItemCompletion.classList.add('todo-completion-status');
    todoItemCompletion.innerText = completed ? 'Completed' : 'Pending';

    return todoItemCompletion
}