$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
        $(".navbar").css("transition" , "0.5s");
  
          $(".navbar").css("background" , "rgb(3, 27 , 63)");
        $(".navbar").css("width" , "100%");
  
        }
  
        else{
            $(".navbar").css("background" , "transparent");  	
        }
    })
  })


  
$(function () {
  $("#nav-icon").click(function () {
    console.log("hi");
    $("nav").css("background-color", "rgb(3, 27 , 63)")

  });
});