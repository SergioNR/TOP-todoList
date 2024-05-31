import { todoList } from "./todoList.js";
import { TodoItem } from "./TodoItemClass.js"
import { displayTodos } from "./displayTodos.js";

export const pushTodoListToLocalStorage = (todoList) => {
  localStorage.setItem(`todoList`, JSON.stringify(todoList)
  );

//* No need to call displayTodos() here because the event listener in displayTodos.js will handle the update of the UI by watching changes in localStorage

}; // TODO - should not be in this file, should be in a separate file

const pushNewTodoItemToTodoList = (todoItem) => {
  todoList.push(todoItem) //* No need to pass todoList as variable because it is in the global scope and is being imported already

  // console.log(todoList) //* DEBUG - check the value of todoList

  pushTodoListToLocalStorage(todoList)
}



//* Whenever the form is submitted, a new toDo item is created and is pushed to the todoList array

const newTodoForm = document.querySelector(".newTodoForm");

newTodoForm.addEventListener("submit", (e) => {

  e.preventDefault()

  console.log(todoList)

  let todoItem = createNewTodo(
    e.target.newTodoTitle.value,
    e.target.newTodoDescription.value,
    e.target.newTodoDueDate.value,
    e.target.newTodoPriority.value,
    undefined,
    e.target.newTodoProject.value,
    false,
  );

  console.log(todoItem)

  pushNewTodoItemToTodoList(todoItem);

});

export const createNewTodo = (title, description, dueDate, priority, notes, project, status) => {

  let todoItem = new TodoItem(
    title,
    description,
    dueDate,
    priority,
    notes,
    project,
    status,
  );

  return todoItem
}


