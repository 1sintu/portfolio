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



//nav bar
// Get elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.getElementById("close-btn");

// Toggle the sidebar on hamburger click
hamburger.addEventListener("click", () => {
    navLinks.classList.add("active");
});

// Close the sidebar when the red "X" button is clicked
closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
});

// Optional: If you want to click outside the navbar to close it
document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove("active");
    }
});




