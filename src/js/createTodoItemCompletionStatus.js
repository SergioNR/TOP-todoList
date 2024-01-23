export const createTodoItemCompletionStatus = (completionStatus) => {
    const todoItemCompletion = document.createElement('p');
    todoItemCompletion.classList.add('todo-completion-status');
    todoItemCompletion.innerText = completionStatus ? 'Completed' : 'Pending';

    
    return todoItemCompletion
}
