export const toggleTodoItemCompletionStatus = (completionStatus) => {
  if (completionStatus === true) {
    return completionStatus = false;
  }
  else if (completionStatus === false) {
    return completionStatus = true;
  }
  else {
    console.log(`Something is wrong in the code because the completion status is neither true nor false. on the toggleTodoItemCompletionStatus function`)
  }
}

/* 4- create function to update the visual of completion
*/





