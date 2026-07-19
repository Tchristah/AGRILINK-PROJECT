/* ===============================
   AgriLink - script.js
   Simple JavaScript for the site
   =============================== */

// ---------- 1. Mobile Nav Toggle ----------
// Only runs if a menu button exists on the page (id="navToggle").
// If your nav doesn't have one yet, this part just does nothing.

const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector("nav");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("nav-open");
    });
}


// ---------- 2. Simple Contact Form Validation ----------
// Runs only on pages that have a form with id="contactForm"

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // stop the form from submitting normally

        let isValid = true;

        // Clear old messages
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("messageError").textContent = "";
        document.getElementById("formSuccess").textContent = "";

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check name
        if (name === "") {
            document.getElementById("nameError").textContent = "Please enter your name.";
            isValid = false;
        }

        // Check email (simple pattern check)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            document.getElementById("emailError").textContent = "Please enter your email.";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email.";
            isValid = false;
        }

        // Check message
        if (message === "") {
            document.getElementById("messageError").textContent = "Please enter a message.";
            isValid = false;
        }

        // If everything looks good
        if (isValid) {
            document.getElementById("formSuccess").textContent =
                "Thank you! Your message has been sent.";
            contactForm.reset();
        }
    });
}


// ---------- 3. Simple Join Us Form Validation ----------
// Runs only on the form.html page, if it has a form with id="joinForm"

const joinForm = document.getElementById("joinForm");

if (joinForm) {
    joinForm.addEventListener("submit", function (event) {
        const requiredFields = joinForm.querySelectorAll("[required]");
        let isValid = true;

        requiredFields.forEach(function (field) {
            if (field.value.trim() === "") {
                isValid = false;
                field.style.borderColor = "red";
            } else {
                field.style.borderColor = "";
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert("Please fill in all required fields before submitting.");
        }
    });
}