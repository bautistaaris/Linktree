document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('nav ul');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navUl.classList.toggle('open');
        // Accesibilidad
        hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
    });
    // Opcional: cerrar menú al hacer click en un link
    navUl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navUl.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    const filtros = document.querySelectorAll('.proyectos-filtros button');
    const cards = document.querySelectorAll('.proyecto-card');

    filtros.forEach(boton => {
        boton.addEventListener('click', function () {
            filtros.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filtro = this.textContent.trim();

            cards.forEach(card => {
                const tipo = card.querySelector('.proyecto-tipo').textContent.trim();
                if (filtro === 'Todos' || tipo === filtro) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});