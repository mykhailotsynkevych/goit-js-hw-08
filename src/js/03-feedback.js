import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

const LOCALSTORAGE_KEY = 'feedback-form-state';

isLocalStorageInfo();

const formData = {};

function onTextareaInput(e) {
  const value = e.target.value;
  formData[e.target.name] = value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  localStorage.removeItem('feedback-form-state');

  refs.form.reset();

  console.log(formData);
}

function isLocalStorageInfo(e) {
  const savedInfo = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (savedInfo) {
    refs.input.value = savedInfo.email;
    refs.textarea.value = savedInfo.message;
    console.log(savedInfo);
  }
}