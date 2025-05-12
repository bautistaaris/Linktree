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
});