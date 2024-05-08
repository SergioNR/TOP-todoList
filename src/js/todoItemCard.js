export const createTodoItemCard = (todoItem) => {

    console.log(todoItem)

    console.log(`hello, this is a new item`)

    const todoItemCard = document.createElement(`div`)

    todoItemCard.classList.add(`todoItemCard`)

    todoItemCard.append(createTodoTitle(todoItem.title))

    todoItemCard.append(createTodoDescription(todoItem.description))

    todoItemCard.append(createTodoDueDate(todoItem.dueDate))

    todoItemCard.append(createTodoPriority(todoItem.priority))

    todoItemCard.append(createTodoNotes(todoItem.notes))

    todoItemCard.append(createTodoProject(todoItem.project))

    todoItemCard.append(createTodoCompletionStatus(todoItem.completionStatus))

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

const createTodoCompletionStatus = (todoCompletionStatus) => {
    const todoCompletionStatusText = document.createElement(`p`)

    todoCompletionStatusText.innerText = todoCompletionStatus

    todoCompletionStatusText.classList.add(`todoCompletionStatus`)

    return todoCompletionStatusText;
};

