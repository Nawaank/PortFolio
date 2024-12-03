document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('show');
        burger.classList.toggle('open'); // Ajout de la classe pour l'animation
    });
});
