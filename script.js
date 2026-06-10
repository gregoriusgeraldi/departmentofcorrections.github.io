const body = document.body;
const paper = document.querySelector(".paper");

const applyDarkMode = (enabled) => {
    body.classList.toggle("dark-mode", enabled);
    localStorage.setItem("darkMode", enabled);
};

applyDarkMode(localStorage.getItem("darkMode") === "true");

document.getElementById("toggleDark")?.addEventListener("click", () => {
    applyDarkMode(!body.classList.contains("dark-mode"));
});

document.getElementById("toggleLines")?.addEventListener("click", () => {
    paper?.classList.toggle("hide-lines");
});

document.getElementById("toggleFont")?.addEventListener("click", () => {
    body.classList.toggle("typewriter");
});

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(({ isIntersecting, target }) => {
            if (!isIntersecting) return;

            target.classList.add("show");
            observer.unobserve(target);
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll(".section").forEach((section) => {
    section.classList.add("fade");
    observer.observe(section);
});
