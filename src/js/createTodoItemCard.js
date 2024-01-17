import { createTodoItemTitle } from './createTodoItemTitle.js';
import { createTodoItemDescription } from './createTodoItemDescription.js';
import { createTodoItemDueDate } from './createTodoItemDueDate.js';
import { createTodoItemCompletionStatus } from './createTodoItemCompletionStatus.js';
import { createTodoItemPriority } from './createTodoItemPriority.js';
import { createTodoItemNotes } from './createTodoItemNotes.js';


export const createTodoItemCard = (todoItem) => {
    const todoCard = document.createElement('div');
    todoCard.classList.add('todoCard');

    todoCard.appendChild(createTodoItemTitle(todoItem.title));
    todoCard.appendChild(createTodoItemDescription(todoItem.description));
    todoCard.appendChild(createTodoItemDueDate(todoItem.dueDate));
    todoCard.appendChild(createTodoItemPriority(todoItem.priority));
    todoCard.appendChild(createTodoItemNotes(todoItem.notes));
    // todoCard.appendChild(createTodoItemProject(todoItem.project));
    todoCard.appendChild(createTodoItemCompletionStatus(todoItem.completed));

    return todoCard;
}