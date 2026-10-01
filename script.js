// Welcome Message
window.onload = function () {
    console.log("Welcome to Aksha Jaicee's Portfolio! 🚀");
};


// Typing Effect
const text = "B.Tech IT Student | AI & Data Enthusiast";
const typingText = document.getElementById("typing-text");

let index = 0;

function typeText() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 80);
    }
}

typeText();


// Skills Animation
const skills = document.querySelectorAll(".skill");

skills.forEach((skill, index) => {
    skill.style.opacity = "0";
    skill.style.transform = "translateY(20px)";

    setTimeout(() => {
        skill.style.transition = "all 0.5s ease";
        skill.style.opacity = "1";
        skill.style.transform = "translateY(0)";
    }, index * 150);
});


// Project Click Message
const project = document.querySelector(".project");

if (project) {
    project.addEventListener("click", function () {
        alert("🧮 Maths Calculator Project");
    });
}


// Social Link Confirmation
const links = document.querySelectorAll(".social-links a");

links.forEach(link => {
    link.addEventListener("click", function () {
        console.log("Opening: " + this.innerText);
    });
});


// Current Year in Footer
const year = new Date().getFullYear();
const footerYear = document.getElementById("year");

if (footerYear) {
    footerYear.innerHTML = year;
}