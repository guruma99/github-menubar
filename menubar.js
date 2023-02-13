$(".user").on("click", function(){
  if($(".menu").hasClass('on')) {
    $(".menu").removeClass('on');
    $(".dropdown-caret").removeClass('on');
  } else {
    $(".menu").addClass('on');
    $(".dropdown-caret").addClass('on');
  }
});