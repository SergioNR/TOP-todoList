import { displayTodos } from "./displayTodos.js";
import { createDummyData } from "./createDummyData.js";
import { TodoItem } from "./TodoItem.js";
import "../css/styles.css";
import { deleteAllTodos } from "./deleteAllTodos.js";
import { cycleTodoItemPriority } from "./cyclePriority.js";
import { newTodoForm } from "./newTodoForm.js";


export let todoList = [];

todoList.push(
  new TodoItem(
    `Title 1`,
    `Description 1`,
    `Due date 1`,
    `Low`,
    `Notes 1`,
    `Project 1`,
    true,
  ),
);

createDummyData(todoList);
displayTodos(todoList);
console.log(todoList)



// instead of saving on an array, we want to save the items onto local storage

/* How do we do that? with a handler function? or? but then we will need a function to retrieve the localStorage

The idea is that the todolist is populated with local storage AND new items are pushed to the local storage

What we can do is only use local storage?

1st push items to local storage
2nd read items from local storage
3rd delete items from local storage
*/





