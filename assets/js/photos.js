// Fonction pour changer de galerie en fonction du bouton cliqué
function changeGallery(set) {
    const allSets = document.querySelectorAll('.photos');
    allSets.forEach(set => set.style.display = 'none');
    
    const selectedSet = document.getElementById('gallery-' + set);
    selectedSet.style.display = 'block';
}
