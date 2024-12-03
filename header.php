<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio de Martin DAYOT</title>
    <link rel="stylesheet" href="../assets/css/presentation.css">
    <link rel="stylesheet" href="../assets/css/contact.css">
    <link rel="stylesheet" href="../assets/css/styles.css">
</head>
<body>
    <header>
        <div class="header-left">
            <h1>Martin DAYOT</h1>
            <div class="burger-menu" onclick="toggleMenu()">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="header-right">
            <a href="presentation.php">Présentation</a>
            <a href="galerie.php">Photos</a>
            <a href="contact.php">Me Contacter</a>
        </div>
    </header>
    <script>
    function toggleMenu() {
        const headerRight = document.querySelector('.header-right');
        const burgerMenu = document.querySelector('.burger-menu');
        headerRight.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    }
    </script>
</body>
</html>
