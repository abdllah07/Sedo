
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
      $(".nav").css("transition" , "1s");

	  $(".nav").css("background" , "rgba(168,134,111)");
      $(".nav").css("width" , "100%");

	}

	else{
		$(".nav").css("background" , "transparent");  	
	}
  })
})



  
$(function () {
  $("#nav-icon").click(function () {
    $(".nav").css("background-color", "rgba(168,134,111)");

  });
});
