//thanh head
const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//THu menu
var MenuItems = document.getElementById('nav-list');

MenuItems.style.maxHeight = '0px';

function menutoggle() {
  if (MenuItems.style.maxHeight == '0px') {
    MenuItems.style.maxHeight = '350px';
  } else {
    MenuItems.style.maxHeight = '0px';
  }
}



//Chuyen dang nhap
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");
function register() {

  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(100px)";

}
function login() {

  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(0px)";

}
//
var ProductImg = document.getElementById('ProductImg');
var Smallimg = document.getElementsByClassName('small-img');

Smallimg[0].onclick = function () {
  ProductImg.src = Smallimg[0].src;
}
Smallimg[1].onclick = function () {
  ProductImg.src = Smallimg[1].src;
}
Smallimg[2].onclick = function () {
  ProductImg.src = Smallimg[2].src;
}
Smallimg[3].onclick = function () {
  ProductImg.src = Smallimg[3].src;
}

//icon_search
$(document).ready(function(){
  $('#toggle').click(function(){
    $('nav').slideToggle();
  });
})//