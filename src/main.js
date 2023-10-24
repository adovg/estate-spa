import '../src/styles.scss';
import Swiper from './swiper.js';



window.onload = () => {
  console.log('done loading')
  const burgerBtn = document.querySelector(".burger__btn");
  const menuMobile = document.querySelector(".menu-mobile");

  burgerBtn.onclick = function () {
    burgerBtn.classList.toggle("active");
    hideMenu();
  };

  menuMobile.onclick = function () {
    hideMenu();
    burgerBtn.classList.remove("active");
  };

  function hideMenu() {
    const menuMobile = document.querySelector(".menu-mobile");
    menuMobile.classList.toggle("hidden");
  }

 const filter = document.querySelector('.filter');

 if (filter) {
  const items = filter.querySelectorAll('.filter__item')
  items.forEach(item => {
    item.addEventListener("click", event => {
        console.log('clicked');
      item.querySelector('.item__dropdown').classList.toggle('item__dropdown-active');
      item.querySelector('.item__type-icon').classList.toggle('item__type-icon-active');
        if (event.target.classList.contains('filter__item-value')) {
          item.querySelector('.filter__item-value').textContent = event.target.textContent;
        }
    })
  })
 }


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar

});


 
};
