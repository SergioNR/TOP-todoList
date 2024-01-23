import { displayTodos } from "./displayTodos.js";
import { createDummyData } from "./createDummyData.js";
import { TodoItem } from "./TodoItem.js";
import "../css/styles.css"


export let todoList = [
];

todoList.push(new TodoItem("Title 1", "Description 1", "Due date 1", "Priority 1", "Notes 1", "Project 1", true));


createDummyData(todoList);
displayTodos(todoList);
