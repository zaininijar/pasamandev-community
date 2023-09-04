document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});

const navbar = document.querySelector(".__main-navbar");
function navbarScrollInit() {
  if (window.scrollY > 1) {
    navbar.classList.add("__main-navbar-scroll");
    navbar.classList.add("__main-navbar-scroll-gradient");
  } else {
    navbar.classList.remove("__main-navbar-scroll");
    navbar.classList.remove("__main-navbar-scroll-gradient");
  }
}

document.addEventListener("scroll", () => {
  navbarScrollInit();
});

function scrollToElement(elementId) {
  var elem = document.getElementById(elementId);
  if (elem) {
    var elemRect = elem.getBoundingClientRect();
    var scrollYValue = window.scrollY + elemRect.top - 100;

    if (elementId == "services") {
      scrollYValue = scrollYValue + 90;
    } else if (elementId == "contact") {
      scrollYValue = scrollYValue + 70;
    }

    window.scrollTo({
      top: scrollYValue,
    });
  }
}

function initLoader() {
  var spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(spinner.remove(), 3000);
  }
}
