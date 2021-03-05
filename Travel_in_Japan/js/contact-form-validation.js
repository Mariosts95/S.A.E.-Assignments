'use strict';

const contact_form = document.forms['contact-form-info'];

let isValid = false;
const name = contact_form.elements['full-name'];
const email = contact_form.elements['email'];
const subject = contact_form.elements['subject'];
const message = contact_form.elements['textarea'];

console.log(textarea);

//Errors
const fullname_error = document.getElementById('full-name-error');
const email_error = document.getElementById('email-error');
const subject_error = document.getElementById('subject-error');
const message_error = document.getElementById('message-error');


//Regex
const fullname_regex = /^[a-zA-Z]{2,}[ ][a-zA-Z]{2,}[ ]?[a-zA-Z]{2,}?$/;
const email_regex = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Fullname check

name.addEventListener('blur', () => {
  if (name.value.trim().length === 0) {
    name.classList.add('input-error');
    fullname_error.innerHTML = 'You must enter your name';
    isValid = false;
  } else if (!fullname_regex.test(name.value)) {
    fullname_error.innerHTML = 'The name you entered is not valid';
    name.classList.add('input-error');
    isValid = false;
  } else {
    fullname_error.innerHTML = '';
    name.classList.remove('input-error');
    isValid = true;
  }
});

//Email check

email.addEventListener('blur', () => {
  if (email.value.trim().length === 0) {
    email_error.innerHTML = 'You must enter your e-mail';
    email.classList.add('input-error');
    isValid = false;
  } else if (!email_regex.test(email.value)) {
    email_error.innerHTML = 'The e-mail you entered is not valid';
    email.classList.add('input-error');
    isValid = false;
  } else {
    email_error.innerHTML = '';
    email.classList.remove('input-error');
    isValid = true;
  }
});

//Subject check

subject.addEventListener('blur', () => {
  if (subject.value.trim().length === 0) {
    subject_error.innerHTML = 'You must enter the name of the subject';
    subject.classList.add('input-error');
    isValid = false;
  } else {
    subject_error.innerHTML = '';
    subject.classList.remove('input-error');
    isValid = true;
  }
});

//Textarea check

message.addEventListener('blur', () => {
  if (message.value.trim().length === 0) {
    message.placeholder = 'The message area should not be empty';
    message.classList.add('input-error');
    isValid = false;
  } else {
    message.placeholder = 'Your Message';
    message.classList.remove('input-error');
    isValid = true;
  }
});

contact_form.addEventListener('submit', (event) => {
  if (!isValid) event.preventDefault();
});