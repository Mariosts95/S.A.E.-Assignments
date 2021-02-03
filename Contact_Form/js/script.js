'use strict';

const contact_form = document.forms['contact-form'];
//console.log(contact_form);

// Reference to the form elements
const fullname = contact_form.elements['full-name'];
const password = contact_form.elements['password'];
const confirm_password = contact_form.elements['confirm-password'];
const email = contact_form.elements['email'];
const confirm_email = contact_form.elements['confirm-email'];
const phone_number = contact_form.elements['phone-number'];
const address = contact_form.elements['address'];
const city = contact_form.elements['city'];
let isValid = true;

/* 
console.log(fullname);
console.log(password);
console.log(confirm_password);
console.log(email);
console.log(confirm_email);
console.log(phone_number);
console.log(address);  
console.log(city);
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

/*
The one I build: 
([a-zA-Z]{1,15})?[ -]?(\d{1,5})?[ -]?([a-zA-Z]{1,15})?[ -]?([a-zA-Z]{1,15})?[ -]?([a-zA-Z]{1,15})?[ -]?(\d{1,5})?[ -]?([a-zA-Z]{1,15})?[ -]?([a-zA-Z]{1,15})?
works with :
ipirou 9a agioi anargyroi 13562 athina Greece
 */
const address_regex = /^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$/;


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
        console.error('Fullname is missing');
        isValid = false;
    } else if (!fullname_regex.test(fullname.value)) {
        console.error('Fullname is not Valid');
        isValid = false;
    }
});

//Email check

email.addEventListener('blur', () => {
    if (email.value.trim().length === 0) {
        console.error('Email is missing');
        isValid = false;
    } else if (!email_regex.test(email.value)) {
        console.error('Email is not valid');
        isValid = false;
    }
});

//Confirm email check

confirm_email.addEventListener('blur', () => {
    if (confirm_email.value.trim().length === 0) {
        console.error('Confirm Email is missing');
        isValid = false;
    } else if (confirm_email.value !== email.value) {
        console.error('Emails do not match');
        isValid = false;
    }
});

//Password check
password.addEventListener('blur', () => {
    if (password.value.trim().length === 0) {
        console.error('Password is missing')
        isValid = false;
    } else if (!password_weak_regex.test(password.value)) {
        console.warn('Password is weak')
        isValid = false;
    } else if (!password_medium_regex.test(password.value)) {
        console.warn('Password is medium')
        isValid = false;
    } else if (!password_strong_regex.test(password.value)) {
        console.warn('Password is strong')
        isValid = false;
    }
})

//Confirm Password check

confirm_password.addEventListener('blur', () => {
    if (confirm_password.value.trim().length === 0) {
        console.error('Confirm Password is missing')
    } else if (confirm_password.value !== password.value) {
        console.error('Passwords do not match')
    }
})
/*         if (pwd.value.length == 0) {
          strength.innerHTML = 'Type Password';
        } else if (false == enoughRegex.test(pwd.value)) {
          strength.innerHTML = 'More Characters';
        } else if (strongRegex.test(pwd.value)) {
          strength.innerHTML = '<span style='color:green'>Strong!</span>';
        } else if (mediumRegex.test(pwd.value)) {
          strength.innerHTML = '<span style='color:orange'>Medium!</span>';
        } else {
          strength.innerHTML = '<span style='color:red'>Weak!</span>';
        } */

//Phone number check

phone_number.addEventListener('blur', () => {
    if (phone_number.value.trim().length === 0) {
        console.error('Phone Number is missing');
        isValid = false;
    } else if (!phone_number_regex.test(phone_number.value)){
        console.error('Phone number is not valid');
        isValid = false;
    }
});

//Address check

address.addEventListener('blur', () => {
if (address.value.trim().length === 0) {
  console.error('Address is missing');
  isValid = false;
} else if (!address_regex.test(address.value)) {
  console.error('Address is not valid');
  isValid = false;
}
});