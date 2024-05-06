import { displayTodos } from "./displayTodos.js";

// displayTodos()

// createDummyData(todoList);
// displayTodos(todoList);
// console.log(todoList);

// instead of saving on an array, we want to save the items onto local storage

/* How do we do that? with a handler function? or? but then we will need a function to retrieve the localStorage

The idea is that the todolist is populated with local storage AND new items are pushed to the local storage

What we can do is only use local storage?

1st push items to local storage
2nd read items from local storage
3rd delete items from local storage
*/
