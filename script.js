// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
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




