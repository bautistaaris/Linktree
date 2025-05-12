document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll("#personal, #deporte, #bateria, #peliculas, #paginas");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elementos.forEach(elemento => observer.observe(elemento));

    window.goToLink = function(url) {
        window.open(url, '_blank');
    };
});


