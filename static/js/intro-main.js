jQuery('.at-banner__close').on('click', function() {
  jQuery(this).parent().remove();
});

jQuery('.at-banner__button-close').on('click', function() {
  jQuery(this).parent().remove();
});

$('.at-banner').hide();
$(document).scroll(function() {
    if ($(document).scrollTop() >= 9400) {
     $('.at-banner').show();   
    }
    else {
        $('.at-banner').hide();
    }
});