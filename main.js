var main = function() {
  var activeTab = $('.Tab').first();
  activeTab.setClass('ActiveTab');
  $('.Tab').click(function () {
    activeTab = $(this);
  });
};
$(document).ready(main);
