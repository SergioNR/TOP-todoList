import { toggleTodoItemCompletionStatus } from "./toggleTodoItemCompletionStatus.js";
import { createTodoItemCompletionStatus } from "./createTodoItemCompletionStatus.js";


export const createToggleTodoItemCompletionStatusButton = (todoItem, todoCard) => {
    const toggleCompletionStatusButton = document.createElement(`button`); //! Create button
    toggleCompletionStatusButton.classList.add("toggleCompletionStatus"); //! Add class to the button
    toggleCompletionStatusButton.innerText = "Toggle completion"; //! Add text to the button


    toggleCompletionStatusButton.addEventListener("click", () => {      //! Add event listener to the button
        const oldTodoItemCompletionStatus = todoCard.querySelector(".todo-completion-status"); //! Get the completion status element

        todoItem.completed = toggleTodoItemCompletionStatus(todoItem.completed); //! Change the completion status of the todo item

        const newTodoItemCompletionStatus = createTodoItemCompletionStatus(todoItem.completed); //! Create a new completion status element
        todoCard.replaceChild(newTodoItemCompletionStatus, oldTodoItemCompletionStatus); //! Replace the old completion status element with the new one -- This is currently not working because the function CANT find the old element. I think it's because the old element is not a child of the todoCard. 
    });

    return toggleCompletionStatusButton;
}



// how to select the nodes inside an element -- Check 