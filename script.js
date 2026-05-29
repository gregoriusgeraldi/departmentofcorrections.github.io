document.addEventListener("DOMContentLoaded", function () {

    // Animasi Card
    const cards = document.querySelectorAll(".card");

    if (window.IntersectionObserver) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        });

        cards.forEach(function(card) {
            observer.observe(card);
        });
    } else {
        cards.forEach(function(card) {
            card.classList.add("show");
        });
    }

    // Copy Code
    const codes = document.querySelectorAll(".code");

    codes.forEach(function(code) {
        code.addEventListener("click", function() {

            const text = code.innerText;

            navigator.clipboard.writeText(text).then(function() {

                const original = code.innerText;

                code.innerText = "✓ Copied";

                setTimeout(function() {
                    code.innerText = original;
                }, 1000);

            }).catch(function(err) {
                console.error(err);
            });

        });
    });

    // Tahun Otomatis
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
