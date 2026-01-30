// 3-todo-list: Challenge - Event Delegation

// TODO: Get references to the form and todo list elements


// TODO: Create a handleSubmit function
// In this function:
// 1. Prevent default
// 2. Extract the todo text from the form
// 3. Create a new <li> element
// 4. Set the text content to the todo text
// 5. Create a delete button (type="button", textContent="Delete")
// 6. Append the button to the <li>
// 7. Append the <li> to the todo list
// 8. Reset the form


// TODO: Create a handleDelete function using EVENT DELEGATION
// In this function:
// 1. Check if the clicked element is a button (use event.target.matches('button'))
// 2. If it is, find the closest <li> parent
// 3. Remove the <li> from the DOM


// TODO: Add event listeners
// 1. Submit listener on the form (calls handleSubmit)
// 2. Click listener on the TODO LIST (not the buttons!) (calls handleDelete)


