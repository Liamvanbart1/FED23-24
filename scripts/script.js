// JavaScript Document
const deButton = document.querySelector("header nav button:nth-of-type(3)");
const deMenu = document.querySelector("body>nav");

deButton.onclick = toggleMenu;

function toggleMenu() {
  deButton.classList.toggle("open");
  deMenu.classList.toggle("open");
}
