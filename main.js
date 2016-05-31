var main = function() {
  var activeTab = $('.Tab').first();
  activeTab.addClass('ActiveTab');
  $('.Tab').click(function () {
    $(this).addClass('ActiveTab');
    $(this).removeClass('Tab');
  });
};
$(document).ready(main);
