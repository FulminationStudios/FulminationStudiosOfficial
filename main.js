var main = function() {
  var activeTab = $('.Tab').first();
  activeTab.addClass('ActiveTab');
  activeTab.removeClass('Tab');
  $('.Tab').click(function () {
    activeTab = $(this);
    $('.Tab').removeClass('ActiveTab');
  });
};
$(document).ready(main);
