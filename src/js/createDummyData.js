import { todoList } from "./todoList.js";
import { createNewTodo, pushTodoListToLocalStorage } from "./createNewTodoForm.js";

let createDummyDataButton = document.querySelector(".createDummyDataButton");

createDummyDataButton.addEventListener("click", () => {
  createDummyData(todoList);
});

export const createDummyData = (todoList) => {
  
  let dummyTodoItems = prompt(`how many dummy To-Dos would you like to create?`);

  if (isNaN(dummyTodoItems) === true) {
    
    alert(`Please enter a number.`);

  } else {

    
    for (let i = 0; i < dummyTodoItems; i++) {
      
      const todoTitle = generateTodoTitle();
      
      const todoDescription = generateTodoDescription();
      
      const todoDueDate = generateTodoDate();

      const todoPriority = generateTodoPriority();

      const todoNotes = generateTodoNotes();

      const todoProject = generateTodoProject();

      const todoStatus = generateTodoStatus();
      
      let todoItem = createNewTodo(todoTitle, todoDescription, todoDueDate, todoPriority, todoNotes, todoProject, todoStatus);
      
      todoList.push(todoItem)
      
    }
  }

  pushTodoListToLocalStorage(todoList);
};

const generateTodoTitle = () => {
  let randomWords = [
  `Organize`,
  `Exercise`,
  `Budgeting`,
  `Save`,
  `Mediate`,
  `Read`,
  `Connect`,
  `Learn`,
  `Declutter`,
  `Gratitude`,
  `Create`,
  `Rest`,
  `Plan`,
  `Reflect`
  ];

  let randomTitle = randomWords[Math.floor(Math.random() * randomWords.length)];

  return randomTitle;
}

const generateTodoDescription = () => {
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


const generateTodoDate = () => {
  let dueDate = new Date();

  dueDate.setDate(dueDate.getDate() + Math.floor(Math.random() * 7));

  return dueDate.toISOString().split('T')[0];
}

const generateTodoPriority = () => {
  let priorities = ['low', 'medium', 'high'];

  let randomPriority = priorities[Math.floor(Math.random() * priorities.length)]

  return randomPriority
}

const generateTodoNotes = () => {
  let notes = [`Check inventory`,
    `Follow up email`,
    `Submit proposal`,
    `Pay bills online`,
    `Finish report`,
    `Schedule meeting`,
    `Call client`,
    `Clean office space`,
    `Buy groceries`,
    `File tax return`]

    let randomNote = notes[Math.floor(Math.random() * notes.length)]

    return randomNote;
}

const generateTodoProject = () => {

}

const generateTodoStatus = () => {

  let statuses = [true, false];

  let randomStatus = statuses[Math.floor(Math.random() * statuses.length)]

  return randomStatus
}
