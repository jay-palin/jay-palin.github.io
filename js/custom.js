$(document).ready(function(){
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });
  $(document).on('click', '.navButton', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
  });
});
