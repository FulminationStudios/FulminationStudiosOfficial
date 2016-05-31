var main = function() {
  $('.Tab').first().addClass('ActiveTab');
  $('.Tab').first().removeClass('Tab');
  $('.Tab').click(function () {
    $(this).addClass('activeTab');
    $(this).removeClass('Tab');
  });
};
$(document).ready(main);
