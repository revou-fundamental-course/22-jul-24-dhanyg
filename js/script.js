const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputInterest = document.querySelector('#interest');
const btnSubmit = document.querySelector('#btnSubmit');
const errorName = inputName.nextElementSibling;
const errorEmail = inputEmail.nextElementSibling;
const errorInterest = inputInterest.nextElementSibling;
let valid = false;

document.addEventListener('DOMContentLoaded', function () {
    const figures = document.querySelectorAll('#slider figure');
    let currentSlide = 0;
    figures[currentSlide].classList.add('active');

    const autoSlide = setInterval(function () {
        figures[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % figures.length;
        figures[currentSlide].classList.add('active');
    }, 5000);
});

btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    emptyError();

    validateName();
    validateEmail();
    validateInterest();

    if (valid) {
        emptyError();
        alert('Terima kasih telah mengisi form.')
    }


})

function emptyError() {
    errorName.textContent = '';
    errorEmail.textContent = '';
    errorInterest.textContent = ''

    errorName.classList.remove('error');
    errorEmail.classList.remove('error');
    errorInterest.classList.remove('error');
}

function validateName() {
    if (inputName.value == '') {
        errorName.textContent = 'Nama tidak boleh kosong.'
        errorName.classList.add('error');
        valid = false;
    }
    else {
        valid = true;
    }
}

function validateEmail() {
    if (inputEmail.value == '') {
        errorEmail.textContent = 'Email tidak boleh kosong.'
        errorEmail.classList.add('error');
        valid = false;
    }
    else {
        if (!inputEmail.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            errorEmail.textContent = 'Format email tidak valid.'
            errorEmail.classList.add('error');
            valid = false;
        }
        else {
            valid = true;
        }
    }
}

function validateInterest() {
    if (inputInterest.value == '') {
        errorInterest.textContent = 'Interest tidak boleh kosong.'
        errorInterest.classList.add('error');
        valid = false;
    }
    else {
        valid = true;
    }
}