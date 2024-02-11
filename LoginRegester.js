// JavaScript source code
const checkbox = document.getElementById('checkbox');
const password = document.getElementById('password');
const userName = document.getElementById('userName');
const form = document.getElementById('loginForm');

checkbox.addEventListener('change', showHide);
form.addEventListener('submit', handleSubmit);

function showHide(ev) {
    if (checkbox.checked) {
        password.type = 'text';
    }
    else {
        password.type = 'password';
    }
}

function handleSubmit(ev) {
    ev.preventDefault();
    if (password.value === "" || userName.value === "") {
        alert('Invalid username or password. Please try again.');
    } else {
        alert('Login successful!');
        window.location.href = 'file:///C:/Users/%D8%AD%D9%85%D8%B2%D8%A9/source/repos/ConsoleAppWeb/DigitaClock.html';
    }
}