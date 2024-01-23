export const createTodoItemCompletionStatus = (completionStatus) => {
    const todoItemCompletion = document.createElement('p');
    console.log(`The completion status is ${completionStatus}`)
    todoItemCompletion.classList.add('todo-completion-status');
    todoItemCompletion.innerText = completionStatus ? 'Completed' : 'Pending';

    
    return todoItemCompletion
}
