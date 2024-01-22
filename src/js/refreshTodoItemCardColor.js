export const refreshTodoItemCardColor = (todoItem, todoCard) => {
    if (todoItem.completed === true) {
        todoCard.classList.remove("todoCardRed")
        todoCard.classList.add("todoCardGreen"); 
    }
    else if (todoItem.completed === false) {
        todoCard.classList.remove("todoCardGreen")
        todoCard.classList.add("todoCardRed"); 
    }

    else {
        console.log(`something is wrong in teh refreshTodoItemCardColor function`)
    }
}