import { todoList } from "./todoList.js";
import { TodoItem } from "./TodoItemClass.js"
import { displayTodos } from "./displayTodos.js";

export const pushTodoListToLocalStorage = (todoList) => {
  localStorage.setItem(`todoList`, JSON.stringify(todoList)
  );

displayTodos() //* Calling the displayTodos function everytime the localStorage is updated

};

// const removeItemFromTodoList = () => {
//  // TODO - ADD LOGIC TO FIND THE RESPECTIVE TODO AND DELETE IT

//   let itemToRemove = todoList.indexOf(todoTitle)

//   todoList.splice(itemToRemove, 1);
  
//   //! THIS APPROACH ASSUMES THERE WILL ALWAYS BE DIFFERENT TITLES, OTHERWISE IT WILL ALWAYS TAKE THE FIRST - MAYBE USE SOME KIND OF NUMERICAL ID TO PREVENT INCORRECT BEHAUVIOR?

//   pushTodoListToLocalStorage(todoList)
// }

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

  let todoItem = new TodoItem(
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


// When do i want to push the todoList to local storage? - i need to push it to local storage because otherwise the key in localStorage will be overwritten

// maybe everytime the todoList is updated? how do i do that?

