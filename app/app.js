$(document).ready(function() {
    var NavY = $('.nav-menu').offset().top;

    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();
        ScrollY > NavY ?  $('.nav-menu').addClass('sticky') : $('.nav-menu').removeClass('sticky');
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});


function scrollToElement(x,y){
const scrollToBtn = $(x);
const scrollToEl = $(y);
scrollToBtn.click(() => {
  $('html').animate(
    {
      scrollTop: scrollToEl.offset().top,
    },
    800 //speed
  );
});
}
