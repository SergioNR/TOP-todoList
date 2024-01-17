import { todoList, todoList } from './index.js';
let deleteAllTodosButton = document.querySelector('.deleteAllTodosButton');

let todoList = todoList

deleteAllTodosButton.addEventListener('click', (todoList) => {
    deleteAllTodos(todoList); // Access todoList directly
    console.log(todoList);
});

export const deleteAllTodos = (todoList) => {
    todoList = [];
}


// want i want is to be able to delete all todos and then create dummy data
// but do i want to delete user inputted todos? or just dummy data? - lets go with deleting everything for now