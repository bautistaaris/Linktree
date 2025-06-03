document.addEventListener("DOMContentLoaded", () => {
    const filterLinks = document.querySelectorAll(".artcaract a");
    const tarjetas = document.querySelectorAll(".tarjeta");

    filterLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const category = e.target.textContent.toLowerCase();

            tarjetas.forEach(tarjeta => {
                const tarjetaCategory = tarjeta.querySelector(".etiqueta").textContent.toLowerCase();

                if (category === "todos" || tarjetaCategory.includes(category)) {
                    tarjeta.style.display = "block";
                } else {
                    tarjeta.style.display = "none";
                }
            });

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