import { createTodoItemTitle } from "./createTodoItemTitle";
import { createTodoItemDescription } from "./createTodoItemDescription";
import { createTodoItemDueDate } from "./createTodoItemDueDate";
import { createTodoItemCompletionStatus } from "./createTodoItemCompletionStatus";
import { createTodoItemPriority } from "./createTodoItemPriority";
import { createTodoItemNotes } from "./createTodoItemNotes";
import { createTodoItemProject } from "./createTodoItemProject";
import { createToggleTodoItemCompletionStatusButton } from "./createToggleTodoItemCompletionStatusButton";
import { refreshTodoItemCardColor } from "./refreshTodoItemCardColor";
import { createTodoItemDeleteButton } from "./createTodoItemDeleteButton";

export const createTodoItemCard = (todoItem) => {
  const todoCard = document.createElement(`div`);
  todoCard.classList.add(`todoCard`);

  // Build the informational items of the card
  todoCard.appendChild(createTodoItemTitle(todoItem.title));
  todoCard.appendChild(createTodoItemDescription(todoItem.description));
  todoCard.appendChild(createTodoItemDueDate(todoItem.dueDate));
  todoCard.appendChild(createTodoItemPriority(todoItem.priority));
  todoCard.appendChild(createTodoItemNotes(todoItem.notes));
  todoCard.appendChild(createTodoItemProject(todoItem.project));
  todoCard.appendChild(createTodoItemCompletionStatus(todoItem.completed));

  refreshTodoItemCardColor(todoItem, todoCard);

  // Build the button items of the card
  todoCard.appendChild(
    createToggleTodoItemCompletionStatusButton(todoItem, todoCard),
  );

  todoCard.appendChild(createTodoItemDeleteButton(todoItem, todoCard));

  return todoCard;
};
