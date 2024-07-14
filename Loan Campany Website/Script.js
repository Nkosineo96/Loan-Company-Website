// JavaScript for SIZIYA FINANCIAL SOLUTION

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth scrolling for "Apply Now!" button
document.querySelector('.Apply').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#loan-application').scrollIntoView({
        behavior: 'smooth'
    });
});

// Contact form validation
document.querySelector('#contact-us form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const contact = document.querySelector('#contact').value.trim();

    if (!name || !email || !contact) {
        alert('Please fill in all fields.');
        return;
    }

    // Optionally, you can add more specific validation for email and phone number
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validatePhoneNumber(contact)) {
        alert('Please enter a valid contact number.');
        return;
    }

    // Submit the form or do something else
    alert('Thank you! We will call you soon.');
    this.reset(); // Reset form fields
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phone) {
    const re = /^\d{10}$/;
    return re.test(String(phone));
}

// Loan application form validation
document.querySelector('#loan-application form').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.querySelector('#full-name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const address = document.querySelector('#address').value.trim();
    const typeOfLoan = document.querySelector('#type-of-loan').value.trim();
    const loanAmount = document.querySelector('#loan-amount').value.trim();
    const loanPurpose = document.querySelector('#loan-purpose').value.trim();
    const comments = document.querySelector('#comments').value.trim();

    if (!fullName || !email || !phone || !address || !typeOfLoan || !loanAmount || !loanPurpose || !comments) {
        alert('Please fill in all fields.');
        return;
    }

    // Optionally, you can add more specific validation for email and phone number
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validatePhoneNumber(phone)) {
        alert('Please enter a valid contact number.');
        return;
    }

    // Submit the form or do something else
    alert('Your loan application has been submitted.');
    this.reset(); // Reset form fields
});

// Scroll to top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
