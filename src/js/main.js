
/* 
let $ = jQuery.noConflict();

$( 

 ); 


$(function () {
  $('.header__burger').on('click', function () {
    $('.header__burger').toggleClass('active');
  });
})
 $(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
    });
 });  */



let $ = jQuery.noConflict();

$(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .nav__list').toggleClass('active');
    $('body').toggleClass('lock');
  });

})