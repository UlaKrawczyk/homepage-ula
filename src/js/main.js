"use strict";

// service worker registration - remove if you're not going to use it
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below
const about__header = document.querySelector('.about__header');
console.log(about__header);
console.log(about__header.innerHTML);

about__header.innerHTML = 'Kilka słów o mnie JS';

const about__paragraph = document.querySelector('.about__paragraph--js');
about__paragraph.innerHTML = "Pozdro z JS!";

// button zmień treść
const button = document.querySelector(".header__button--js");
const header = document.querySelector(".header__text--js");

function changeHeader() {
  header.innerHTML = "Uwielbiam JS!";
  header.classList.toggle('header__text--red');
}
button.addEventListener('click', changeHeader);

//menu hamburger
const hamburgerMenu = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation__list');
const iconBurger = document.querySelector('.fa-bars');
const iconX = document.querySelector('.fa-times');
// const header = document.querySelector('.header') - MAM JUŻ TĄ ZMIENNĄ!;
hamburgerMenu.addEventListener('click', function () {
  iconBurger.classList.toggle('offIcon');
  iconX.classList.toggle('offIcon');
  nav.classList.toggle('changeDisplay');
  hamburgerMenu.style.color = "#999";
  header.classList.toggle('marginGoesDown');
});

//input z pozostającym tekstem
const focusInput = document.querySelector('.form__input--js');

if (localStorage.getItem('focusInput')) {
  focusInput.value = localStorage.getItem('focusInput');
}
focusInput.addEventListener('keyup', (e) => {
  localStorage.setItem('focusInput', e.target.value);
});