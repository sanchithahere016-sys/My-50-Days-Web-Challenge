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

const form = document.querySelector("#membershipForm");


form.addEventListener("submit", function (e) {

   
    e.preventDefault();

    
    const nameValue = document.getElementById("fullName").value.trim();
    const emailValue = document.getElementById("email").value.trim();

    
    document.getElementById("fullName").style.borderColor = "";
    document.getElementById("email").style.borderColor = "";

    
    if (nameValue === "") {

        document.getElementById("fullName").style.borderColor = "red";
        alert("Please enter your full name.");

    }

    
    else if (!emailValue.includes("@")) {

        document.getElementById("email").style.borderColor = "red";
        alert("Please enter a valid email address.");

    }

   
    else {

        console.log("Application Ready for Server");

        form.reset();

    }

});