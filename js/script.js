$(document).ready(function(){
  $('.current-header-button').animate({top: "+5px"}, 0)
  $('.header-button').mouseenter(function() {
    $(this).stop().animate({top: "+5px"},"fast");
    $('.current-header-button').stop().animate({top: "0px"}, "fast");
  })
  $('.header-button').mouseleave(function() {
    $(this).stop().animate({top: "0px"}, "fast");
    $('.current-header-button').stop().animate({top: "+5px"}, "fast");
  })
});
