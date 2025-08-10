document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in, .zoom-on-scroll");

    const showOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        elements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // Para cargar elementos visibles al inicio

    // Slider de frases
    const quotes = document.querySelectorAll(".quote-slider p");
    let current = 0;
    setInterval(() => {
        quotes.forEach(q => q.style.display = "none");
        current = (current + 1) % quotes.length;
        quotes[current].style.display = "block";
    }, 3000);
});
