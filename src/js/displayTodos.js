import { createTodoItemCard } from "./createTodoItemCard.js";


export const displayTodos = (todoList) => {
    const todoListContainer = document.querySelector('.todoListContainer');
    
    if (todoList.length <= 0) {
    const noTodosText = document.createElement('p');
    noTodosText.classList.add('noTodosText');


    noTodosText.innerText = 'No pending To-Dos - ¡Congratulations!';

    todoListContainer.appendChild(noTodosText);
    }

    else {
        todoList.forEach(todoItem => {
            todoListContainer.appendChild(createTodoItemCard(todoItem));
        });
    }


}
