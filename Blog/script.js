document.addEventListener("DOMContentLoaded", () => {
    const filterLinks = document.querySelectorAll(".artcaract a"); // Selecciona los enlaces de las categorías
    const tarjetas = document.querySelectorAll(".tarjeta"); // Selecciona todas las tarjetas

    filterLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace

            // Obtener la categoría seleccionada
            const category = e.target.textContent.toLowerCase();

            // Mostrar u ocultar tarjetas según la categoría
            tarjetas.forEach(tarjeta => {
                const tarjetaCategory = tarjeta.querySelector(".etiqueta").textContent.toLowerCase();

                if (category === "todos" || tarjetaCategory.includes(category)) {
                    tarjeta.style.display = "block"; // Mostrar tarjeta
                } else {
                    tarjeta.style.display = "none"; // Ocultar tarjeta
                }
            });

            // Actualizar el estilo del enlace activo
            filterLinks.forEach(link => link.classList.remove("active"));
            e.target.classList.add("active");
        });
    });

    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    const artcaractToggle = document.getElementById('artcaractToggle');
    const artcaractUl = document.querySelector('.artcaract ul');

    if (artcaractToggle && artcaractUl) {
        artcaractToggle.addEventListener('click', () => {
            artcaractUl.classList.toggle('active');
        });
    }

    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});