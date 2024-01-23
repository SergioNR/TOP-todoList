import { toggleTodoItemCompletionStatus } from "./toggleTodoItemCompletionStatus.js";
import { createTodoItemCompletionStatus } from "./createTodoItemCompletionStatus.js";
import { refreshTodoItemCardColor } from "./refreshTodoItemCardColor.js";


export const createToggleTodoItemCompletionStatusButton = (todoItem, todoCard) => {
    const toggleCompletionStatusButton = document.createElement(`button`);
    toggleCompletionStatusButton.classList.add("toggleCompletionStatus");
    toggleCompletionStatusButton.innerText = "Toggle completion";


    toggleCompletionStatusButton.addEventListener("click", () => {      
        const oldTodoItemCompletionStatus = todoCard.querySelector(".todo-completion-status"); //! Get the completion status element


        
        todoItem.completed = toggleTodoItemCompletionStatus(todoItem.completed); //! Change the completion status of the todo item




        const newTodoItemCompletionStatus = createTodoItemCompletionStatus(todoItem.completed); //! Create a new completion status element


        todoCard.replaceChild(newTodoItemCompletionStatus, oldTodoItemCompletionStatus);

        
        refreshTodoItemCardColor(todoItem, todoCard); //! Refresh the color of the todo item card
    });

    return toggleCompletionStatusButton;
}



// how to select the nodes inside an element -- Check 