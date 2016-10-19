 var animatePoints = function() {
   
   var revealPoint = function() {
     $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
     $.each($('.point'), revealPoint);

var animatePoints = function(points) {
   forEach(points, revealPoint);
};
// #1
 
  $(window).load(function() {
      if ($(window).height() > 950) {
        animatePoints();
     }
  
// #2
       var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

// #3
   $(window).scroll(function(event) {
//#4
        if ($(window).scrollTop() >= scrollDistance) {
             animatePoints(); 
        }
    });
});