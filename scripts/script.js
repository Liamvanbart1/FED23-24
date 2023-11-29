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





const deFooterButtons = document.querySelectorAll("footer nav button");

deFooterButtons.forEach(deFooterButton => { 
  deFooterButton.onclick = function (e) {
    var deButton = e.target;
    var lijstje = deButton.nextElementSibling;
    lijstje.classList.toggle("open");
    deButton.classList.toggle("open");
  }
});



// caurosell code

// if statement zodat deze code alleen in index.html wordt uitgevoerd werkte helaas niet op github
// if (window.location.href.indexOf('index.html' || 'https://liamvanbart1.github.io/FED23-24/') > -1) {

  let index = 0;
  let isRunning = false;
  let timer;

  displayImages();

  document.getElementById("toggleButton").addEventListener("click", toggleImageSlider);
  document.getElementById("prevButton").addEventListener("click", showPrevImage);
  document.getElementById("nextButton").addEventListener("click", showNextImage);

  function displayImages() {
    const images = document.getElementsByClassName("image");

    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }

    index++;
    if (index > images.length) {
      index = 1;
    }

    images[index - 1].style.display = "flex";

    if (isRunning) {
      timer = setTimeout(displayImages, 2000);
    }
  }

  function toggleImageSlider() {
    isRunning = !isRunning;
    if (isRunning) {
      document.getElementById("toggleButton").textContent = "Stop";
      displayImages();
    } else {
      document.getElementById("toggleButton").textContent = "Start";
      clearTimeout(timer);
    }
  }

  function showPrevImage() {
    index--;
    if (index < 1) {
      index = document.getElementsByClassName("image").length;
    }
    showImage(index);
  }

  function showNextImage() {
    index++;
    if (index > document.getElementsByClassName("image").length) {
      index = 1;
    }
    showImage(index);
  }

  function showImage(index) {
    clearTimeout(timer);
    const images = document.getElementsByClassName("image");

    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }

    images[index - 1].style.display = "flex";

    if (isRunning) {
      timer = setTimeout(displayImages, 2000);
    }
  }

// }

//bron https://www.educative.io/answers/how-to-create-an-automatic-slideshow-with-html-css-and-js 
// vervolgens aangepast met CHATGPT en ik kan het niet volledig uitleggen maar het werkt dus ik ben blij heel blij