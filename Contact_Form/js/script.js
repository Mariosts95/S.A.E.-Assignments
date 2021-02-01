'use strict';

const contact_form = document.forms['contact-form'];
console.log(contact_form);

// Reference to the form elements
const fullname = contact_form.elements["full-name"];
const email = contact_form.elements["email"];
const confirm_email = contact_form.elements["confirm-email"];
const phone_number = contact_form.elements["phone-number"];
const address = contact_form.elements["address"];

/* console.log(fullname);
console.log(email);
console.log(confirm_email);
console.log(phone_number);
console.log(address); */

let isValid = true;

//Regex
const fullname_regex = /^[a-zA-Z]{2,}[ ][a-zA-Z]{2,}[ ]?[a-zA-Z]{2,}?$/;
// Email regex "stolen from the internet ^_^"
const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phone_number_regex = 
//const address_regex = 

//Fullname check

fullname.addEventListener("blur", () => {
    if (fullname.value.trim().length === 0) {
        console.error('Fullname is missing');
        isValid = false;
    } else if (!fullname_regex.test(fullname.value)) {
        console.error("Fullname is not Valid");
        isValid = false;
    }
});

//Email check

email.addEventListener('blur', () => {
    if (email.value.trim().length === 0) {
        console.error("Email is missing");
        isValid = false;
    } else if (!email_regex.test(email.value)) {
        console.error("Email not valid");
        isValid = false;
    }
});

//Confirm email check

confirm_email.addEventListener("blur", () => {
    if (confirm_email.value.trim().length === 0) {
      console.error("Confirm Email is missing");
      isValid = false;
    }
});

//Phone number check

phone_number.addEventListener("blur", () => {
    if (phone_number.value.trim().length === 0) {
    console.error("Phone Number is missing");
    isValid = false;
    }
});

//Address check

address.addEventListener("blur", () => {
if (address.value.trim().length === 0) {
  console.error("Address is missing");
  isValid = false;
}
});