'use strict';

const newsletter = document.forms['newsletter'];

let valid = false;
const newsletter_email = newsletter.elements['newsletter-email'];

//Errors
const newsletter_email_error = document.getElementById('newsletter-error');

//Regex
const newsletter_email_regex = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//Email check

newsletter_email.addEventListener('blur', () => {
  if (newsletter_email.value.trim().length === 0) {
    newsletter_email_error.innerHTML = 'You must enter your e-mail';
    newsletter_email.classList.add('input-error');
    valid = false;
  } else if (!newsletter_email_regex.test(newsletter_email.value)) {
    newsletter_email_error.innerHTML = 'The e-mail you entered is not valid';
    newsletter_email.classList.add('input-error');
    valid = false;
  } else {
    newsletter_email_error.innerHTML = '';
    newsletter_email.classList.remove('input-error');
    valid = true;
  }
});

newsletter.addEventListener('submit', (event) => {
  if (!valid) event.preventDefault();
});