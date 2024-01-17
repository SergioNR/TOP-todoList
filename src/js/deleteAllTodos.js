import { displayTodos } from './displayTodos.js';
import { todoList } from './index.js';
import { clearTodosContainer } from './clearTodosContainer.js';

let deleteAllTodosButton = document.querySelector('.deleteAllTodosButton');


export const deleteAllTodos = () => {
    todoList = [];
    clearTodosContainer();
}

deleteAllTodosButton.addEventListener('click', () => {
    deleteAllTodos(todoList);
});



// want i want is to be able to delete all todos and then create dummy data
// but do i want to delete user inputted todos? or just dummy data? - lets go with deleting everything for now

/* maybe i can solve this with a clear display function? */