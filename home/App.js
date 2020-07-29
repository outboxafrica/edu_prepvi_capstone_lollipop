var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}



// navbar togol hide and show mobile view
document.querySelector(".baga").onclick = function(){
  //     // var f = document.querySelector(".breakfast");
  var h = document.querySelector(".navbar");
      if (h.style.display === "none") {
                h.style.display = "block";
  
              } else {
                h.style.display = "none";
              }
  };