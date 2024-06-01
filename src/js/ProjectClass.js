export class Project {
  constructor(
    todoProjectName,
    todoProjectDescription,
    todoProjectId = crypto.randomUUID(),
    todoProjectDueDate,
  ) {
    this.todoProjectName = todoProjectName;
    this.todoProjectDescription = todoProjectDescription;
    this.todoProjectId = todoProjectId;
    this.todoProjectDueDate = todoProjectDueDate;
  }
}
