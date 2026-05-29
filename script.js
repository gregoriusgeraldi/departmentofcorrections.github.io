document.addEventListener("DOMContentLoaded", () => {

// Reveal animation
const cards = document.querySelectorAll(".card");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => observer.observe(card));
} else {
    cards.forEach(card => card.classList.add("show"));
}

// Copy text (Event Delegation)
document.addEventListener("click", async (e) => {

    const code = e.target.closest(".code");

    if (!code) return;

    try {
        await navigator.clipboard.writeText(code.textContent.trim());

        const originalText = code.textContent;

        code.textContent = "✓ Copied";

        setTimeout(() => {
            code.textContent = originalText;
        }, 1000);

    } catch (err) {
        console.error("Copy failed", err);
    }

});

// Current year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

});
