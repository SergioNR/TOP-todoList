import { displayTodos } from "./displayTodos.js";
import { createDummyData } from "./createDummyData.js";
import { TodoItem } from "./TodoItem.js";
import "../css/styles.css";
import { deleteAllTodos } from "./deleteAllTodos.js";
import { cycleTodoItemPriority } from "./cyclePriority.js";


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


