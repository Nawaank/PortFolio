function showContent(year) {
    // Récupère toutes les sections de contenu
    const allSections = document.querySelectorAll('.content');
    const allButtons = document.querySelectorAll('.bouton.année button');

    // Cache toutes les sections
    allSections.forEach(section => {
        section.classList.add('hidden');
    });

    // Retire la classe active de tous les boutons
    allButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Affiche la section correspondant à l'année cliquée
    const targetSection = document.getElementById(`content-${year}`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // Ajoute la classe active au bouton cliqué
    const activeButton = document.querySelector(`#btn-${year}`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Ajout des gestionnaires d'événements pour les boutons
document.getElementById('btn-2022').addEventListener('click', () => showContent('2022'));
document.getElementById('btn-2023').addEventListener('click', () => showContent('2023'));
document.getElementById('btn-2024').addEventListener('click', () => showContent('2024'));

// Afficher la section 2024 par défaut au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    showContent('2024');
});