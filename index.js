/**
 * 
 * 
 * 
 */
  // Tableau contenant tous mes images de fond carousel ...........
let images = ["images/background2.jpg.jpg", "images/background3.jpg.jpg", "images/background.jpg"];

// Pointeur correspondant à l'image actuelle
let pointeur = 0;

// On attends que le DOM soit chargé
$(function() {
    // Appelle une fonction toutes les 4000 ms
    setInterval(changePictureHeader, 4000);
});

// Fonction permettant de changer l'image du header
function changePictureHeader()
{
    if (pointeur === images.length - 1) {
        pointeur = 0;
    }
    else {
        pointeur++;
    }


    $("header.fond").css("background-image", `url(${images[pointeur]})`);
}  

