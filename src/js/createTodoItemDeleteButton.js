import { clearTodosContainer } from "./clearTodosContainer.js";
import { displayTodos } from "./displayTodos.js";
import { todoList } from "./index.js";

export const createTodoItemDeleteButton = (todoItem, todoCard) => {
    const deleteButton = document.createElement(`button`);
    deleteButton.classList.add(`deleteButton`);
    deleteButton.textContent = `Delete ToDo`;
    
    deleteButton.addEventListener(`click`, () => {
        console.log(todoItem);
        const index = todoList.indexOf(todoItem);
        todoList.splice(index, 1);

        clearTodosContainer();
        displayTodos(todoList);
    })

    return deleteButton;
};


/* 
1- Crear el boton de delete
2- Hacer que el boton de delete seleccione el todoCard en cuestion
3- borrar del todoList el elemento del array que estamos seleccionando
4- volver a mostar el display de los ToDos*/