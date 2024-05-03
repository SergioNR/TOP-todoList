export const cycleTodoItemPriority = (todoItemPriority) => {
    let receivedPriorityArray = todoItemPriority.split(`:`);

    let receivedPriority = receivedPriorityArray[1].toLowerCase().trim()
    
    // console.log(`receiving ${receivedPriority}`)
    
    if (receivedPriority === `high`) {
        // console.log(`received ${receivedPriority} & returning MEDIUM`)
        return `Medium`;
    }
    if (receivedPriority === `medium`) {
        // console.log(`received ${receivedPriority} & returning LOW`)
        return `Low`;
    }
    if (receivedPriority === `low`) {
        // console.log(`received ${receivedPriority} & returning HIGH`)
        return `High`;
    }
}

// the issue im having is that on the first cycle, the returned item is an array, but on the second cycle, the returned text is just a single word


document.addEventListener('DOMContentLoaded', (event) => {
    

    const priorityIndicatorButton = document.querySelectorAll('.todo-priority');

    priorityIndicatorButton.forEach((todoPriority) => {
        todoPriority.addEventListener('click', () => {

            
            // console.log(cycleTodoItemPriority(todoPriority.innerText))

            let newPriority = cycleTodoItemPriority(todoPriority.innerText);

            todoPriority.innerText = `Priority: ${newPriority}`
        });
    })

});
