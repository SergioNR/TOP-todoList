export class TodoItem {
  constructor(
    title,
    description,
    dueDate,
    priority,
    notes,
    project,
    completed,
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = project;
    this.completed = completed;
  }
}
