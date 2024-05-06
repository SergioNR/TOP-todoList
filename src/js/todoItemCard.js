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
}

const createTodoTitle = (todoTitle) => {
    const todoTitleText = document.createElement(`h1`)

    todoTitleText.innerText = todoTitle

    todoTitleText.classList.add(`todoTitle`)
};

const createTodoDescription = (todoDescription) => {
    const todoDescriptionText = document.createElement(`p`)

    todoDescriptionText.innerText = todoDescription

    todoDescriptionText.classList.add(`todoDescription`)
};

const createTodoDueDate = (todoDueDate) => {
    const todoDueDateText = document.createElement(`p`)

    todoDueDateText.innerText = todoDueDate

    todoDueDateText.classList.add(`todoDueDate`)
};

const createTodoPriority = (todoPriority) => {
    const todoPriorityText = document.createElement(`p`)

    todoPriorityText.innerText = todoPriority

    todoPriorityText.classList.add(`todoPriority`)
};

const createTodoNotes = (todoNotes) => {
    const todoNotes = document.createElement(`p`)

    todoNotes.innerText = todoNotes

    todoNotes.classList.add(`todoNotes`)
};

const createTodoProject = (todoProjects) => {
    const todoProjects = document.createElement(`p`)

    todoProjects.innerText = todoProjects

    todoProjects.classList.add(`todoProjects`)
};

const createTodoCompletionStatus = (todoCompletionStatus) => {
    const todoCompletionStatus = document.createElement(`p`)

    todoCompletionStatus.innerText = todoCompletionStatus

    todoCompletionStatus.classList.add(`todoCompletionStatus`)
};


/* 

card - 
- Title
- description
- due date
- priority
- notes
- project
- completionStatus
*/