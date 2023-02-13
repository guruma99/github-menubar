// $(".user").on("click", function(){
//   if($(".menu").hasClass('on')) {
//     $(".menu").removeClass('on');
//     $(".dropdown-caret").removeClass('on');
//   } else {
//     $(".menu").addClass('on');
//     $(".dropdown-caret").addClass('on');
//   }
// });

document.querySelector(".user").addEventListener('click', function(){
  document.querySelector(".menu").classList.toggle("on");
  document.querySelector(".dropdown-caret").classList.toggle("on");
});

