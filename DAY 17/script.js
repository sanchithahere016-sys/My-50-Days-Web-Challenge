if (localStorage.getItem("synexus_theme") === "dark") {
    document.body.classList.add("dark-theme");
}
document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.querySelector("#theme-toggle");

    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

});
const heroTitle = document.querySelector("#hero-title");

const heroButton = document.querySelector("#hero-btn");

heroButton.addEventListener("click", function (event) {

    
    event.preventDefault();

    
    heroTitle.textContent = "Welcome to the Synexus Core!";

heroTitle.classList.toggle("active-state")

});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector("#theme-toggle");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
});
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("synexus_theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("synexus_theme", "light");
        themeToggle.textContent = "🌙";
    }

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

const projectsData = [
    {
        title: "Web Development Bootcamp",
        description: "Learn HTML, CSS, JavaScript, Git, and GitHub through hands-on projects.",
        status: "Active"
    },
    {
        title: "Open Source Program",
        description: "Collaborate on real-world projects and contribute to open-source software.",
        status: "Completed"
    },
    {
        title: "AI Workshop",
        description: "Learn the fundamentals of Artificial Intelligence and Machine Learning.",
        status: "Active"
    }
];

const grid = document.getElementById("dynamic-grid");


function renderProjects(dataArray) {

    
    grid.innerHTML = "";

    
    if (dataArray.length === 0) {
        grid.innerHTML = `
            <p class="no-results">No initiatives match your search.</p>
        `;
        return;
    }

    dataArray.forEach(project => {

        let cardClass = "";

        if (project.status === "Active") {
            cardClass = "active";
        } else {
            cardClass = "completed";
        }

        grid.innerHTML += `
            <div class="initiative-card ${cardClass}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span class="status">${project.status}</span>
            </div>
        `;
    });
}


renderProjects(projectsData);


const searchInput = document.getElementById("search-projects");

searchInput.addEventListener("input", function () {

    const searchTerm = searchInput.value.toLowerCase();

    const filteredProjects = projectsData.filter(function (project) {

        return (
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.status.toLowerCase().includes(searchTerm)
        );

    });

    renderProjects(filteredProjects);

});


const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const interestInput = document.getElementById("interest");
const messageInput = document.getElementById("message");


const savedData = localStorage.getItem("synexus_form_draft");

if (savedData) {
    const formData = JSON.parse(savedData);

    fullNameInput.value = formData.fullName || "";
    emailInput.value = formData.email || "";
    phoneInput.value = formData.phone || "";
    interestInput.value = formData.interest || "";
    messageInput.value = formData.message || "";
}


function saveFormData() {

    const formData = {
        fullName: fullNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        interest: interestInput.value,
        message: messageInput.value
    };

    localStorage.setItem(
        "synexus_form_draft",
        JSON.stringify(formData)
    );
}


fullNameInput.addEventListener("input", saveFormData);
emailInput.addEventListener("input", saveFormData);
phoneInput.addEventListener("input", saveFormData);
interestInput.addEventListener("change", saveFormData);
messageInput.addEventListener("input", saveFormData);