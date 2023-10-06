import '../src/styles.scss';



window.onload = () => {
  console.log('hello world')
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
  console.log(items);
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
 
};
