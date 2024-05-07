


// the problem im having is that everytime the page reloads, the todoList is empty, so i need to retrieve it from local storage

// i need to create a function that retrieves the todoList from local storage
export let todoList = [];

window.addEventListener(`load`, () => { 
    console.log(`page is fully loaded`)

    let retrievedTodoList = localStorage.getItem(`todoList`)

    todoList = JSON.parse(retrievedTodoList)
});