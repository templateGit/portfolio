const hamburger = document.querySelector('.hamburger'),
   menu = document.querySelector('.menu'),
   closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
   menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
   menu.classList.remove('active');
});



const counters = document.querySelectorAll('.items-footer__percent'),
   lines = document.querySelectorAll('.items-footer__divider span');

counters.forEach((item, i) => {
   lines[i].style.width = item.innerHTML;
});



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
   smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
};