document.getElementById("password").addEventListener("input", validatePassword);

function validatePassword() {
    const password = document.getElementById("password").value;
    const length = document.getElementById("length");
    const capital = document.getElementById("capital");
    const number = document.getElementById("number");
    const specialChar = document.getElementById("special-char");

    // Check the password length
    if (password.length >= 8) {
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
    }

    // Check for numbers
    if (/\d/.test(password)) {
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
    }

    // Check for special characters
    if (/[^a-zA-Z\d]/.test(password)) {
        specialChar.classList.add("valid");
    } else {
        specialChar.classList.remove("valid");
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const inputFields = document.querySelectorAll('input');

    inputFields.forEach(input => {
        input.addEventListener('focus', (event) => {
            event.target.parentNode.classList.add('input-focused');
        });

        input.addEventListener('blur', (event) => {
            if (event.target.value === '') {
                event.target.parentNode.classList.remove('input-focused');
            }
        });
    });
});