!function(c){var n={};function e(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return c[r].call(t.exports,t,t.exports,e),t.l=!0,t.exports}e.m=c,e.c=n,e.d=function(c,n,r){e.o(c,n)||Object.defineProperty(c,n,{enumerable:!0,get:r})},e.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},e.t=function(c,n){if(1&n&&(c=e(c)),8&n)return c;if(4&n&&"object"==typeof c&&c&&c.__esModule)return c;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:c}),2&n&&"string"!=typeof c)for(var t in c)e.d(r,t,function(n){return c[n]}.bind(null,t));return r},e.n=function(c){var n=c&&c.__esModule?function(){return c.default}:function(){return c};return e.d(n,"a",n),n},e.o=function(c,n){return Object.prototype.hasOwnProperty.call(c,n)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function () {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\nconst about__header = document.querySelector('.about__header');\r\nconsole.log(about__header);\r\nconsole.log(about__header.innerHTML);\r\n\r\nabout__header.innerHTML = 'Kilka słów o mnie JS';\r\n\r\nconst about__paragraph = document.querySelector('.about__paragraph--js');\r\nabout__paragraph.innerHTML = \"Pozdro z JS!\";\r\n\r\n// button zmień treść\r\nconst button = document.querySelector(\".header__button--js\");\r\nconst header = document.querySelector(\".header__text--js\");\r\n\r\nfunction changeHeader() {\r\n  header.innerHTML = \"Uwielbiam JS!\";\r\n  header.classList.toggle('header__text--red');\r\n}\r\nbutton.addEventListener('click', changeHeader);\r\n\r\n//menu hamburger\r\nconst hamburgerMenu = document.querySelector('.hamburger');\r\nconst nav = document.querySelector('.navigation__list');\r\nconst iconBurger = document.querySelector('.fa-bars');\r\nconst iconX = document.querySelector('.fa-times');\r\n// const header = document.querySelector('.header') - MAM JUŻ TĄ ZMIENNĄ!;\r\nhamburgerMenu.addEventListener('click', function () {\r\n  iconBurger.classList.toggle('offIcon');\r\n  iconX.classList.toggle('offIcon');\r\n  nav.classList.toggle('changeDisplay');\r\n  hamburgerMenu.style.color = \"#999\";\r\n  header.classList.toggle('marginGoesDown');\r\n});\r\n\r\n//input z pozostającym tekstem\r\nconst focusInput = document.querySelector('.form__input--js');\r\n\r\nif (localStorage.getItem('focusInput')) {\r\n  focusInput.value = localStorage.getItem('focusInput');\r\n}\r\nfocusInput.addEventListener('keyup', (e) => {\r\n  localStorage.setItem('focusInput', e.target.value);\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XHJcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xyXG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XHJcbmNvbnN0IGFib3V0X19oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfX2hlYWRlcicpO1xyXG5jb25zb2xlLmxvZyhhYm91dF9faGVhZGVyKTtcclxuY29uc29sZS5sb2coYWJvdXRfX2hlYWRlci5pbm5lckhUTUwpO1xyXG5cclxuYWJvdXRfX2hlYWRlci5pbm5lckhUTUwgPSAnS2lsa2Egc8WCw7N3IG8gbW5pZSBKUyc7XHJcblxyXG5jb25zdCBhYm91dF9fcGFyYWdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X19wYXJhZ3JhcGgtLWpzJyk7XHJcbmFib3V0X19wYXJhZ3JhcGguaW5uZXJIVE1MID0gXCJQb3pkcm8geiBKUyFcIjtcclxuXHJcbi8vIGJ1dHRvbiB6bWllxYQgdHJlxZvEh1xyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnV0dG9uLS1qc1wiKTtcclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX3RleHQtLWpzXCIpO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlSGVhZGVyKCkge1xyXG4gIGhlYWRlci5pbm5lckhUTUwgPSBcIlV3aWVsYmlhbSBKUyFcIjtcclxuICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX190ZXh0LS1yZWQnKTtcclxufVxyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VIZWFkZXIpO1xyXG5cclxuLy9tZW51IGhhbWJ1cmdlclxyXG5jb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fbGlzdCcpO1xyXG5jb25zdCBpY29uQnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLWJhcnMnKTtcclxuY29uc3QgaWNvblggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtdGltZXMnKTtcclxuLy8gY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpIC0gTUFNIEpVxbsgVMSEIFpNSUVOTsSEITtcclxuaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBpY29uQnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ29mZkljb24nKTtcclxuICBpY29uWC5jbGFzc0xpc3QudG9nZ2xlKCdvZmZJY29uJyk7XHJcbiAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2NoYW5nZURpc3BsYXknKTtcclxuICBoYW1idXJnZXJNZW51LnN0eWxlLmNvbG9yID0gXCIjOTk5XCI7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ21hcmdpbkdvZXNEb3duJyk7XHJcbn0pO1xyXG5cclxuLy9pbnB1dCB6IHBvem9zdGFqxIVjeW0gdGVrc3RlbVxyXG5jb25zdCBmb2N1c0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2lucHV0LS1qcycpO1xyXG5cclxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2N1c0lucHV0JykpIHtcclxuICBmb2N1c0lucHV0LnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvY3VzSW5wdXQnKTtcclxufVxyXG5mb2N1c0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9jdXNJbnB1dCcsIGUudGFyZ2V0LnZhbHVlKTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);