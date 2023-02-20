$(document).ready(function() {
  var itemsToShow = 3;
  var itemsToHide = $('.works-item').length - itemsToShow;

  $('.works-item:gt(' + (itemsToShow - 1) + ')').hide();

  $('#show-more-link').click(function() {
    $('.works-item:visible:last').nextAll(':lt(' + itemsToShow + ')').fadeIn();
    if ($('.works-item:hidden').length === 0) {
      $('#show-more-link').hide();
    }
  });
});