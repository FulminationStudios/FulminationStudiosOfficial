var main = function() {
  $('.Tab').first().addClass('ActiveTab');
  $('.Tab').click(function () {
    $(this).addClass('ActiveTab');
    $(this).sibling().removeClass('ActiveTab')
  });
};
$(document).ready(main);
