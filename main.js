var main = function() {
  $('.Tab').click(function () {
    $(this).removeClass('Tab');
    $(this).addClass('ActiveTab');
  });
};
$(document).ready(main);
