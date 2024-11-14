<?php include('header.php'); ?>

<div class="content">
    <h2>Galerie</h2>
    <div class="gallery">
        <div class="buttons">
            <button class="gallery-button" onclick="changeGallery('set1')">Set 1</button>
            <button class="gallery-button" onclick="changeGallery('set2')">Set 2</button>
            <button class="gallery-button" onclick="changeGallery('set3')">Set 3</button>
            <button class="gallery-button" onclick="changeGallery('set4')">Set 4</button>
        </div>
        <div class="photos" id="gallery-set1">
            <img src="assets/images/photo1.jpg" alt="Photo 1">
            <img src="assets/images/photo2.jpg" alt="Photo 2">
        </div>
        <div class="photos" id="gallery-set2" style="display:none;">
            <img src="assets/images/photo3.jpg" alt="Photo 3">
        </div>
        <div class="photos" id="gallery-set3" style="display:none;">
            <img src="assets/images/photo1.jpg" alt="Photo 1">
            <img src="assets/images/photo2.jpg" alt="Photo 2">
        </div>
        <div class="photos" id="gallery-set4" style="display:none;">
            <img src="assets/images/photo3.jpg" alt="Photo 3">
        </div>
    </div>
</div>

<script src="assets/js/script.js"></script>

<?php include('footer.php'); ?>
