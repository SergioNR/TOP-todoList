// the problem im having is that everytime the page reloads, the todoList is empty, so i need to retrieve it from local storage

// i need to create a function that retrieves the todoList from local storage
export let todoList = [];

window.addEventListener(`load`, () => { 
    // console.log(`page is fully loaded and will proceed to check local storage for todoList`) //* DEBUG - check if the page is fully loaded

    // console.log(`localStorage is ${localStorage.getItem(`todoList`)}`) //* DEBUG - check the value of localStorage

    if (localStorage.getItem(`todoList`) === null) {

        console.log(`no todolist available in local storage`)

        todoList = [];
    }

    else {
        let retrievedTodoList = localStorage.getItem(`todoList`)

        todoList = JSON.parse(retrievedTodoList)
    }

});