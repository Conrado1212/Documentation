// $(document).ready(function() {
//     var NavY = $('.top-menu').offset().top;

//     var stickyNav = function(){
//         var ScrollY = $(window).scrollTop();
//         ScrollY > NavY ?  $('.top-menu').addClass('sticky') : $('.top-menu').removeClass('sticky');
//     };

//     stickyNav();

//     $(window).scroll(function() {
//         stickyNav();
//     });
// });

var   body = document.querySelector("body"),
navbar = body.querySelector("#navbar"),
toggle = body.querySelector(".toggle"),
modeSw = body.querySelector(".toggle-sw"),
modeText = body.querySelector(".mode-text");

modeSw.addEventListener("click", () =>{
 body.classList.toggle("white");
})

function scrollToElement(){
let x = document.getElementsByClassName('nav-link')[0]
 let y = document.getElementById('Variables');
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

// function getid(obj) {
//   alert(obj.id);
// }

//  onmouseover="getid(this);" 


window.addEventListener('load',function(){
  $('#navbar li a').click(function () {
      $('#navbar li a').removeClass('active');

    $(this).addClass('active');
  })
})

// get the actual pathname:
var path = location.pathname;
// filter menu items to find one that has anchor tag with matching href:
$('#navbar li a').filter(function(){
    return '/' + $('a', this).attr('href') === path;
// add class active to the item:
}).addClass('active');

function menuU(){
    var toggleMenuU = document.querySelector('.menuU');
    //console.log(toggleMenuU);
    toggleMenuU.classList.toggle('active2');
}


document.addEventListener("click", function(e){
    
  var MenuU = document.querySelector('.menuU.active2');
  //console.log(MenuU);
  var toggleMenuU2 = document.querySelector('.fa-regular.fa-user');
  //console.log(e.target);
  if(typeof(MenuU) !='undefined' && MenuU !=null){
  if(e.target !==MenuU && e.target !==toggleMenuU2){
      MenuU.classList.remove('active2');
     // toggleMenuU.style.visibility = "hidden";
      //console.log(e.target);
      //&& e.target  !==toggleMenuU2
     // console.log(toggleMenuU.classList.contains('active2'));
     //&& toggleMenuU.classList.contains('active2') 
     //check tomorrow if contains will be works for this shit
  }
  }
});


// document.addEventListener("click", function xd(e){


// console.log(e.target);
// console.log('xd');
// });



// function scrollToElement(x,y){
//   const scrollToBtn = $(x);
//   const scrollToEl = $(y);
//   scrollToBtn.click(() => {
//     $('html').animate(
//       {
//         scrollTop: scrollToEl.offset().top,
//       },
//       800 //speed
//     );
//   });
//   }


function testLoc() {
  location.href = "#Variables";
}


