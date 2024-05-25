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

    buttonsDiv.append(createMarkAsCompletedButton(todoItem.completionStatus))


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
    if (todoItemCompletionStatus === true) {
        todoItemCompletionStatus = false
        return todoItemCompletionStatus
    } else {
        todoItemCompletionStatus = true
        return todoItemCompletionStatus
    }
}

const createMarkAsCompletedButton = (todoItemCompletionStatus) => {

    const markAsCompletedButton = document.createElement(`button`)

    if (todoItemCompletionStatus === true) {
        markAsCompletedButton.innerText = `Mark as Incomplete`
    } else {
        markAsCompletedButton.innerText = `Mark as Completed`
    }

    markAsCompletedButton.addEventListener(`click`, () => {
        console.log(`mark as completed button clicked`)
        toggleCompletionStatus(todoItemCompletionStatus)

        console.log(`todoItemCompletionStatus is now ${todoItemCompletionStatus}`) //! Doesnt seem to be working
    });
    // where do i locate the event lsitener for this button?
    // maybe in the displayTodos function?
    // maybe in the createTodoItemCard function?




    return markAsCompletedButton;
}