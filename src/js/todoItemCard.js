import { todoList } from "./todoList.js";
import { pushTodoListToLocalStorage } from "./createNewTodoForm.js";

export const createTodoItemCard = (todoItem) => {

    // console.log(todoItem); //* debug - Print the value of the currently being created todoItem

    const todoItemCard = document.createElement(`div`)

    todoItemCard.classList.add(`todoItemCard`)

    todoItemCard.append(createTodoTitle(todoItem.title))

    todoItemCard.append(createTodoDescription(todoItem.description))

    todoItemCard.append(createTodoDueDate(todoItem.dueDate))

    todoItemCard.append(createTodoPriority(todoItem.priority))

    todoItemCard.append(createTodoNotes(todoItem.notes))

    todoItemCard.append(createTodoProject(todoItem.project))
    
    todoItemCard.append(createTodoCompletionStatus(todoItem.completionStatus, todoItemCard))

    todoItemCard.append(createButtonsDiv()) //* Create the buttonsDiv div and append it to the todoItemCard

    const buttonsDiv = todoItemCard.querySelector(`.buttonsDiv`) //* Declare the buttonsDiv div

    buttonsDiv.append(createToggleCompletionStatusButton(todoItem))

    buttonsDiv.append(createDeleteTodoButton(todoItem))

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

const createTodoCompletionStatus = (todoCompletionStatus, todoItemCard) => {

    
    const todoCompletionStatusText = document.createElement(`p`)

    todoCompletionStatusText.innerText = todoCompletionStatus

    todoCompletionStatusText.classList.add(`todoCompletionStatus`)

    if (todoCompletionStatus === true) {
        todoCompletionStatusText.innerText = `Completed`;
        todoItemCard.classList.add(`todoCompleted`);
 
    }

    else {
        todoCompletionStatusText.innerText = `Pending`;
        todoItemCard.classList.add(`todoPending`);
    }

    return todoCompletionStatusText;

    /* if the TODOITEm is completed, i want to add the following visuals:
    - strike through the text - Which text? The todoTitleText?
    - todoItem background color green

    if the TODOITEM is pending, i want to add the following visuals:
    - no strike through the text, which text? The todoTitleText? or everything?
    - todoItem background color red

    1- i need to select the todoItemCard - Since its in the creation process, i can do it here

    - maybe i need to do it with the ID of the todoItem? - but that might be a bit overkill?
    */
};

const createButtonsDiv = () => {
    const buttonsDiv = document.createElement(`div`)

    buttonsDiv.classList.add(`buttonsDiv`)

    return buttonsDiv;
};

const toggleCompletionStatus = (todoItemCompletionStatus) => {

    // console.log(`input completionStatus is ${todoItemCompletionStatus} - toggleCompletionStatus()`) //* debug - check the value of the completion status

    if (todoItemCompletionStatus === true) {
        todoItemCompletionStatus = false;

        // console.log(`completionStatus is now ${todoItemCompletionStatus} - toggleCompletionStatus()`); //* debug - check the value of the completion status

        return todoItemCompletionStatus;

    } else {
        todoItemCompletionStatus = true;

        // console.log(`completionStatus is now ${todoItemCompletionStatus} - toggleCompletionStatus()`); //* debug - check the value of the completion status

        return todoItemCompletionStatus;
    }
}

const createToggleCompletionStatusButton = (todoItem) => {

    const toggleCompletionStatusButton = document.createElement(`button`)

    toggleCompletionStatusButton.classList.add(`toggleCompletionStatusButton`)

    if (todoItem.completionStatus === true) {
        toggleCompletionStatusButton.innerText = `Mark as Pending`
    } else {
        toggleCompletionStatusButton.innerText = `Mark as Completed`
    } //* IF statement to change the text of the button based on the completion status of the todoItem


    toggleCompletionStatusButton.addEventListener(`click`, () => {
        // console.log(`mark as completed button clicked - ToggleCompletionStatusEventListener`) //* debug - check if the event listener is working

        // console.log(todoItem) //* debug - check the value of the todoItem

        const index = todoList.findIndex(item => item.id === todoItem.id) //* Find the index of the current todoItem in the todoList array

        const newTodoCompletionStatus = toggleCompletionStatus(todoItem.completionStatus) //* Toggle the completion status of the todoItem 
        //? Does this execution need to be in a separate function? 

        todoList[index].completionStatus = newTodoCompletionStatus //* Update the completion status of the todoItem in the todoList array

        pushTodoListToLocalStorage(todoList) //* Push the updated todoList to local storage for subsequent display
    })
    return toggleCompletionStatusButton;
}

const createDeleteTodoButton = (todoItem) => {
    const deleteTodoButton = document.createElement(`button`);

    deleteTodoButton.classList.add(`deleteTodoButton`);

    deleteTodoButton.innerText = `Delete Todo`;

    // console.log(todoItem) //* debug - check the value of todoItem

    deleteTodoButton.addEventListener(`click`, () => {
        // console.log(`delete todo button clicked - deleteTodoButtonEventListener`) //* debug - check if the event listener is working
        
        // console.log(todoList); //* debug - check the value of todoList

        // console.log(todoItem); //* debug - check the value of todoItem

        const index = todoList.findIndex(item => item.id === todoItem.id); //? How does this work?

        // console.log(index) //* debug - check the value of the current todoItem index

        todoList.splice(index, 1);

        pushTodoListToLocalStorage(todoList)
    
    })

    return deleteTodoButton;
}
