import { TodoItem } from "./TodoItem.js";
import { todoList } from "./index.js";
import { displayTodos } from "./displayTodos.js";
import { clearTodosContainer } from "./clearTodosContainer.js";

let createDummyDataButton = document.querySelector('.createDummyDataButton');

createDummyDataButton.addEventListener('click', () => {
    clearTodosContainer();
    createDummyData(todoList);
    displayTodos(todoList); 
})

export const createDummyData = (todoList) => {
    let dummyTodoItems = 3;
    // prompt('How many dummy To-Dos would you like to create?');
    
    if (isNaN(dummyTodoItems) === true) { 
        alert(`Please enter a number.`);
        // createDummyData(todoList);
    }

    else {
    for (let i = 0; i < dummyTodoItems; i++) {
    todoList.push(new TodoItem(
        `hello`,
        `this is the description`,
        `2024-12-31`,
        `high`,
        `this is the notes`,
        `this is the project`,
        false,
    ));
    }
}
}