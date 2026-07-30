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