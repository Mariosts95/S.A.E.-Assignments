'use strict';

const contact_form = document.forms['contact-form'];
//console.log(contact_form);

// Reference to the form elements
const fullname = contact_form.elements['full-name'];
const email = contact_form.elements['email'];
const confirm_email = contact_form.elements['confirm-email'];
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

/* 
console.log(fullname);
console.log(password);
console.log(confirm_password);
console.log(email);
console.log(confirm_email);
console.log(phone_number);
console.log(address);  
console.log(planet);
*/

//Regex
const fullname_regex = /^[a-zA-Z]{2,}[ ][a-zA-Z]{2,}[ ]?[a-zA-Z]{2,}?$/;
// Email regex 'stolen from the internet ^_^'
const email_regex = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/* 
phone numbers tested:
+30 0123456789
0123456789
012-3456-789
012-3456789
+1-787-555-1212 Puerto Rico Phone
*/
const phone_number_regex = /^[+]?\d?[ -]?\d{2,5}?[ -]?\d{2,5}?[ -]?\d{2,5}$/;
const address_regex = /(\d+)?[ -]?([a-zA-z]+)[ -]?([a-zA-z]+)?[ -]?([a-zA-z]+)?(\d+)?([a-zA-z])?/;

//Password
//Weak – If the length is under 8 characters.
const password_weak_regex = /(?=.{8,}).*/;
//Medium – If the length is 10 characters or more and has a combination of symbols, caps, text.
const password_medium_regex = /^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/;
//Strong – If the length is 14 characters or more and has a combination of symbols, caps, text.
const password_strong_regex = /^(?=.{16,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*(?=[%@!$&?])$/;
//Fullname check

fullname.addEventListener('blur', () => {
    if (fullname.value.trim().length === 0) {
        //console.error('Fullname is missing');
        isValid = false;
        fullname_error.innerHTML = 'So you have no name?';
    } else if (!fullname_regex.test(fullname.value)) {
        //console.error('Fullname is not Valid');
        fullname_error.innerHTML = 'Fullname is not Valid';
      isValid = false;
    } else {
        fullname_error.innerHTML = '';
        isValid = true;
    }
});

//Email check

email.addEventListener('blur', () => {
    if (email.value.trim().length === 0) {
        //console.error('Email is missing');
        email_error.innerHTML ='You dont\' have an email either?';
        isValid = false;
    } else if (!email_regex.test(email.value)) {
        //console.error('Email is not valid');
        email_error.innerHTML ='Are you sure this is the right email?';
        isValid = false;
    } else {
        email_error.innerHTML ='';
        isValid = true;
    }
});

//Confirm email check

confirm_email.addEventListener('blur', () => {
    if (confirm_email.value.trim().length === 0) {
        //console.error('Confirm Email is missing');
        confirm_email_error.innerHTML = 'You need to type your e-mail again';
        isValid = false;
    } else if (confirm_email.value !== email.value) {
        console.error('Emails do not match');
        confirm_email_error.innerHTML = 'The e-mails need to be same';
        isValid = false;
    } else {
        confirm_email_error.innerHTML = '';
        isValid = true;
    }
});

//Password check
password.addEventListener('input', () => {
    if (password.value.trim().length === 0) {
        console.error('Password is missing')
        password_error.innerHTML = 'Password is missing';
        isValid = false;
    } else if (!password_weak_regex.test(password.value)) {
        console.warn('Password is weak')
        password_error.innerHTML = 'The Force is weak with this password';
        isValid = false;
    } else if (!password_medium_regex.test(password.value)) {
        console.warn('Password is medium')
        password_error.innerHTML = 'The Force is medium with this password';
        isValid = true;
    } else if (!password_strong_regex.test(password.value)) {
        console.warn('Password is strong')
        password_error.innerHTML = 'The Force is strong with this password';
        isValid = true;
    }
})
/* password.addEventListener('blur', () => {
    if (!password_medium_regex.test(password.value)) {
        password_error.innerHTML = '';
        isValid = true;
    } else if (!password_strong_regex.test(password.value)) {
        password_error.innerHTML = '';
        isValid = true;
    }
}) */
//Confirm Password check

confirm_password.addEventListener('input', () => {
    if (confirm_password.value.trim().length === 0) {
        console.error('Confirm Password is missing')
        confirm_password_error.innerHTML = 'You need to confirm your password';
        isValid = false;
    } else if (confirm_password.value !== password.value) {
        console.error('Passwords do not match')
        confirm_password_error.innerHTML = 'Passwords do not much'
        isValid = false;
    } else {
        confirm_password_error.innerHTML = '';
        isValid = true;
    }
})

//Phone number check

phone_number.addEventListener('blur', () => {
    if (phone_number.value.trim().length === 0) {
        console.error('Phone Number is missing');
        phone_number_error.innerHTML = 'Your phone number is missing';
        isValid = false;
    } else if (!phone_number_regex.test(phone_number.value)){
        console.error('Phone number is not valid');
        phone_number_error.innerHTML = 'Your phone number is not valid'
        isValid = false;
    } else {
        phone_number_error.innerHTML = '';
        isValid = true
    }
});

//Address check

address.addEventListener('blur', () => {
if (address.value.trim().length === 0) {
    console.error('Address is missing');
    address_error.innerHTML = 'Your address is missing';
    isValid = false;
} else if (!address_regex.test(address.value)) {
    console.error('Address is not valid');
    address_error.innerHTML = 'Your address is not valid';
    isValid = false;
} else {
    address_error.innerHTML = '';
    isValid = true;
}
});

//Planet check

planet.addEventListener('blur', () => {
  if (planet.value.trim().length === 0) {
    console.error('Planet is missing');
    planet_error.innerHTML = 'Your planet is missing';
    isValid = false;
} else if (!address_regex.test(planet.value)) {
    console.error('Planet is not valid');
    planet_error.innerHTML = 'Your planet is not valid';
    isValid = false;
} else {
    planet_error.innerHTML = 'Your planet is not valid';
    isValid = true;
  }
});

contact_form.addEventListener('submit', (event) => {
    if (!isValid) event.preventDefault();
})