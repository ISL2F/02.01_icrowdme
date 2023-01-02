const burger = document.querySelector(".menu-header__burger");
const menu = document.querySelector(".menu-header__nav");
burger.addEventListener("click", openBurger);
function openBurger(e) {
  burger.classList.toggle("active-burger");
  menu.classList.toggle("active-burger");
}

document.addEventListener("scroll", closeBurger);
function closeBurger() {
  burger.classList.remove("active-burger");
  menu.classList.remove("active-burger");
}

/**************************************/
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("swiper-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

/***********************************/

function simpleChange(event, tabNumber) {
  // Declare all variables
  var i;
  let tabcontent;
  let tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabs-simple__item");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      "tab-button__active",
      " "
    );
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabNumber).style.display = "flex";
  event.currentTarget.className += " tab-button__active";
}
