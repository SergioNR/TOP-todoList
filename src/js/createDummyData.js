import { TodoItem } from "./TodoItem.js";
import { deleteAllTodos } from "./deleteAllTodos.js";
import { todoList } from "./index.js";

let createDummyDataButton = document.querySelector('.createDummyDataButton');



createDummyDataButton.addEventListener('click', () => {
    deleteAllTodos();
    createDummyData(); //! this is not working - why?
    displayTodos();
})

export const createDummyData = (todoList) => {
    let dummyTodoItems = 2
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