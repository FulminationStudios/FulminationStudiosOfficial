var main = function() {
  $('.Tab').click(function () {
    $(this).addClass('ActiveTab');
    $(this).removeClass('Tab');
  });
};
$(document).ready(main);
