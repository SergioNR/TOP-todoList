export class TodoItem {
  constructor(
    title = `no title`,
    description = `no description`,
    dueDate = `no due date`,
    priority = `no priority`,
    notes = `no notes for now`,
    project,
    completionStatus = false,
    id = Math.floor(Math.random() * 10000000) //* This is a random number generator to create a unique ID for each todo item | This is a temporary solution, it is not the best way to create unique IDs | Will become a problem if 2 items have the same ID but it is unlikely to happen
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = [`Default`].concat(project);
    this.completionStatus = completionStatus;
    this.id = id;
  }
}


// How to make the todo item appear in several 