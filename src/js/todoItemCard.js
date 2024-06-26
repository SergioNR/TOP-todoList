import { todoList } from "./todoList.js";
import { pushTodoListToLocalStorage } from "./createNewTodoForm.js";


//#region CREATE TODO ITEM CARD

export const createTodoItemCard = (todoItem) => {

    // console.log(todoItem); //* debug - Print the value of the currently being created todoItem

    const todoItemCard = document.createElement(`div`);

    todoItemCard.classList.add(`todoItemCard`);

    todoItemCard.append(createTodoTitle(todoItem.todoTitle));

    todoItemCard.append(createTodoDescription(todoItem.todoDescription));

    todoItemCard.append(createTodoDueDate(todoItem.todoDueDate));

    todoItemCard.append(createTodoPriority(todoItem.todoPriority));

    todoItemCard.append(createTodoNotes(todoItem.todoNotes));

    todoItemCard.append(createTodoProject(todoItem.todoProject));
    
    todoItemCard.append(createTodoCompletionStatus(todoItem.todoCompletionStatus, todoItemCard));

    todoItemCard.append(createButtonsDiv()); //* Create the buttonsDiv div and append it to the todoItemCard

    const buttonsDiv = todoItemCard.querySelector(`.buttonsDiv`); //* Declare the buttonsDiv div

    buttonsDiv.append(createToggleCompletionStatusButton(todoItem));

    buttonsDiv.append(createDeleteTodoButton(todoItem));

    buttonsDiv.append(createEditTodoButton(todoItem));

    return todoItemCard;
}

//#endregion

//#region CREATE TODO ITEM CARD COMPONENTS

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

    todoDueDate = new Date(todoDueDate); //* Convert the due date to a date object so it can be worked with

    todoDueDate = todoDueDate.toLocaleString(`es-ES`, {
        timeZone: `GMT`,
        day: `2-digit`,
        month: `2-digit`,
        year: `numeric`,
    }); //* format the todoDueDate to ES-ES locale and to NOT display the time

    // console.log(todoDueDate); //* debug - check the value of the due date

    todoDueDateText.innerText = todoDueDate;

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

        const index = todoList.findIndex(item => item.todoId === todoItem.todoId) //* Find the index of the current todoItem in the todoList array

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

        const index = todoList.findIndex(item => item.todoId === todoItem.todoId); //? How does this work?

        // console.log(index) //* debug - check the value of the current todoItem index

        todoList.splice(index, 1);

        pushTodoListToLocalStorage(todoList)
    
    })

    return deleteTodoButton;
}

const createEditTodoButton = (todoItem) => {

    const editTodoButton = document.createElement(`button`);

    editTodoButton.classList.add(`editTodoButton`);

    editTodoButton.innerText = `Edit`;

    editTodoButton.addEventListener(`click`, () => {
        console.log(todoItem); //* debug - check the value of todoItem (should be the todoItem that is being edited)
        editTodoItem(todoItem);
    });

    return editTodoButton;
}

const editTodoItem = (todoItem) => {

// TODO #13 - make sure only one edit form can be active at the same time - currently it is possible to open multiple edit forms but only one will work
const todoListContainer = document.querySelector(`.todoListContainer`)

const index = todoList.findIndex(item => item.todoId === todoItem.todoId);

console.log(index); //* debug - check the value of the current todoItem index

const editTodoForm = document.createElement(`form`);
editTodoForm.classList.add(`editTodoForm`);
editTodoForm.id = `editTodoForm`;
todoListContainer.prepend(editTodoForm); // TODO - CHANGE INTO A MODAL #12

const editTodoHeader = document.createElement(`h1`);
editTodoHeader.innerText = `Edit Todo`;
editTodoForm.append(editTodoHeader);

const editTodoTitleLable = document.createElement(`label`);
editTodoTitleLable.classList.add(`editTodoFormLabel`)
editTodoTitleLable.innerText = `Title`;
editTodoTitleLable.htmlFor = `editTodoTitle`;
editTodoForm.append(editTodoTitleLable);

const editTodoTitle = document.createElement(`input`);
editTodoTitle.classList.add(`editTodoTitle`);
editTodoTitle.value = todoItem.todoTitle;
editTodoTitle.id = `editTodoTitle`;
editTodoTitle.name = `editTodoTitle`;
editTodoForm.append(editTodoTitle);

const editTodoDescriptionLabel = document.createElement(`label`);
editTodoDescriptionLabel.classList.add(`editTodoFormLabel`)
editTodoDescriptionLabel.innerText = `Description`;
editTodoDescriptionLabel.htmlFor = `editTodoDescription`;
editTodoForm.append(editTodoDescriptionLabel);

const editTodoDescription = document.createElement(`textarea`);
editTodoDescription.classList.add(`editTodoDescription`);
editTodoDescription.value = todoItem.todoDescription;
editTodoDescription.id = `editTodoDescription`;
editTodoDescription.name = `editTodoDescription`;
editTodoForm.append(editTodoDescription);

const editTodoDueDateLabel = document.createElement(`label`);
editTodoDueDateLabel.classList.add(`editTodoFormLabel`)
editTodoDueDateLabel.innerText = `Due Date (DD/MM/YYYY)`;
editTodoDueDateLabel.htmlFor = `editTodoDueDate`;
editTodoForm.append(editTodoDueDateLabel);

const editTodoDueDate = document.createElement(`input`);
editTodoDueDate.classList.add(`editTodoDueDate`);
editTodoDueDate.type = `date`;
editTodoDueDate.value = todoItem.todoDueDate;
editTodoDueDate.id = `editTodoDueDate`;
editTodoDueDate.name = `editTodoDueDate`;
editTodoForm.append(editTodoDueDate);

const editTodoPriorityLabel = document.createElement(`p`);
editTodoPriorityLabel.innerText = `Priority`;
editTodoPriorityLabel.classList.add(`editTodoFormLabel`);
// editTodoPriorityLabel.htmlFor = `editTodoPriorityHeader`; // TODO - IM NOT SURE WHY THIS IS COMMENTED BUT SHOULD LOOK INTO IT
editTodoForm.append(editTodoPriorityLabel);

const priorities = ['high', 'medium', 'low'];

priorities.forEach(todoPriority => { //* Using a forEach loop instead of creating each radio button individuallyk
    const radioWrapper = document.createElement('div');
    radioWrapper.classList.add('radioWrapper');

    const radioInput = document.createElement(`input`);
    radioInput.classList.add(`editTodoPriority`);
    radioInput.type = `radio`;
    radioInput.value = todoPriority;
    radioInput.id = `editTodoPriority-${todoPriority}`;
    radioInput.name = `editTodoPriority`;
    radioInput.checked = todoItem.todoPriority === todoPriority;
    radioWrapper.append(radioInput);

    const radioLabel = document.createElement('label');
    radioLabel.classList.add(`editTodoFormLabel`)
    radioLabel.htmlFor = `editTodoPriority-${todoPriority}`;
    radioLabel.innerText = todoPriority;
    radioWrapper.append(radioLabel);

    editTodoForm.append(radioWrapper);
});

const editTodoResetFormButton = document.createElement(`button`);
editTodoResetFormButton.classList.add(`editTodoResetFormButton`);
editTodoResetFormButton.innerText = `Reset`;
editTodoResetFormButton.type = `reset`;
editTodoForm.append(editTodoResetFormButton);

const todoEditSubmitButton = document.createElement(`button`);
todoEditSubmitButton.classList.add(`todoEditSubmitButton`);
todoEditSubmitButton.type = `submit`;
todoEditSubmitButton.innerText = `Submit`;
editTodoForm.append(todoEditSubmitButton);


editTodoForm.addEventListener(`submit`, (e) => {
    e.preventDefault();
    
    todoList[index].todoTitle = e.target.editTodoTitle.value;
    todoList[index].todoDescription = e.target.editTodoDescription.value;
    todoList[index].todoDueDate = e.target.editTodoDueDate.value;
    todoList[index].todoPriority = e.target.editTodoPriority.value;

    console.log(todoList); //* debug - check the value of todoList AFTER the edit

    pushTodoListToLocalStorage(todoList);
})
}

//#endregion