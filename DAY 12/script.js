const heroTitle = document.querySelector("#hero-title");

const heroButton = document.querySelector("#hero-btn");

heroButton.addEventListener("click", function (event) {

    
    event.preventDefault();

    
    heroTitle.textContent = "Welcome to the Synexus Core!";

heroTitle.classList.toggle("active-state")

});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
});