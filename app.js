// VibeFlow Landing Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    console.log('VibeFlow landing page loaded successfully!');
    
    initStickyHeader();
    initActiveNavigation();
    initModal();
    initFormValidation();
});

// Sticky header with shadow on scroll
function initStickyHeader() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Active section highlighting in navigation
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Modal functionality
function initModal() {
    const modal = document.getElementById('ctaModal');
    const ctaButtons = document.querySelectorAll('.btn-primary');
    const closeButton = document.querySelector('.modal-close');
    
    // Open modal on CTA button click
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Only open modal if it's not a form submit button
            if (e.target.type !== 'submit') {
                e.preventDefault();
                openModal();
            }
        });
    });
    
    // Close modal on close button click
    closeButton.addEventListener('click', closeModal);
    
    // Close modal on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal() {
    const modal = document.getElementById('ctaModal');
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeModal() {
    const modal = document.getElementById('ctaModal');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    
    // Clear form
    const form = document.getElementById('ctaForm');
    form.reset();
    clearErrors();
}

function clearErrors() {
    document.querySelectorAll('.form-error').forEach(error => {
        error.textContent = '';
    });
    document.querySelectorAll('.form-input').forEach(input => {
        input.classList.remove('error');
    });
}

// Form validation
function initFormValidation() {
    const form = document.getElementById('ctaForm');
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        let isValid = true;
        
        // Validate name
        const name = nameInput.value.trim();
        if (name === '') {
            showError('nameError', 'Name is required');
            nameInput.classList.add('error');
            isValid = false;
        } else if (name.length < 2) {
            showError('nameError', 'Name must be at least 2 characters');
            nameInput.classList.add('error');
            isValid = false;
        }
        
        // Validate email
        const email = emailInput.value.trim();
        if (email === '') {
            showError('emailError', 'Email is required');
            emailInput.classList.add('error');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
            emailInput.classList.add('error');
            isValid = false;
        }
        
        // If valid, submit form (in real app, this would send data to server)
        if (isValid) {
            console.log('Form submitted:', { name, email });
            alert('Thank you for signing up! We\'ll be in touch soon.');
            closeModal();
        }
    });
    
    // Real-time validation on blur
    nameInput.addEventListener('blur', () => {
        const name = nameInput.value.trim();
        if (name !== '' && name.length < 2) {
            showError('nameError', 'Name must be at least 2 characters');
            nameInput.classList.add('error');
        } else if (name !== '') {
            document.getElementById('nameError').textContent = '';
            nameInput.classList.remove('error');
        }
    });
    
    emailInput.addEventListener('blur', () => {
        const email = emailInput.value.trim();
        if (email !== '' && !isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
            emailInput.classList.add('error');
        } else if (email !== '') {
            document.getElementById('emailError').textContent = '';
            emailInput.classList.remove('error');
        }
    });
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
