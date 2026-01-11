// Function to handle the intersection of elements
const observerOptions = {
    threshold: 0.1 // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the class that triggers the CSS transition
            entry.target.classList.add('active-animation');
        }
    });
}, observerOptions);

// Select all elements we want to animate
document.addEventListener('DOMContentLoaded', () => {
    const animElements = document.querySelectorAll('.fade-up, .reveal');
    
    animElements.forEach(el => {
        observer.observe(el);
    });
});

// Add to your existing Intersection Observer code
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple UI interaction for the project
    const btn = this.querySelector('.submit-btn');
    const success = document.getElementById('formSuccess');
    
    btn.innerText = "SENDING...";
    btn.style.opacity = "0.7";
    
    setTimeout(() => {
        this.style.display = "none";
        success.style.display = "block";
    }, 1500);
});

document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active-animation');
            }
        });
    }, observerOptions);

    // Target all elements with fade-up class
    const animElements = document.querySelectorAll('.fade-up');
    animElements.forEach(el => observer.observe(el));

    // Simple Form Submission Logic
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.submit-btn');
            btn.innerText = "SENDING...";
            setTimeout(() => {
                contactForm.innerHTML = `<div style="text-align:center; padding: 40px; color: #2f4739;">
                    <h3 style="font-family: 'Playfair Display', serif;">Thank you.</h3>
                    <p>Your message has been received by our studio.</p>
                </div>`;
            }, 1500);
        });
    }
});