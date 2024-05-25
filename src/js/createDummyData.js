import { todoList } from "./todoList.js";
import { TodoItem } from "./TodoItemClass.js";
import { pushTodoListToLocalStorage } from "./createNewTodoForm.js";

let createDummyDataButton = document.querySelector(".createDummyDataButton");

createDummyDataButton.addEventListener("click", () => {
  createDummyData(todoList);
});

export const createDummyData = (todoList) => {
  
  let dummyTodoItems = prompt(`how many dummy To-Dos would you like to create?`);

  if (isNaN(dummyTodoItems) === true) {
    
    alert(`Please enter a number.`);

  } else {

    const todoTitle = generateTodoTitle();

    for (let i = 0; i < dummyTodoItems; i++) {
      todoList.push(
        new TodoItem(
          `hello`,
          `this is the description`,
          `2024-12-31`,
          `high`,
          `this is the notes`,
          `dummy Data`,
          true,
        ),
      );
    }
  }

  pushTodoListToLocalStorage(todoList);
};

generateTodoTitle = () => {
  let randomWords = [
    `hello`,
    `world`,
    `this`,
    `is`,
    `a`,
    `random`,
    `title`,
    `for`,
    `a`,
    `todo`,
  ];

  let randomTitle = randomWords[Math.floor(Math.random() * randomWords.length)];

  return randomTitle;
}

