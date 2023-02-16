$(document).ready(function() {
  // hide all items except the first 3 by default
  $('.works-item:gt(2)').hide();

  // add click event listener to show more link
  $('#show-more-link').click(function(e) {
    e.preventDefault(); // prevent default link behavior
    // show the next 3 hidden items
    $('.works-item:hidden:lt(3)').show();
    // if all items are now shown, hide the "show more" link
    if ($('.works-item:hidden').length === 0) {
      $('#show-more-link').hide();
    }
  });

  // add click event listener to scroll to 6 link
  $('#scroll-to-6-link').click(function(e) {
    e.preventDefault(); // prevent default link behavior
    // show the first 6 items if they are hidden
    $('.works-item:lt(6):hidden').show();
    // scroll to the last shown item
    $('html, body').animate({
      scrollTop: $('.works-item:visible:last').offset().top
    }, 500);
  });

  // add click event listener to scroll to 7 link
  $('#scrollTo7').click(function(e) {
    e.preventDefault(); // prevent default link behavior
    // show the first 7 items if they are hidden
    $('.works-item:lt(7):hidden').show();
    // scroll to the last shown item
    $('html, body').animate({
      scrollTop: $('.works-item:visible:last').offset().top
    }, 500);
  });
});