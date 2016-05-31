var main = function() {
  $('.Tab').first().addClass('ActiveTab');
  $('.Tab').first().removeClass('Tab');
  $('.Tab').click(function () {
    $('.ActiveTab').addClass('Tab');
    $('.ActiveTab').removeClass('ActiveTab');
    $(this).addClass('ActiveTab');
    $(this).removeClass('Tab');
  });
};
$(document).ready(main);
