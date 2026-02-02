const form = document.querySelector('#contact-form');
const output = document.querySelector('#output');

form.addEventListener('submit', (event) => {
  // 1. Prevent the default form submission (page reload)
  event.preventDefault();

  // 2. Extract the form data
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  // 3. Use the data (here we're just displaying it)
  document.querySelector("#output-status").textContent = "Message Received!";
  document.querySelector("#output-from").textContent = `${name} (${email})`;
  document.querySelector("#output-message").textContent = `${message}`;

  // 4. Reset the form (clear the inputs)
  form.reset();
});