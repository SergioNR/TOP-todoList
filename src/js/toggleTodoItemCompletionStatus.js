export const toggleTodoItemCompletionStatus = (completionStatus, todoCard) => {
  if (completionStatus === true) {
    todoCard.classList.remove("todoCardGreen");
    todoCard.classList.add("todoCardRed");
    return completionStatus = false;
  }
  else if (completionStatus === false) {
    todoCard.classList.remove("todoCardRed");
    todoCard.classList.add("todoCardGreen");
    return completionStatus = true;
  }
  else {
    console.log(`Something is wrong in the code because the completion status is neither true nor false. on the toggleTodoItemCompletionStatus function`)
  }
}

/* 4- create function to update the visual of completion
*/





