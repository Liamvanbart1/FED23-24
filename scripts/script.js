// JavaScript Document
var hamburgerMenu = document.querySelector("header > div");

hamburgerMenu.addEventListener("click", menuToggle);

function menuToggle() {
    hamburgerMenu.classList.toggle("menuOpen");
}