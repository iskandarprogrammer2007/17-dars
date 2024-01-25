window.addEventListener("scroll", function () {
  shrink();
  showBackTop();
});

let navbar = document.getElementById("navbar");
let backTop = document.getElementById("backtop");
let hamburgerBtn = document.getElementById("hamburger-btn");
let navList = document.getElementById("nav__items");

function shrink() {
  if (scrollY > 0) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

function showBackTop() {
  if (scrollY > 200) {
    backTop.classList.add("show-backtop");
  } else {
    backTop.classList.remove("show-backtop");
  }
}

hamburgerBtn.addEventListener("click", function () {
  navList.classList.toggle("show-nav__list");
});

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "./images/dark.svg";
  } else {
    this.firstElementChild.src = "./images/light.svg";
  }
  document.body.classList.toggle("light");
});
