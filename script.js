// EmailJS Configuration (Get free keys from emailjs.com)
emailjs.init("YOUR_PUBLIC_KEY");

// Contact Form Handler




(function () {
    emailjs.init("US_7aN_ILYxRKUGRD"); // Public Key
})();

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm(
        'service_jssabro',     // YOUR_SERVICE_ID
        'template_dloj6jf',    // YOUR_TEMPLATE_ID
        this
    ).then(function () {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    }, function (error) {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS Error:', error);
    });
});




// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// PHOTO UPLOAD FUNCTION - Click your profile photo to change it!
document.getElementById('profileImg').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            // Check file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('Image too large! Max 5MB');
                return;
            }
            const reader = new FileReader();
            reader.onload = function(e) {
                this.src = e.target.result;
                // Save to localStorage so it persists
                localStorage.setItem('profilePhoto', e.target.result);
            }.bind(this);
            reader.readAsDataURL(file);
        }
    };
    input.click();
});

// Load saved profile photo on page load
window.addEventListener('load', () => {
    const savedPhoto = localStorage.getItem('profilePhoto');
    if (savedPhoto) {
        document.getElementById('profileImg').src = savedPhoto;
    }
});



// Header Background Blur on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(15,23,42,0.95)';
    } else {
        header.style.background = 'rgba(15,23,42,0.8)';
    }
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[href="#${current}"]`)?.classList.add('active');
});

// Skills Progress Bar Animation
document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.dataset.width;
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});

// ScrollReveal Animations
ScrollReveal({ distance: '60px', duration: 2500, delay: 400, reset: true });
ScrollReveal().reveal('.hero-content', { origin: 'top' });
ScrollReveal().reveal('.skill, .card', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.about-content, .cv-card', { origin: 'bottom', interval: 100 });
