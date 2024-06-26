import { createTodoItemCard } from "./todoItemCard.js";
import { clearTodoListContainer } from "./clearTodoListContainer.js";

//! AS A TEMPORARY SOLUTION, WE WILL CALL DISPLAYTODOS() EVERYTIME WE MANUALLY PUSH TO LOCALSTORAGE

const retrieveTodoListFromLocalStorage = () => {
  
  let retrievedTodoList = localStorage.getItem(`todoList`)

  if (retrievedTodoList === null) {
    console.log(`no todolist available in local storage - retrievedTodoListFromLocalStorage()`)

    return null
  }
  else {
    let parsedTodoList = JSON.parse(retrievedTodoList)  
  
    return parsedTodoList;
  }

}

const todoListContainer = document.querySelector(`.todoListContainer`)

export const displayTodos = () => {

  clearTodoListContainer()

  let parsedTodoList = retrieveTodoListFromLocalStorage()

  // console.log(parsedTodoList) //* DEBUG - check the value of parsedTodoList

  const todoListContainer = document.querySelector(`.todoListContainer`)
  

  if (parsedTodoList === null || parsedTodoList.length <= 0) {
    console.log(`no todos in this list`)

    const noTodosText = document.createElement(`p`)

    noTodosText.innerText = `Congratulations, no toDos left!`

    noTodosText.classList.add(`noTodosText`)

    todoListContainer.append(noTodosText)

  } 

  else {

    parsedTodoList.forEach( (todoItem) => {

    todoListContainer.append(createTodoItemCard(todoItem))

    })
  }

}