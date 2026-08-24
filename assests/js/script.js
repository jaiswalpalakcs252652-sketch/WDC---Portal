// ============================================================
// script.js - Complete JavaScript for WDC Portal
// ============================================================

// ========== MAIN VALIDATION FUNCTION ==========
function validateForm(formId) {
    // Get the form
    var form = document.getElementById(formId);
    if (!form) {
        alert('Form not found!');
        return false;
    }
    
    // Get all required inputs in the form
    var requiredFields = form.querySelectorAll('[required]');
    var isValid = true;
    
    // Check each required field
    for (var i = 0; i < requiredFields.length; i++) {
        var field = requiredFields[i];
        if (field.value.trim() === '') {
            field.classList.add('is-invalid');
            isValid = false;
        } else {
            field.classList.remove('is-invalid');
        }
    }
    
    if (!isValid) {
        alert('Please fill in all required fields.');
        return false;
    }
    
    // Special validation for grievance form
    if (formId === 'grievanceForm') {
        var description = form.querySelector('textarea');
        if (description && description.value.trim().length < 10) {
            alert('Please provide a detailed description (at least 10 characters).');
            description.classList.add('is-invalid');
            return false;
        }
    }
    
    // Special validation for login form
    if (formId === 'loginForm') {
        var email = form.querySelector('input[type="email"]');
        var password = form.querySelector('input[type="password"]');
        if (email && email.value.indexOf('@') === -1) {
            alert('Please enter a valid email address.');
            email.classList.add('is-invalid');
            return false;
        }
        if (password && password.value.length < 6) {
            alert('Password must be at least 6 characters.');
            password.classList.add('is-invalid');
            return false;
        }
    }
    
    // Special validation for register form
    if (formId === 'registerForm') {
        var password = form.querySelector('input[type="password"]');
        var allPasswords = form.querySelectorAll('input[type="password"]');
        var confirmPassword = allPasswords[1];
        
        if (password && confirmPassword) {
            if (password.value !== confirmPassword.value) {
                alert('Passwords do not match!');
                confirmPassword.classList.add('is-invalid');
                return false;
            }
            if (password.value.length < 6) {
                alert('Password must be at least 6 characters.');
                password.classList.add('is-invalid');
                return false;
            }
        }
    }
    
    // If all validations pass
    alert('Form submitted successfully!');
    return true;
}

// ========== TOGGLE PASSWORD VISIBILITY ==========
function togglePassword(fieldId) {
    var field = document.getElementById(fieldId);
    if (field) {
        if (field.type === 'password') {
            field.type = 'text';
        } else {
            field.type = 'password';
        }
    }
}

// ========== CONFIRM DELETE ==========
function confirmDelete(eventName) {
    return confirm('Are you sure you want to delete "' + eventName + '"?');
}

// ========== SCROLL TO TOP ==========
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== AUTO-UPDATE FOOTER YEAR ==========
document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    var footerParagraphs = document.querySelectorAll('footer .container p');
    
    for (var i = 0; i < footerParagraphs.length; i++) {
        var text = footerParagraphs[i].textContent;
        if (text.indexOf('2026') !== -1) {
            footerParagraphs[i].textContent = text.replace('2026', currentYear);
        }
    }
});