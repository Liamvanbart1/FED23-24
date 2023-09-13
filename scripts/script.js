// JavaScript Document
//Inlog button//
var deHeader =
document.querySelector("header");

var inlogButton = 
document.querySelector("header > div > button:nth-of-type(1)");

inlogButton.addEventListener("click", inlogToggle);

function inlogToggle() {
    deHeader.classList.toggle("inlogOpen");
    deHeader.classList.remove("menuOpen");
}

var inlogSluit = 
document.querySelector("header > div > button:nth-of-type(2)");

inlogSluit.addEventListener("click", inlogSluiten);

function inlogSluiten() {
    deHeader.classList.remove("inlogOpen");
}

var menuButton = 
document.querySelector("header > div > button:nth-of-type(3)");

menuButton.addEventListener("click", menuToggle);

function menuToggle() {
    deHeader.classList.toggle("menuOpen");
    deHeader.classList.remove("inlogOpen");
}

var derdeButton = 
document.querySelector("header button:nth-of-type(3)");

function derdeButtonIcon() {
    derdeButton.classList.toggle("iconchange");
}

derdeButton.addEventListener("click",derdeButtonIcon);