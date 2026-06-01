document.addEventListener("DOMContentLoaded", () => {
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
if(localStorage.getItem("darkMode") === "true"){
document.body.classList.add("dark-mode");
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

const darkBtn = document.getElementById("toggleDark");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("darkMode", isDark);

});
  
});
