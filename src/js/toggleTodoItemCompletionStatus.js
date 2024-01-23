export const toggleTodoItemCompletionStatus = (completionStatus) => {
  if (completionStatus === true) {
    let completionStatus = false;
    return completionStatus;
  }
  else if (completionStatus === false) {
    let completionStatus = true;
    return completionStatus;
  }
  else {
    alert(`Something is wrong in the code because the completion status is neither true nor false. on the toggleTodoItemCompletionStatus function`)
  }
}





