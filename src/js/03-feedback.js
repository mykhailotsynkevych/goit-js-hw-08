import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onTextareaInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

const LOCALSTORAGE_KEY = 'feedback-form-state';

isLocalStorageInfo();

function onTextareaInput(e) {
  const formData = {
    email: refs.input.value,
    message: refs.textarea.value,
  };
  // const value = e.target.value;
  // formData[e.target.name] = value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log({
    email: refs.input.value,
    message: refs.textarea.value,
  });

  localStorage.removeItem(LOCALSTORAGE_KEY);

  refs.form.reset();

}

function isLocalStorageInfo() {
  const savedInfo = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (savedInfo) {
    refs.input.value = savedInfo.email;
    refs.textarea.value = savedInfo.message;
    // console.log(savedInfo);
  }
}
