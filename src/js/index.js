import { displayTodos } from "./displayTodos.js";
import { createDummyData } from "./createDummyData.js";
import { deleteAllTodos } from "./deleteAllTodos.js";
import { TodoItem } from "./TodoItem.js";





export let todoList = [
];

todoList.push(new TodoItem("Title 1", "Description 1", "Due date 1", "Priority 1", "Notes 1", "Project 1", false));


createDummyData(todoList);
displayTodos(todoList);
