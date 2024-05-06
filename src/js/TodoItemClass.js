export class TodoItem {
  constructor(
    title,
    description,
    dueDate,
    priority,
    notes = `no notes for now`,
    project,
    completionStatus = false,
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = [`Default`].concat(project);
    this.completionStatus = completionStatus;
  }
}


// How to make the todo item appear in several 