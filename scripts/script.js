// JavaScript Document
const deButton = document.querySelector("header nav button:nth-of-type(3)");

deButton.onclick = toggleMenu;

function toggleMenu() {
  deButton.classList.toggle("open");
}