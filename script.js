document.addEventListener("DOMContentLoaded", () => {

    // Fade animation
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{

            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }

        });
    });

    cards.forEach(card=>{

        card.style.opacity="0";
        card.style.transform="translateY(20px)";
        card.style.transition="all .5s ease";

        observer.observe(card);
    });

    document.querySelectorAll(".card").forEach(card=>{

        card.addEventListener("transitionend",()=>{
            if(card.classList.contains("show")){
                card.style.opacity="1";
                card.style.transform="translateY(0)";
            }
        });

    });

    // Copy text ketika klik kode
    document.querySelectorAll(".code").forEach(item=>{

        item.addEventListener("click",()=>{

            navigator.clipboard.writeText(item.innerText);

            const original=item.innerHTML;

            item.innerHTML="✓ Copied";

            setTimeout(()=>{
                item.innerHTML=original;
            },1000);

        });

    });

    // Current year
    const year=document.getElementById("year");

    if(year){
        year.textContent=new Date().getFullYear();
    }

});