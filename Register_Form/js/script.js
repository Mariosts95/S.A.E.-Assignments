'use strict';

const contact_form = document.forms['contact-form'];
//console.log(contact_form);

// Reference to the form elements
const name = contact_form.elements['full-name'];
const email = contact_form.elements['email'];
const emailConf = contact_form.elements['confirm-email'];
const password = contact_form.elements['password'];
const confirm_password = contact_form.elements['confirm-password'];
const phone_number = contact_form.elements['phone-number'];
const address = contact_form.elements['address'];
const planet = contact_form.elements['planet'];
let isValid = true;

//Errors
const fullname_error = document.getElementById('full-name-error');
const email_error = document.getElementById('email-error');
const confirm_email_error = document.getElementById('confirm-email-error');
const password_error = document.getElementById('password-error');
const confirm_password_error = document.getElementById('confirm-password-error');
const phone_number_error = document.getElementById('phone-number-error');
const address_error = document.getElementById('address-error');
const planet_error = document.getElementById('planet-error');

//Regex
const fullname_regex = /^[a-zA-Z]{2,}[ ][a-zA-Z]{2,}[ ]?[a-zA-Z]{2,}?$/;
// Email regex 'stolen from the internet ^_^'
const email_regex = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/* phone numbers tested: +30 0123456789 0123456789 012-3456-789 012-3456789 +1-787-555-1212 Puerto Rico Phone */
const phone_number_regex = /^[+]?\d?[ -]?\d{2,5}?[ -]?\d{2,5}?[ -]?\d{2,5}$/;
const address_regex = /(\d+)?[ -]?([a-zA-z]+)[ -]?([a-zA-z]+)?[ -]?([a-zA-z]+)?(\d+)?([a-zA-z])?/;

//Password
//Weak – If the length is under 8 characters.
const password_weak_regex = /(?=.{8,}).*/;
//Medium – If the length is 10 characters or more and has a combination of symbols, caps, text.
const password_medium_regex = /^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/;
//Strong – If the length is 14 characters or more and has a combination of symbols, caps, text.
const password_strong_regex = /^(?=.{16,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*(?=[%@!$&?])$/;

//Obi-Wan Kenobi gif
const obi = document.getElementById('obi');
function helloThere() {
  obi.src = obi.src; // Start the animation from the beginning
  obi.classList.toggle('visible');
}

function byebyeThere() {
  obi.classList.toggle('visible');
}

//Fullname check

name.addEventListener('blur', () => {
  if (name.value.trim().length === 0) {
    name.classList.add('input-error');
    fullname_error.innerHTML = 'So no name, you have, hmm?';
    isValid = false;
  } else if (!fullname_regex.test(name.value)) {
    fullname_error.innerHTML = 'Thats a name not.  Yes, hmmm.';
    name.classList.add('input-error');
    isValid = false;
  } else {
    fullname_error.innerHTML = '';
    name.classList.remove('input-error');
    helloThere();
    setTimeout(byebyeThere, 2.4 * 1000);
    isValid = true;
  }
});

//Email check

email.addEventListener('blur', () => {
  if (email.value.trim().length === 0) {
    email_error.innerHTML = 'An email either you have not, hmm?';
    email.classList.add('input-error');
    isValid = false;
  } else if (!email_regex.test(email.value)) {
    email_error.innerHTML = 'Sure this is the right email are you?';
    email.classList.add('input-error');
    isValid = false;
  } else {
    email_error.innerHTML = '';
    email.classList.remove('input-error');
    isValid = true;
  }
});

//Confirm email check

emailConf.addEventListener('blur', () => {
  if (emailConf.value.trim().length === 0) {
    confirm_email_error.innerHTML = 'To type your e-mail again you need.';
    emailConf.classList.add('input-error');
    isValid = false;
  } else if (emailConf.value !== email.value) {
    confirm_email_error.innerHTML = 'To be same the e-mails need.';
    emailConf.classList.add('input-error');
    isValid = false;
  } else {
    confirm_email_error.innerHTML = '';
    emailConf.classList.remove('input-error');
    isValid = true;
  }
});

//Password check
password.addEventListener('input', () => {
  if (password.value.trim().length === 0) {
    password_error.innerHTML = 'Jedi needs a password.';
    password_error.classList.remove('password-medium');
    password_error.classList.remove('password-strong');
    password.classList.add('input-error');
    isValid = false;
  } else if (!password_weak_regex.test(password.value)) {
    password_error.innerHTML = 'Weak with this password, the force is.';
    password.classList.add('input-error');
    password_error.classList.remove('password-medium');
    password_error.classList.remove('password-strong');
    isValid = false;
  } else if (!password_medium_regex.test(password.value)) {
    password_error.innerHTML = 'Jedi, use a stronger password, could.';
    password.classList.remove('input-error');
    password_error.classList.remove('password-strong');
    password_error.classList.add('password-medium');
    isValid = true;
  } else if (!password_strong_regex.test(password.value)) {
    password_error.innerHTML = 'Strong with this password, the force is.  Herh herh herh.';
    password.classList.remove('input-error');
    password_error.classList.add('password-strong');
    password_error.classList.remove('password-medium');
    isValid = true;
  }
});

password.addEventListener('blur', () => {
  if (isValid) {
    password_error.innerHTML = '';
    password_error.classList.remove('password-strong');
    password_error.classList.remove('password-medium');
  }
});

//Confirm Password check

confirm_password.addEventListener('input', () => {
  if (confirm_password.value.trim().length === 0) {
    confirm_password_error.innerHTML = 'To confirm your password you need.';
    confirm_password.classList.add('input-error');
    isValid = false;
  } else if (confirm_password.value !== password.value) {
    confirm_password_error.innerHTML = 'Much passwords not.';
    confirm_password.classList.add('input-error');
    isValid = false;
  } else {
    confirm_password_error.innerHTML = '';
    confirm_password.classList.remove('input-error');
    isValid = true;
  }
});

//Phone number check

phone_number.addEventListener('blur', () => {
  if (phone_number.value.trim().length === 0) {
    phone_number_error.innerHTML = 'We contact you, how can, hmm?';
    phone_number.classList.add('input-error');
    isValid = false;
  } else if (!phone_number_regex.test(phone_number.value)) {
    phone_number_error.innerHTML = 'Your phone number is valid not.';
    phone_number.classList.add('input-error');
    isValid = false;
  } else {
    phone_number_error.innerHTML = '';
    phone_number.classList.remove('input-error');
    isValid = true;
  }
});

//Address check

address.addEventListener('blur', () => {
  if (address.value.trim().length === 0) {
    address_error.innerHTML = 'No home, you have?';
    address.classList.add('input-error');
    isValid = false;
  } else if (!address_regex.test(address.value)) {
    address_error.innerHTML = 'To use a valid address you need.  Herh herh herh.';
    address.classList.add('input-error');
    isValid = false;
  } else {
    address_error.innerHTML = '';
    address.classList.remove('input-error');
    isValid = true;
  }
});

//Planet check

planet.addEventListener('blur', () => {
  if (planet.value.trim().length === 0) {
    planet_error.innerHTML = 'To know  your planet we need.';
    planet.classList.add('input-error');
    isValid = false;
  } else if (!address_regex.test(planet.value)) {
    planet_error.innerHTML = 'Of this planet never heard.';
    planet.classList.add('input-error');
    isValid = false;
  } else {
    planet_error.innerHTML = '';
    planet.classList.remove('input-error');
    isValid = true;
  }
});

contact_form.addEventListener('submit', (event) => {
  if (!isValid) event.preventDefault();
});

/* const input_fields = {
  name: /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
  email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
  address: /^(\b\D+\b)?\s*(\b.*?\d.*?\b)\s*(\b\D+\b)?$/,
  telephone: /^\d{3,7}[- ]?\d{5,}$/,
};

const validate = (field, regex) => {
  regex.test(field.value)
    ? (field.className = "valid")
    : (field.className = "invalid");
};

let keys = document.querySelectorAll("input");
keys.forEach((item) =>
  item.addEventListener("keyup", (e) => {
    validate(e.target, input_fields[e.target.attributes.name.value]);
  })
);

e.target.attributes.name.value;
//gets the target field and goes to its attributes
 */
