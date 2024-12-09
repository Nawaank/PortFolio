document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    // Gestion du clic sur le bouton burger
    burger.addEventListener('click', (e) => {
        menu.classList.toggle('show');
        burger.classList.toggle('open'); // Ajout de la classe pour l'animation
        e.stopPropagation(); // Empêche la propagation pour éviter de déclencher le clic global
    });

    // Gestion du clic en dehors du menu pour le fermer
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('show') && !menu.contains(e.target) && !burger.contains(e.target)) {
            menu.classList.remove('show');
            burger.classList.remove('open');
        }
    });

    // (Optionnel) Gestion du clic sur un bouton de fermeture dans le menu (croix)
    const closeButton = menu.querySelector('.close-btn'); // Si un bouton de fermeture existe
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            menu.classList.remove('show');
            burger.classList.remove('open');
        });
    }
});
