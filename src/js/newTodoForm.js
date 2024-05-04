import { todoList } from "./index.js";
import { displayTodos } from "./displayTodos";
import { TodoItem } from "./TodoItem.js";
import { clearTodosContainer } from "./clearTodosContainer.js";

const pushItemsToLocalStorage = (todoItem) => {
    localStorage.setItem(`todoList`, todoItem)
  };
  
const newTodoForm = document.querySelector('.newTodoForm');

newTodoForm.addEventListener('submit', (e) => {

    e.preventDefault();

    console.log(`form submitted`)
    console.log(e.target)

    console.log(e.target.newTodoTitle.value)

    todoList.push(
        new TodoItem(
            e.target.newTodoTitle.value,
            e.target.newTodoDescription.value,
            e.target.newTodoDueDate.value,
            e.target.newTodoPriority.value,
            e.target.newTodoProject.value,
            false,
        ),
    );

    

    pushItemsToLocalStorage(JSON.stringify(todoList))

    clearTodosContainer();
    displayTodos(todoList);
});