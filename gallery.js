$(document).ready(function(){
    var slides = $(".image");
    var slideIndex = 0;
    var slide = "";
    
    slides.hide();
    slides.first().show();

    slide = slides[slideIndex];
    
    $(".next").click(function(){
        $(slide).hide();
        slideIndex++;
        if (slideIndex > 2) {
            slideIndex = 1;
        }

        slide = slides[slideIndex]
        $(slide).show();

    });
    
    $(".previous").click(function(){
        $(slide).hide();
        slideIndex--;
       if (slideIndex < 0) {
            slideIndex = 3;
      }

      slide = slides[slideIndex];
      $(slide).show();
      
    });
});
