document.addEventListener('DOMContentLoaded', function () {
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