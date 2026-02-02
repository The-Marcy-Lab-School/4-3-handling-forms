// 3-todo-list: Challenge - Event Delegation

// TODO: Get references to the form and todo list elements


// TODO: Create a handleSubmit function
// In this function:
// 1. Prevent default
// 2. Extract the todo text from the form
// 3. Create a new <li> element
// 4. Create a <p> element and set the text content to the todo text
// 5. Create a <button> element and set the text content to "Delete"
// 6. Append the <p> and <button> to the <li>
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

const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');

// Handle form submission
const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;

  // Extract the todo text
  const todoText = form.elements.todoText.value;

  // Create, Modify, Append
  const li = document.createElement('li');
  const textP = document.createElement('p');
  const deleteBtn = document.createElement('button');

  textP.textContent = todoText;
  deleteBtn.textContent = 'Delete';

  li.append(textP, deleteBtn);
  todoList.append(li);

  // Reset form
  form.reset();
};

// Handle delete button clicks using event delegation
const handleDelete = (event) => {
  // Check if a button was clicked
  if (event.target.matches('button')) {
    // Remove the parent li
    event.target.closest('li').remove();
  }
};

todoForm.addEventListener('submit', handleSubmit);
todoList.addEventListener('click', handleDelete);