import { createTodoItemCard } from "./createTodoItemCard.js";
// watch when the localStorage changes? or call the displayTodos function when pushing to localStorage?

//! AS A TEMPORARY SOLUTION, WE WILL CALL THE DISPLAYTODOS FUNCTION EVERYTIME WE PUSH TO LOCALSTORAGE

const retrieveTodoListFromLocalStorage = () => {
  
  let retrievedTodoList = localStorage.getItem(`todoList`)

  if (retrievedTodoList === null) {
    console.log(`no todolist available in local storage`)

    return null
  }
  else {
    let parsedTodoList = JSON.parse(retrievedTodoList)  
  
    return parsedTodoList;
  }

}

const todoListContainer = document.querySelector(`.todoListContainer`)

export const displayTodos = () => {

  let parsedTodoList = retrieveTodoListFromLocalStorage()

  console.log(parsedTodoList)
  
  if (parsedTodoList === null || parsedTodoList.length <= 0) {
    console.log(`no todos in this list`)

    const noTodosText = document.createElement(`p`)

    noTodosText.innerText = `Congratulations, no toDos left!`

    noTodosText.classList.add(`noTodosText`)

    todoListContainer.append(noTodosText)

  } 

  else {
    parsedTodoList.forEach( (todoItem) => {
      createTodoItemCard(todoItem)
    })
  }

}