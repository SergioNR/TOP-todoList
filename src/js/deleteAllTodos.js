import { displayTodos } from './displayTodos.js';
import { todoList } from './todoList.js';
import { pushTodoListToLocalStorage } from './createNewTodoForm.js';

export const deleteAllTodos = () => {
    todoList = []; //* NOT adding the "let" keyword here, because we are modifying the original array in the global scope
    localStorage.removeItem(`todoList`);
    displayTodos();
};


const deleteAllTodosButton = document.querySelector('.deleteAllTodosButton');

deleteAllTodosButton.addEventListener(`click`, () => {
    deleteAllTodos();
});
