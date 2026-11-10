
// ============================================
// SHADDRACK MWANGUZI - PORTFOLIO JAVASCRIPT
// ============================================


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// 2. TYPING ANIMATION

const typingText = document.getElementById("typingText");

const words = [
    "Web Developer",
    "IT Student",
    "Python Programmer",
    "Tech Enthusiast",
    "Future Cybersecurity Professional"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 100);

}

typeEffect();


// 3. CURRENT YEAR IN FOOTER

document.getElementById("year").textContent =
    new Date().getFullYear();


// 4. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .service-card, .contact-grid"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// 5. ACTIVE NAVIGATION ON SCROLL

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();


// 6. CONTACT FORM

// IMPORTANT:
// Replace this with your actual email address before publishing.

const OWNER_EMAIL = "your-email@example.com";

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const visitorName =
        document.getElementById("visitorName").value.trim();

    const visitorEmail =
        document.getElementById("visitorEmail").value.trim();

    const subject =
        document.getElementById("visitorSubject").value.trim();

    const message =
        document.getElementById("visitorMessage").value.trim();


    if (!visitorName || !visitorEmail || !subject || !message) {

        formMessage.textContent = "Please complete all fields.";

        return;
    }


    if (OWNER_EMAIL === "appostolee04@gmail.com") {

        formMessage.textContent =
            "Please configure your email address in script.js first.";

        return;
    }


    const emailSubject = encodeURIComponent(subject);

    const emailBody = encodeURIComponent(
        "Name: " + visitorName +
        "\nEmail: " + visitorEmail +
        "\n\nMessage:\n" + message
    );


    const mailLink =
        "mailto:" + OWNER_EMAIL +
        "?subject=" + emailSubject +
        "&body=" + emailBody;

    formMessage.textContent =
        "Opening your email application...";

    window.location.href = mailLink;

});


// 7. CONSOLE WELCOME MESSAGE

console.log(
    "%cWelcome to SHADDRACK MWANGUZI's Portfolio!",
    "color: #9b8cff; font-size: 16px; font-weight: bold;"
);

console.log("Designed and developed with HTML, CSS and JavaScript.");
