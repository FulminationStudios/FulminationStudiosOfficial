var main = function() {
  $('.Tab').click(function () {
    $('.ActiveTab').addClass('Tab');
    $('.ActiveTab').removeClass('ActiveTab');
    $(this).removeClass('Tab');
    $(this).addClass('ActiveTab');
  });
};
$(document).ready(main);
