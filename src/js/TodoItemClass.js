export class TodoItem {
  constructor(
    todoTitle = `no title`,
    todoDescription = `no description`,
    todoDueDate = `no due date`,
    todoPriority = `no priority`,
    todoNotes = `no notes for now`,
    todoProject,
    todoCompletionStatus = false,
    todoID = crypto.randomUUID()
  ) {
    this.todoTitle = todoTitle;
    this.todoDescription = todoDescription;
    this.todoDueDate = todoDueDate;
    this.todoPriority = todoPriority;
    this.todoNotes = todoNotes;
    this.todoProject = [`Default`].concat(todoProject);
    this.todoCompletionStatus = todoCompletionStatus;
    this.todoId = todoID;
  }
}


// How to make the todo item appear in several 