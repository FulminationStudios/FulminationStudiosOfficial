var main = function() {
  $('.Tab').click(function () {
    $(this).addClass('ActiveTab');
  });
};
$(document).ready(main);
