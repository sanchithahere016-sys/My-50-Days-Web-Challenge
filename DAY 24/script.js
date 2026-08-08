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

const routes = {

"/": `

<section class="hero-section hidden">

    <h1 id="hero-title">
        Empowering the Next Generation of Engineers
    </h1>

    <p>
        Welcome to our community platform where students
        learn, collaborate and build amazing projects together.
    </p>

    <a href="#" id="hero-btn">
        Join Our Community
    </a>

</section>

<section class="hidden">

<h2>About Us</h2>

<p>
Our mission is to create a collaborative environment
where engineering students can improve their
technical skills.
</p>

</section>

`,

"/initiatives":`

<section class="initiatives hidden">

<h2>Our Initiatives</h2>

<input
type="text"
id="search-projects"
placeholder="Search initiatives..."
>

<div
class="initiatives-grid"
id="dynamic-grid">
</div>

</section>

`,

"/team":`

<section class="core-team hidden">

<h2>Community Leadership</h2>

<div class="team-grid">

<div class="profile-card hidden">

<img
src="https://via.placeholder.com/150"
alt="">

<h3>Abhay Oberoi</h3>

<p>Chief Strategic Officer</p>

<a href="#">
View Profile
</a>

</div>

<div class="profile-card hidden">

<img
src="https://via.placeholder.com/150"
alt="">

<h3>John Smith</h3>

<p>Project Manager</p>

<a href="#">
View Profile
</a>

</div>

<div class="profile-card hidden">

<img
src="https://via.placeholder.com/150"
alt="">

<h3>Alex Brown</h3>

<p>UI/UX Designer</p>

<a href="#">
View Profile
</a>

</div>

</div>

</section>

<section class="testimonials hidden">

<h2>Community Testimonials</h2>

<div
id="testimonial-container"
class="testimonial-card">

<h3 id="member-name"></h3>

<p id="member-quote"></p>

</div>

</section>

`,

"/join":`

<section class="join-us hidden">

<h2>Membership Application</h2>

<form
class="membership-form"
id="membershipForm">

<label>Full Name</label>

<input
type="text"
id="fullName"
required>

<label>Email</label>

<input
type="email"
id="email"
required>

<label>Phone</label>

<input
type="tel"
id="phone">

<label>Interest</label>

<select id="interest">

<option value="">Select</option>
<option>Web Development</option>
<option>AI & Machine Learning</option>
<option>UI/UX</option>

</select>

<label>Message</label>

<textarea
id="message"
rows="5">
</textarea>

<button type="submit">

Apply Now

</button>

</form>

</section>

`,

404:`

<section class="hero-section">

<h1>404</h1>

<p>

Page Not Found

</p>

<a href="/" class="nav-link">

Go Home

</a>

</section>

`

};

function router(){

let path = window.location.pathname;

if(path.includes("index.html")){
    path="/";
}

const app=document.getElementById("app-root");

app.innerHTML=routes[path] || routes[404];

initializePage(path);

}
function initializePage(path){

initTheme();

initMenu();

switch(path){

case "/":

initHero();

initObserver();

break;

case "/initiatives":

initProjects();

initModal();

initObserver();

break;

case "/team":

initTestimonials();

initObserver();

break;

case "/join":

initForm();

initObserver();

break;

}

}
document.body.addEventListener("click",(event)=>{

const link=event.target.closest(".nav-link");

if(!link) return;

event.preventDefault();

history.pushState({}, "", link.getAttribute("href"));

router();

});
window.addEventListener("popstate",router);
router();
function initTheme() {

    const themeToggle = document.querySelector("#theme-toggle");

    if (!themeToggle) return;

    themeToggle.onclick = () => {

        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {

            localStorage.setItem("synexus_theme", "dark");
            themeToggle.textContent = "☀️";

        } else {

            localStorage.setItem("synexus_theme", "light");
            themeToggle.textContent = "🌙";

        }

    };

}
function initMenu() {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) return;

    menuToggle.onclick = () => {

        navLinks.classList.toggle("nav-active");

    };

}
function initHero() {

    const heroTitle = document.querySelector("#hero-title");
    const heroButton = document.querySelector("#hero-btn");

    if (!heroButton || !heroTitle) return;

    heroButton.onclick = function (event) {

        event.preventDefault();

        heroTitle.textContent = "Welcome to the Synexus Core!";

        heroTitle.classList.toggle("active-state");

    };

}
const projectsData = [

{
title:"Web Development Bootcamp",
description:"Learn HTML, CSS, JavaScript, Git, and GitHub through hands-on projects.",
status:"Active"
},

{
title:"Open Source Program",
description:"Collaborate on real-world projects and contribute to open-source software.",
status:"Completed"
},

{
title:"AI Workshop",
description:"Learn the fundamentals of Artificial Intelligence and Machine Learning.",
status:"Active"
}

];
function renderProjects(data){

const grid=document.getElementById("dynamic-grid");

if(!grid) return;

grid.innerHTML="";

if(data.length===0){

grid.innerHTML="<p>No initiatives found.</p>";

return;

}

data.forEach(project=>{

let cardClass=project.status==="Active"
?"active":"completed";

grid.innerHTML+=`

<div class="initiative-card ${cardClass}">

<h3>${project.title}</h3>

<p>${project.description}</p>

<span class="status">${project.status}</span>

<button
class="view-btn"
data-title="${project.title}">
View Details
</button>

</div>

`;

});

}
function debounce(func,delay){

let timeout;

return function(...args){

clearTimeout(timeout);

timeout=setTimeout(()=>{

func.apply(this,args);

},delay);

};

}
function initProjects(){

renderProjects(projectsData);

const search=document.getElementById("search-projects");

if(!search) return;

const searchProjects=debounce(()=>{

const value=search.value.toLowerCase();

const filtered=projectsData.filter(project=>{

return(

project.title.toLowerCase().includes(value)

||

project.description.toLowerCase().includes(value)

||

project.status.toLowerCase().includes(value)

);

});

renderProjects(filtered);

},300);

search.addEventListener("input",searchProjects);

}
function initModal(){

const grid=document.getElementById("dynamic-grid");

const modal=document.getElementById("project-modal");

const title=document.getElementById("modal-title");

const close=document.getElementById("close-modal");

if(!grid || !modal) return;

grid.onclick=(event)=>{

const btn=event.target.closest(".view-btn");

if(!btn) return;

title.textContent=btn.dataset.title;

modal.style.display="flex";

};

close.onclick=()=>{

modal.style.display="none";

};

modal.onclick=(event)=>{

if(event.target===modal){

modal.style.display="none";

}

};

document.onkeydown=(event)=>{

if(event.key==="Escape"){

modal.style.display="none";

}

};

}
function initForm() {

    const form = document.getElementById("membershipForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const fullName = document.getElementById("fullName");
        const email = document.getElementById("email");

        fullName.style.borderColor = "";
        email.style.borderColor = "";

        if (fullName.value.trim() === "") {

            fullName.style.borderColor = "red";
            alert("Please enter your full name.");
            return;

        }

        if (!email.value.includes("@")) {

            email.style.borderColor = "red";
            alert("Please enter a valid email.");
            return;

        }

        alert("Application Submitted Successfully!");

        localStorage.removeItem("synexus_form_draft");

        form.reset();

    });

    loadDraft();

    enableDraftSaving();

}
function enableDraftSaving() {

    const inputs = [

        "fullName",
        "email",
        "phone",
        "interest",
        "message"

    ];

    inputs.forEach(id => {

        const input = document.getElementById(id);

        if (!input) return;

        input.addEventListener("input", saveDraft);

        input.addEventListener("change", saveDraft);

    });

}
function saveDraft() {

    const data = {

        fullName: document.getElementById("fullName")?.value || "",

        email: document.getElementById("email")?.value || "",

        phone: document.getElementById("phone")?.value || "",

        interest: document.getElementById("interest")?.value || "",

        message: document.getElementById("message")?.value || ""

    };

    localStorage.setItem(
        "synexus_form_draft",
        JSON.stringify(data)
    );

}
function loadDraft() {

    const saved = localStorage.getItem("synexus_form_draft");

    if (!saved) return;

    const data = JSON.parse(saved);

    document.getElementById("fullName").value = data.fullName || "";
    document.getElementById("email").value = data.email || "";
    document.getElementById("phone").value = data.phone || "";
    document.getElementById("interest").value = data.interest || "";
    document.getElementById("message").value = data.message || "";

}
const testimonials = [

{

name:"Abhay Oberoi",

quote:"Synexus transformed the way I learn and collaborate."

},

{

name:"John Smith",

quote:"Working with this community improved my development skills."

},

{

name:"Alex Brown",

quote:"Amazing projects, supportive mentors and teamwork!"

}

];
let testimonialIndex = 0;

function initTestimonials() {

    const memberName = document.getElementById("member-name");
    const memberQuote = document.getElementById("member-quote");

    if (!memberName || !memberQuote) return;

    function render() {

        memberName.textContent =
            testimonials[testimonialIndex].name;

        memberQuote.textContent =
            testimonials[testimonialIndex].quote;

        testimonialIndex++;

        if (testimonialIndex >= testimonials.length) {

            testimonialIndex = 0;

        }

    }

    render();

    setInterval(render,3000);

}
let taskState = [];
function renderTasks(){

const list=document.getElementById("task-list");

if(!list) return;

list.innerHTML="";

taskState.forEach(task=>{

const li=document.createElement("li");

li.className=`task-item ${task.completed?"done":""}`;

li.innerHTML=`

<input
type="checkbox"
class="toggle-check"
data-id="${task.id}"
${task.completed?"checked":""}
>

<span>${task.text}</span>

<button
class="delete-btn"
data-id="${task.id}">
&times;
</button>

`;

list.appendChild(li);

});

}
function initTaskTracker(){

const input=document.getElementById("task-input");

const button=document.getElementById("add-task-btn");

const list=document.getElementById("task-list");

if(!input||!button||!list) return;

button.onclick=()=>{

const value=input.value.trim();

if(value==="") return;

taskState.push({

id:Date.now(),

text:value,

completed:false

});

input.value="";

renderTasks();

};

list.onclick=(event)=>{

const id=Number(event.target.dataset.id);

if(!id) return;

if(event.target.classList.contains("delete-btn")){

taskState=taskState.filter(task=>task.id!==id);

}

if(event.target.classList.contains("toggle-check")){

const task=taskState.find(t=>t.id===id);

if(task){

task.completed=!task.completed;

}

}

renderTasks();

};

}
function initObserver() {

    const hiddenElements = document.querySelectorAll(".hidden");

    if (hiddenElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

    hiddenElements.forEach((element) => {

        observer.observe(element);

    });

}
function initKanban() {

    const taskCards = document.querySelectorAll(".task-card");

    const columns = document.querySelectorAll(".column");

    if (!taskCards.length || !columns.length) return;

    taskCards.forEach((card) => {

        card.addEventListener("dragstart", () => {

            card.classList.add("is-dragging");

        });

        card.addEventListener("dragend", () => {

            card.classList.remove("is-dragging");

        });

    });

    columns.forEach((column) => {

        column.addEventListener("dragover", (event) => {

            event.preventDefault();

            const dragging = document.querySelector(".is-dragging");

            if (dragging) {

                column.appendChild(dragging);

            }

        });

    });

}
function initializePage(path) {

    initTheme();

    initMenu();

    switch (path) {

        case "/":

            initHero();
            initObserver();

            break;

        case "/initiatives":

            initProjects();
            initModal();
            initObserver();

            break;

        case "/team":

            initTestimonials();
            initObserver();

            break;

        case "/join":

            initForm();
            initObserver();

            break;

        case "/kanban":

            initKanban();

            break;

    }

}
window.addEventListener("popstate", router);

router();