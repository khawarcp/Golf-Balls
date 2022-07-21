$(document).ready(function(){

  $(".menu-bar").click(function () {
    $(".navigation").toggleClass("display");
    $("body").toggleClass("overflow");
    $(this).toggleClass("active");
  });
})