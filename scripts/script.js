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
}

function toggleSearch() {
  deSearch.classList.toggle("open");
  deMenu.classList.remove("open");
  deWinkelwagenMenu.classList.remove("open");
}