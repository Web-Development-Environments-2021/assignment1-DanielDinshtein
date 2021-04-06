var slideIndex = 1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}

$(function(){
  showSlides(slideIndex);
  $("nav a").click(function(e){
    e.preventDefault();
    elem = $(this).attr("href")
    $('html, body').animate({
        scrollTop: $(elem).offset().top - $("nav").height()
    }, 1000);
  });
  $(".emoji-container button").click(function(e){
      $("textarea").val($("textarea").val() + $(this).val()); 
  });
  $("#contact form").submit(function(e){
    e.preventDefault();
    name_elem = $(this).children("input[name='name']")
    email_elem = $(this).children("input[name='email']")
    body_elem = $(this).children("textarea[name='body']")
    subject = "New message from " + name_elem.val();
    body = "Email: " + email_elem.val() + "\nMessage:\n" + body_elem.val();
    document.location.href = $(this).attr("action") + "?subject=" + encodeURI(subject) + "&body=" + encodeURI(body);
  });
  $(".top-container").click(function(e){
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
  });
  $(document).scroll(function() {
    $('.top-container').toggle($(this).scrollTop()>0)
  });
});