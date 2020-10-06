$(document).ready(function(){
  $('.fa-chevron-up').click(function () {
        $('body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
