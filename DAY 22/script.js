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
                <button class="view-btn"
                        data-title="${project.title}">
                    View Details
                </button>
            </div>
        `;
    });
}


renderProjects(projectsData);


function debounce(func, delay) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const searchInput = document.getElementById("search-projects");

function filterProjects() {

    const searchTerm = searchInput.value.toLowerCase();

    const filteredProjects = projectsData.filter(function (project) {

        return (
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.status.toLowerCase().includes(searchTerm)
        );

    });

    console.log("Searching:", searchTerm);

    renderProjects(filteredProjects);

}

const debouncedSearch = debounce(filterProjects, 300);

searchInput.addEventListener("input", debouncedSearch);


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

const testimonialsData = [
    {
        name: "Abhay Oberoi",
        quote: "Synexus transformed the way I learn and collaborate."
    },
    {
        name: "John Smith",
        quote: "Working with this community improved my development skills."
    },
    {
        name: "Alex Brown",
        quote: "Amazing projects, supportive mentors, and great teamwork!"
    }
];

let currentIndex = 0;

const memberName = document.getElementById("member-name");
const memberQuote = document.getElementById("member-quote");

function updateTestimonial() {
    const currentData = testimonialsData[currentIndex];

    memberName.textContent = currentData.name;
    memberQuote.textContent = currentData.quote;

    currentIndex++;

    if (currentIndex === testimonialsData.length) {
        currentIndex = 0;
    }
}

updateTestimonial();

setInterval(updateTestimonial, 3000);


const gridContainer = document.getElementById("dynamic-grid");
const projectModal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const closeModalBtn = document.getElementById("close-modal");

if (gridContainer) {
    gridContainer.addEventListener("click", function (e) {

        const clickedButton = e.target.closest(".view-btn");

        if (!clickedButton) return;

        const projectTitle = clickedButton.getAttribute("data-title");

        modalTitle.textContent = projectTitle;

        projectModal.style.display = "flex";
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
        projectModal.style.display = "none";
    });
}



projectModal.addEventListener("click", function (e) {
    if (e.target === projectModal) {
        projectModal.style.display = "none";
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        projectModal.style.display = "none";
    }
});

let taskState = [];


const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskListContainer = document.getElementById("task-list");


function renderTasks() {
    if (!taskListContainer) return;

    taskListContainer.innerHTML = "";

    taskState.forEach(task => {
        const li = document.createElement("li");

        li.className = `task-item ${task.completed ? "done" : ""}`;

        li.innerHTML = `
            <input
                type="checkbox"
                class="toggle-check"
                data-id="${task.id}"
                ${task.completed ? "checked" : ""}
            >

            <span>${task.text}</span>

            <button
                class="delete-btn"
                data-id="${task.id}">
                &times;
            </button>
        `;

        taskListContainer.appendChild(li);
    });
}


if (addTaskBtn && taskInput) {

    addTaskBtn.addEventListener("click", () => {

        const textValue = taskInput.value.trim();

        if (textValue === "") return;

        const newTask = {
            id: Date.now(),
            text: textValue,
            completed: false
        };

        taskState.push(newTask);

        taskInput.value = "";

        renderTasks();

    });

}


if (taskListContainer) {

    taskListContainer.addEventListener("click", (e) => {

        const targetId = Number(
            e.target.getAttribute("data-id")
        );

        if (!targetId) return;

        
        if (e.target.classList.contains("delete-btn")) {

            taskState = taskState.filter(task => task.id !== targetId);

        }

        
        if (e.target.classList.contains("toggle-check")) {

            const foundTask = taskState.find(
                task => task.id === targetId
            );

            if (foundTask) {

                foundTask.completed = !foundTask.completed;

            }

        }

        renderTasks();

    });

}


const scrollObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            

        }

    });

});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((element) => {
    scrollObserver.observe(element);
});