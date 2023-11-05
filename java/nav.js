let who = document.querySelector(".who-us");
let header = document.querySelector("header");
let what = document.querySelector(".what-us");
let serv = document.querySelector(".services");

window.onscroll = function () {
    
 
    if (window.scrollY >= header.offsetTop - 100) {
        who.style.opacity = who.dataset.opacity; 

    }
    if (window.scrollY >= who.offsetTop + 100) {
        what.style.left = what.dataset.left; 

    }
    if (window.scrollY >= what.offsetTop + 100) {
        serv.style.opacity = serv.dataset.opacity; 

    }
}

window.onload = function () {
    
 
    if (window.scrollY >= header.offsetTop ) {
        who.style.opacity = who.dataset.opacity; 

    }
}





$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 900) {
      $(".nav").css("transition" , "1s");

	    $(".nav").css("background" , "rgba(236, 224, 211)");
        $(".nav a").css("color" , "rgb(3, 27 , 63)");
      $(".nav").css("width" , "100%");

	  }

	  else{
		  $(".nav").css("background" , "transparent");  	
	  }
  })
})


const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);






document.addEventListener("DOMContentLoaded", function() {
  // تحديد مؤشر الصورة الحالية
  var currentIndex = 0;

  // احصل على جميع الصور
  var carouselItems = document.querySelectorAll(".carousel-item");

  // تحديد الزر "التالي" و "السابق"
  var nextButton = document.querySelector(".carousel-control-next");
  var prevButton = document.querySelector(".carousel-control-prev");

  // دالة لعرض الصورة التالية
  function showNextImage() {
    // إخفاء الصورة الحالية
    carouselItems[currentIndex].classList.remove("active");

    // زيادة المؤشر بواحد والتحقق من الحد الأقصى
    currentIndex = (currentIndex + 1) % carouselItems.length;

    // عرض الصورة الجديدة
    carouselItems[currentIndex].classList.add("active");
  }

  // دالة لعرض الصورة السابقة
  function showPrevImage() {
    // إخفاء الصورة الحالية
    carouselItems[currentIndex].classList.remove("active");

    // تقليل المؤشر بواحد والتحقق من الحد الأدنى
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;

    // عرض الصورة الجديدة
    carouselItems[currentIndex].classList.add("active");
  }



  // تحديد وقت التأخير لتغيير الصور تلقائيًا (بالميلي ثانية)
  var interval = 3000;

  // التغيير التلقائي للصور بعد فترة زمنية محددة
  setInterval(showNextImage, interval);
});



