document.addEventListener("DOMContentLoaded", () => {

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");
}

});

});

sections.forEach(section => {

section.classList.add("fade");

observer.observe(section);

});

const paper = document.querySelector(".paper");

document.getElementById("toggleLines").addEventListener("click", () => {

paper.classList.toggle("hide-lines");

});

document.getElementById("toggleFont").addEventListener("click", () => {

document.body.classList.toggle("typewriter");

});

});
