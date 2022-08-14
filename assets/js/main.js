const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});
const swiperCategory = new Swiper('.categoriesslider_swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 13,
  spaceBetween: 50,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});
const swiperSimilar = new Swiper('.productdetail__swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,



});


/*
* @Adilade Input Quantity Increment
* 
* Free to use - No warranty
*/

var input = document.querySelector('#qty');
var btnminus = document.querySelector('.qtyminus');
var btnplus = document.querySelector('.qtyplus');

if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {

  var min = Number(input.getAttribute('min'));
  var max = Number(input.getAttribute('max'));
  var step = Number(input.getAttribute('step'));

  function qtyminus(e) {
    var current = Number(input.value);
    var newval = (current - step);
    if (newval < min) {
      newval = min;
    } else if (newval > max) {
      newval = max;
    }
    input.value = Number(newval);
    e.preventDefault();
  }

  function qtyplus(e) {
    var current = Number(input.value);
    var newval = (current + step);
    if (newval > max) newval = max;
    input.value = Number(newval);
    e.preventDefault();
  }

  btnminus.addEventListener('click', qtyminus);
  btnplus.addEventListener('click', qtyplus);

} // End if test