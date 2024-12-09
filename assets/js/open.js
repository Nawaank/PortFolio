// Sélectionne toutes les images et le conteneur lightbox
const images = document.querySelectorAll('.image-container img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('#lightbox .close');

// Ajoute un événement "click" sur chaque image
images.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImg.src = image.src; // Met à jour la source de l'image
        lightbox.classList.remove('hidden'); // Affiche le lightbox
    });
});

// Ferme le lightbox lorsque l'utilisateur clique sur le bouton close
closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
});

// Ferme le lightbox si l'utilisateur clique à l'extérieur de l'image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.add('hidden');
    }
});
// Variables globales
let currentIndex = 0; // Index de l'image actuellement affichée
const imagesArray = Array.from(images); // Transforme la NodeList en tableau

// Fonction pour ouvrir une image dans le lightbox
function openLightbox(index) {
    currentIndex = index; // Met à jour l'index actuel
    lightboxImg.src = imagesArray[currentIndex].src; // Affiche l'image correspondante
    lightbox.classList.remove('hidden'); // Affiche le lightbox
}

// Ajouter l'événement click à chaque image
imagesArray.forEach((image, index) => {
    image.addEventListener('click', () => openLightbox(index));
});

// Boutons "Précédent" et "Suivant"
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Fonction pour afficher l'image précédente
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length; // Boucle en arrière
    lightboxImg.src = imagesArray[currentIndex].src; // Affiche l'image correspondante
});

// Fonction pour afficher l'image suivante
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imagesArray.length; // Boucle en avant
    lightboxImg.src = imagesArray[currentIndex].src; // Affiche l'image correspondante
});

// Fermer le lightbox
closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
});

// Fermer le lightbox si on clique en dehors de l'image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.add('hidden');
    }
});
