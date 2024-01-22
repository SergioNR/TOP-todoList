import { createTodoItemTitle } from "./createTodoItemTitle.js";
import { createTodoItemDescription } from "./createTodoItemDescription.js";
import { createTodoItemDueDate } from "./createTodoItemDueDate.js";
import { createTodoItemCompletionStatus } from "./createTodoItemCompletionStatus.js";
import { createTodoItemPriority } from "./createTodoItemPriority.js";
import { createTodoItemNotes } from "./createTodoItemNotes.js";
import { createTodoItemProject } from "./createTodoItemProject.js";
import { createToggleTodoItemCompletionStatusButton } from "./createToggleTodoItemCompletionStatusButton.js";
import { refreshTodoItemCardColor } from "./refreshTodoItemCardColor.js";

export const createTodoItemCard = (todoItem) => {
  const todoCard = document.createElement("div");
  todoCard.classList.add("todoCard");

  // Build the informational items of the card
  todoCard.appendChild(createTodoItemTitle(todoItem.title));
  todoCard.appendChild(createTodoItemDescription(todoItem.description));
  todoCard.appendChild(createTodoItemDueDate(todoItem.dueDate));
  todoCard.appendChild(createTodoItemPriority(todoItem.priority));
  todoCard.appendChild(createTodoItemNotes(todoItem.notes));
  todoCard.appendChild(createTodoItemProject(todoItem.project));
  todoCard.appendChild(createTodoItemCompletionStatus(todoCard, todoItem.completed));

  refreshTodoItemCardColor(todoItem, todoCard);

  //! Maybe we could use a function to color the background of the card? and recall it after toggling?

  // Build the button items of the card
  todoCard.appendChild(createToggleTodoItemCompletionStatusButton(todoItem, todoCard))


  return todoCard;
  
};



