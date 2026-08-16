<link rel="stylesheet" href="../assets/css/style.css">
<script src="../assets/js/script.js"></script>
<img src="../assets/images/logo.png"></img>
// script.js - All your JavaScript functions

// Example: Form validation for login/register
function validateForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return false;
    }
    return true;
}

// Example: Show/hide password toggle
function togglePassword() {
    let passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

// Example: Confirmation before deleting
function confirmDelete(eventName) {
    return confirm(`Are you sure you want to delete "${eventName}"?`);
}

// Example: Display current year in footer
document.addEventListener('DOMContentLoaded', function() {
    let yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Example: Smooth scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}