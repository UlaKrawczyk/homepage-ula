!function(n){var e={};function c(r){if(e[r])return e[r].exports;var l=e[r]={i:r,l:!1,exports:{}};return n[r].call(l.exports,l,l.exports,c),l.l=!0,l.exports}c.m=n,c.c=e,c.d=function(n,e,r){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)c.d(r,l,function(e){return n[e]}.bind(null,l));return r},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function () {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\n\r\nconst about__header = document.querySelector('.about__header');\r\nconsole.log(about__header);\r\nconsole.log(about__header.innerHTML);\r\n\r\nabout__header.innerHTML = 'Kilka słów o mnie JS';\r\n\r\nconst about__paragraph = document.querySelector('.about__paragraph--js');\r\nabout__paragraph.innerHTML = \"Pozdro z JS!\";\r\n\r\n\r\n\r\nfunction greet(name, age) {\r\n  console.log(`Witaj ${name}, masz ${age} lat:) Dzięki, że jesteś`);\r\n}\r\ngreet('Ula', 15);\r\n\r\nconst welcome = (name, age) => {\r\n  console.log(`Witaj ${name}, masz ${age} lat:)`);\r\n}\r\nwelcome('ula', 15);\r\n\r\nconst name = 'ula';\r\nconst age = 40;\r\nwelcome(name, age);\r\n\r\nconst button = document.querySelector(\".header__button--js\");\r\nconst header = document.querySelector(\".header__text--js\");\r\n\r\nfunction changeHeader() {\r\n  header.innerHTML = \"Uwielbiam JS!\";\r\n  header.classList.toggle('header__text--red');\r\n}\r\nbutton.addEventListener('click', changeHeader);\r\n\r\nconst hamburgerMenu = document.querySelector('.hamburger');\r\nconst nav = document.querySelector('.navigation__list');\r\nconst iconBurger = document.querySelector('.fa-bars');\r\nconst iconX = document.querySelector('.fa-times');\r\n// const header = document.querySelector('.header') - MAM JUŻ TĄ ZMIENNĄ!;\r\n\r\nhamburgerMenu.addEventListener('click', function () {\r\n  iconBurger.classList.toggle('offIcon');\r\n  iconX.classList.toggle('offIcon');\r\n  nav.classList.toggle('changeDisplay');\r\n  hamburgerMenu.style.color = \"#999\";\r\n  header.classList.toggle('marginGoesDown');\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQSx1QkFBdUIsS0FBSyxTQUFTLElBQUk7QUFDekM7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixLQUFLLFNBQVMsSUFBSTtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxyXG5cclxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XHJcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xyXG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XHJcblxyXG5cclxuY29uc3QgYWJvdXRfX2hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9faGVhZGVyJyk7XHJcbmNvbnNvbGUubG9nKGFib3V0X19oZWFkZXIpO1xyXG5jb25zb2xlLmxvZyhhYm91dF9faGVhZGVyLmlubmVySFRNTCk7XHJcblxyXG5hYm91dF9faGVhZGVyLmlubmVySFRNTCA9ICdLaWxrYSBzxYLDs3cgbyBtbmllIEpTJztcclxuXHJcbmNvbnN0IGFib3V0X19wYXJhZ3JhcGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfX3BhcmFncmFwaC0tanMnKTtcclxuYWJvdXRfX3BhcmFncmFwaC5pbm5lckhUTUwgPSBcIlBvemRybyB6IEpTIVwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBncmVldChuYW1lLCBhZ2UpIHtcclxuICBjb25zb2xlLmxvZyhgV2l0YWogJHtuYW1lfSwgbWFzeiAke2FnZX0gbGF0OikgRHppxJlraSwgxbxlIGplc3RlxZtgKTtcclxufVxyXG5ncmVldCgnVWxhJywgMTUpO1xyXG5cclxuY29uc3Qgd2VsY29tZSA9IChuYW1lLCBhZ2UpID0+IHtcclxuICBjb25zb2xlLmxvZyhgV2l0YWogJHtuYW1lfSwgbWFzeiAke2FnZX0gbGF0OilgKTtcclxufVxyXG53ZWxjb21lKCd1bGEnLCAxNSk7XHJcblxyXG5jb25zdCBuYW1lID0gJ3VsYSc7XHJcbmNvbnN0IGFnZSA9IDQwO1xyXG53ZWxjb21lKG5hbWUsIGFnZSk7XHJcblxyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnV0dG9uLS1qc1wiKTtcclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX3RleHQtLWpzXCIpO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlSGVhZGVyKCkge1xyXG4gIGhlYWRlci5pbm5lckhUTUwgPSBcIlV3aWVsYmlhbSBKUyFcIjtcclxuICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX190ZXh0LS1yZWQnKTtcclxufVxyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VIZWFkZXIpO1xyXG5cclxuY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKTtcclxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2xpc3QnKTtcclxuY29uc3QgaWNvbkJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1iYXJzJyk7XHJcbmNvbnN0IGljb25YID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXRpbWVzJyk7XHJcbi8vIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSAtIE1BTSBKVcW7IFTEhCBaTUlFTk7EhCE7XHJcblxyXG5oYW1idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGljb25CdXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb2ZmSWNvbicpO1xyXG4gIGljb25YLmNsYXNzTGlzdC50b2dnbGUoJ29mZkljb24nKTtcclxuICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlRGlzcGxheScpO1xyXG4gIGhhbWJ1cmdlck1lbnUuc3R5bGUuY29sb3IgPSBcIiM5OTlcIjtcclxuICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbWFyZ2luR29lc0Rvd24nKTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);