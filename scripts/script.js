// JavaScript Document
const deButton = document.querySelector("header nav button:nth-of-type(3)");
const deMenu = document.querySelector("body>nav");
const deWinkelwagen = document.querySelector("header nav button:nth-of-type(2)");
const deWinkelwagenMenu = document.querySelector("body>nav:nth-of-type(2)");
const deSearchmenu = document.querySelector("header nav button:nth-of-type(1)");
const deSearch = document.querySelector("body>nav:nth-of-type(3)");




deButton.onclick = toggleMenu;
deWinkelwagen.onclick = toggleWinkelwagen;
deSearchmenu.onclick = toggleSearch;
// deFooter1button.onclick = toggleFooter1;

function toggleMenu() {
  deButton.classList.toggle("open");
  deMenu.classList.toggle("open");
  deWinkelwagenMenu.classList.remove("open");
  deSearch.classList.remove("open");
}

function toggleWinkelwagen() {
  deWinkelwagenMenu.classList.toggle("open");
  deMenu.classList.remove("open");
  deSearch.classList.remove("open");
  deButton.classList.remove("open");
}

function toggleSearch() {
  deSearch.classList.toggle("open");
  deMenu.classList.remove("open");
  deWinkelwagenMenu.classList.remove("open");
  deButton.classList.remove("open");
}

document.addEventListener("keydown", event => {
  if (event.key == "Escape") {
    deMenu.classList.remove("open");
    deWinkelwagenMenu.classList.remove("open");
    deSearch.classList.remove("open");
    deButton.classList.remove("open");
  }
});



// const deFooter1button = document.querySelector("footer nav button:nth-of-type(1)");
// const deFooter1 = document.querySelector("footer nav ul:nth-of-type(1)");

// function toggleFooter1() {
//   deFooter1.classList.toggle("open");
// }


const deFooterButtons = document.querySelectorAll("footer nav button");

deFooterButtons.forEach(deFooterButton => { 
  deFooterButton.onclick = function (e) {
    var deButton = e.target;
    var lijstje = deButton.nextElementSibling;
    lijstje.classList.toggle("open");
    deButton.classList.toggle("open");
  }
});