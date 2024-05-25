export const createTodoItemCard = (todoItem) => {

    console.log(todoItem);

    const todoItemCard = document.createElement(`div`)

    todoItemCard.classList.add(`todoItemCard`)

    todoItemCard.append(createTodoTitle(todoItem.title))

    todoItemCard.append(createTodoDescription(todoItem.description))

    todoItemCard.append(createTodoDueDate(todoItem.dueDate))

    todoItemCard.append(createTodoPriority(todoItem.priority))

    todoItemCard.append(createTodoNotes(todoItem.notes))

    todoItemCard.append(createTodoProject(todoItem.project))
    
    todoItemCard.append(createTodoCompletionStatus(todoItem.completionStatus))

    todoItemCard.append(createButtonsDiv()) //* Create the buttonsDiv div and append it to the todoItemCard

    const buttonsDiv = todoItemCard.querySelector(`.buttonsDiv`) //* Declare the buttonsDiv div

    buttonsDiv.append(createToggleCompletionStatusButton(todoItem.completionStatus))


    buttonsDiv.append(createDeleteTodoButton()) //* confirm todoCard is the correct parameter

    return todoItemCard;
}

const createTodoTitle = (todoTitle) => {
    const todoTitleText = document.createElement(`h1`)

    todoTitleText.innerText = todoTitle

    todoTitleText.classList.add(`todoTitle`)

    return todoTitleText;
};

const createTodoDescription = (todoDescription) => {
    const todoDescriptionText = document.createElement(`p`)

    todoDescriptionText.innerText = todoDescription

    todoDescriptionText.classList.add(`todoDescription`)

    return todoDescriptionText;
};

const createTodoDueDate = (todoDueDate) => {
    const todoDueDateText = document.createElement(`p`)

    todoDueDateText.innerText = todoDueDate

    todoDueDateText.classList.add(`todoDueDate`)

    return todoDueDateText;
};

const createTodoPriority = (todoPriority) => {
    const todoPriorityText = document.createElement(`p`)

    todoPriorityText.innerText = todoPriority

    todoPriorityText.classList.add(`todoPriority`)

    return todoPriorityText;
};

const createTodoNotes = (todoNotes) => {
    const todoNotesText = document.createElement(`p`)

    todoNotesText.innerText = todoNotes

    todoNotesText.classList.add(`todoNotes`)

    return todoNotesText;
};

const createTodoProject = (todoProjects) => {
    const todoProjectsText = document.createElement(`p`)

    todoProjectsText.innerText = todoProjects

    todoProjectsText.classList.add(`todoProjects`)

    return todoProjectsText;
};
const createButtonsDiv = () => {
    const buttonsDiv = document.createElement(`div`)

    buttonsDiv.classList.add(`buttonsDiv`)

    return buttonsDiv;
};

const createTodoCompletionStatus = (todoCompletionStatus) => {
    const todoCompletionStatusText = document.createElement(`p`)

    todoCompletionStatusText.innerText = todoCompletionStatus

    todoCompletionStatusText.classList.add(`todoCompletionStatus`)

    return todoCompletionStatusText;
};

const toggleCompletionStatus = (todoItemCompletionStatus) => {

    console.log(`input completionStatus is ${todoItemCompletionStatus} - toggleCompletionStatus()`)

    if (todoItemCompletionStatus === true) {
        todoItemCompletionStatus = false
        console.log(`completionStatus is now ${todoItemCompletionStatus} - toggleCompletionStatus()`)
        return todoItemCompletionStatus

    } else {
        todoItemCompletionStatus = true
        console.log(`completionStatus is now ${todoItemCompletionStatus} - toggleCompletionStatus()`)
        return todoItemCompletionStatus
    }
}



const createToggleCompletionStatusButton = (todoItemCompletionStatus) => {

    const toggleCompletionStatusButton = document.createElement(`button`)

    toggleCompletionStatusButton.classList.add(`toggleCompletionStatusButton`)

    if (todoItemCompletionStatus === true) {
        toggleCompletionStatusButton.innerText = `Mark as Incomplete`
    } else {
        toggleCompletionStatusButton.innerText = `Mark as Completed`
    }

    toggleCompletionStatusButton.addEventListener(`click`, () => {
        console.log(`mark as completed button clicked - ToggleCompletionStatusEventListener`)
        toggleCompletionStatus(todoItemCompletionStatus)

        console.log(`todoItemCompletionStatus is now ${todoItemCompletionStatus} - 
        markAscompletedEventListener`) //! Doesnt seem to be working
    });


    /* 
    
    i need to:
    - Have a function to read completion status and based on the input, return the opposite
    
    - identify the todoItem that the button is associated with and then change the completion status of that todoItem --> toggleCompletionStatus

    - update the completion status of the todoItem in the todoList array and then push the updated todoList array to local storage and then display the todos again

    for that, i need the event listener


    note: im not entirely sure that the most efficnet way to do this would be to clear the todolist container and rerun the displaytodos function but its the only think i can think of right now
    */ 


    // where do i locate the event lsitener for this button?
    // maybe in the displayTodos function?
    // maybe in the createTodoItemCard function?

    return toggleCompletionStatusButton;
}

const createDeleteTodoButton = () => {
    const deleteTodoButton = document.createElement(`button`)

    deleteTodoButton.classList.add(`deleteTodoButton`)

    deleteTodoButton.innerText = `Delete Todo`

    return deleteTodoButton;
}