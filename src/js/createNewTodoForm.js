import { todoList } from "./todoList.js";
import { TodoItem } from "./TodoItemClass.js"

const pushTodoListToLocalStorage = (todoList) => {
  localStorage.setItem(`todoList`, JSON.stringify(todoList)
  );

};

const removeItemFromTodoList = () => {
 // TODO - ADD LOGIC TO FIND THE RESPECTIVE TODO AND DELETE IT

  let itemToRemove = todoList.indexOf(todoTitle)

  todoList.splice(itemToRemove, 1);
  
  //! THIS APPROACH ASSUMES THERE WILL ALWAYS BE DIFFERENT TITLES, OTHERWISE IT WILL ALWAYS TAKE THE FIRST - MAYBE USE SOME KIND OF NUMERICAL ID TO PREVENT INCORRECT BEHAUVIOR?

  pushTodoListToLocalStorage(todoList)
}

const pushNewTodoItemToTodoList = (todoItem) => {
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

  pushNewTodoItemToTodoList(todoItem);

});


// When do i want to push the todoList to local storage? - i need to push it to local storage because otherwise the key in localStorage will be overwritten

// maybe everytime the todoList is updated? how do i do that?

