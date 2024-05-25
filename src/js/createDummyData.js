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
    
    const todoDescription = generateTodoDescription();

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
  `Organize`
  `Exercise`
  `Budgeting`
  `Save`
  `Mediate`
  `Read`
  `Connect`
  `Learn`
  `Declutter`
  `Gratitude`
  `Create`
  `Rest`
  `Plan`
  `Reflect`
  ];

  let randomTitle = randomWords[Math.floor(Math.random() * randomWords.length)];

  return randomTitle;
}

generateTodoDescription = () => {
  const descriptions = [
    'A brief overview of the history of the internet and its impact on modern society.',
    'An introduction to the principles of object-oriented programming and its applications.',
    'A discussion on the importance of sustainable practices in modern agriculture.',
    'An analysis of the role of artificial intelligence in healthcare and medicine.',
    'A review of the latest trends in fashion and their influence on popular culture.',
  ]; //* Randomly generated descriptions

  const randomIndex = Math.floor(Math.random() * descriptions.length);
  
  return descriptions[randomIndex];

}



