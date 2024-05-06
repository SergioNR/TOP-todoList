import { todoList } from "./todoList.js";
import { TodoItem } from "./TodoItemClass.js"

const pushTodoListToLocalStorage = (todoList) => {
  localStorage.setItem(`todoList`, JSON.stringify(todoList)
  );

  localStorage.removeItem(`todoListJSON`)
};

const pushNewTodoItemToArray = (todoItem) => {
  todoList.push(todoItem) // No new to pass todoList as variable because it is in the global scope and is being imported already

  pushTodoListToLocalStorage(todoList)
}



//* Whenever the form is submitted, a new toDo item is created and is pushed to the todoList array

const newTodoForm = document.querySelector(".newTodoForm");


newTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let todoItem = new TodoItem(
      e.target.newTodoTitle.value,
      e.target.newTodoDescription.value,
      e.target.newTodoDueDate.value,
      e.target.newTodoPriority.value,
      e.target.newTodoProject.value,
      false,
  );

  pushNewTodoItemToArray(todoItem);

});


// When do i want to push the todoList to local storage? - i need to push it to local storage because otherwise the key in localStorage will be overwritten

// maybe everytime the todoList is updated? how do i do that?

