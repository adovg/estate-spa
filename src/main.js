import '../src/styles.scss';
import Swiper from './swiper.js';



window.onload = () => {
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


const popularSwiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'horizontal',
  loop: false,
  spaceBetween: 10,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
breakpoints: {
    //when window width is >= 320px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 660px
    660: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }

});

const reviewsSwiper = new Swiper('.swiper__reviews', {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 1,
  autoHeight: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
breakpoints: {
    //when window width is >= 320px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 660px
    660: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  }

});

const galleryItems = new Swiper('.gallery__item', {
  loop: true,
  spaceBetween: 10,
    autoHeight: false,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },

});


}

