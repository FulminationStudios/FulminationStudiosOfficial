var main = function() {
  $('.Tab').click(function () {
    $(this).toggleClass('ActiveTab');
  });
};
$(document).ready(main);
