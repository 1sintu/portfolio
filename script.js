  // JavaScript for Smooth Scrolling
  document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll to the corresponding section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Validation with SweetAlert
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = form.name.value;
    let email = form.email.value;
    let message = form.message.value;

    if (name && email && message) {
        Swal.fire({
            title: 'Message Sent!',
            text: 'Thank you for reaching out. I will get back to you soon!',
            icon: 'success',
            confirmButtonText: 'Okay'
        });
        form.reset(); // Reset the form
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Please fill out all fields.',
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
    }
});


// js for nav bar
// Get elements
const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle 'active' class to show/hide the nav links and change the hamburger to an X
hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('active');
    navLinks.classList.toggle('active');
});


