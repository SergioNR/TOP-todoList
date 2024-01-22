export const createTodoItemCompletionStatus = (todoCard, completionStatus) => {
    const todoItemCompletion = document.createElement('p');
    todoItemCompletion.classList.add('todo-completion-status');
    todoItemCompletion.innerText = completionStatus ? 'Completed' : 'Pending';

    
    return todoItemCompletion
}


/* The issue is that completionValue is returning empty to this function */