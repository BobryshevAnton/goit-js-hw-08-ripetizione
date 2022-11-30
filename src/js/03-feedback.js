// import throttle from 'lodash.throttle';
//refs
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name="email"]');
const inputMessage = document.querySelector('[name="message"]');
const button = document.querySelector('button');
const LOCAL_KEY = 'feedback-form-state';

//addlistener
form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
form.addEventListener('input', populateTextAria);

populateTextAria();
const userData = { email: inputEmail.value, message: inputMessage.value };

function handleInput(event) {
  const userData = { email: inputEmail.value, message: inputMessage.value };

  localStorage.setItem(LOCAL_KEY, JSON.stringify(userData));
}

function handleSubmit(event) {
  event.preventDefault();
  if (inputEmail.value === '' || inputMessage.value === '') {
    alert('Please fill in all the fields!');
  }
  localStorage.clear();

  console.log(userData);

  form.reset();
}

function populateTextAria(event) {
  const messageExport = localStorage.getItem(LOCAL_KEY);
  const messageParse = JSON.parse(messageExport);
  if (messageExport) {
    inputEmail.value = messageParse.email;
    inputMessage.value = messageParse.message;
  }
}
