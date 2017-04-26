$(document).foundation();
$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 100){
    $('.top-bar').addClass("shrink");
    $('.top-bar').removeClass("base");
  }
  else{
    $('.top-bar').addClass("base");
    $('.top-bar').removeClass("shrink");
  }
});
