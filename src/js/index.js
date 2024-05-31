import { displayTodos } from "./displayTodos.js";

import { creteNewTodoForm } from "./createNewTodoForm.js";

import { deleteAllTodos } from "./deleteAllTodos.js";

import { createDummyData } from "./createDummyData.js";

// Create a hidden input element
let input = document.createElement('input');
input.type = 'hidden';
input.id = 'storage';
document.body.appendChild(input);

// Initialize the input value with localStorage value
input.value = localStorage.getItem('todoList');

// Create a MutationObserver instance
let observer = new MutationObserver(function() {
  // When the input value changes, update the localStorage
  localStorage.setItem('todoList', input.value);
});

// Start observing the input element for attribute changes
observer.observe(input, { attributes: true });

// Whenever you want to change the localStorage,
// instead of using localStorage.setItem,
// you change the input value
input.value = 'new value';

displayTodos()

// instead of saving on an array, we want to save the items onto local storage

/* How do we do that? with a handler function? or? but then we will need a function to retrieve the localStorage

The idea is that the todolist is populated with local storage AND new items are pushed to the local storage

What we can do is only use local storage?

1st push items to local storage
2nd read items from local storage
3rd delete items from local storage
*/
