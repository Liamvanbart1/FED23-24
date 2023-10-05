// JavaScript Document
var hamburgerMenu = document.querySelector("header > section");

hamburgerMenu.addEventListener("click", menuToggle);

function menuToggle() {
    hamburgerMenu.classList.toggle("menuOpen");
}

