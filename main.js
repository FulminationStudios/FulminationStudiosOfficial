var main = function() {
  $('.Tab').first().addClass('ActiveTab');
  $('.Tab').first().removeClass('Tab');
  $('.Tab').click(function () {
    $('.ActiveTab').addClass('Tab');
    $('.ActiveTab').removeClass('ActiveTab');
    $(this).removeClass('Tab');
    $(this).addClass('ActiveTab');
  });
};
$(document).ready(main);
