import { todoList } from "./index.js";
import { clearTodosContainer } from "./clearTodosContainer.js";

let deleteAllTodosButton = document.querySelector(".deleteAllTodosButton");

export const deleteAllTodos = () => {
  todoList = [];
  clearTodosContainer();
};

deleteAllTodosButton.addEventListener("click", () => {
  console.log("Deleting all todos")

  deleteAllTodos();
});
