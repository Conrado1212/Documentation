$(document).ready(function() {
    var NavY = $('.top-menu').offset().top;

    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();
        ScrollY > NavY ?  $('.top-menu').addClass('sticky') : $('.top-menu').removeClass('sticky');
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
onclick="document.getElementById('about').scrollIntoView({ behavior: 'smooth'})"