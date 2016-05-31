var main = function() {
  var activeTab = $('.Tab').first();
  activeTab.addClass('ActiveTab').removeClass('Tab');
  $('.Tab').click(function () {
  });
};
$(document).ready(main);
