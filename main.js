var main = function() {
  var activeTab = $('.Tab').first();
  activeTab.addClass('ActiveTab');
  activeTab.removeClass('Tab');
  $('.Tab').click(function () {
    activeTab = $(this);
  });
};
$(document).ready(main);
