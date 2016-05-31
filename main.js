var main = function() {
  var activeTab;
  activeTab.addClass('ActiveTab').removeClass('Tab');
  otherTab.first() = ActiveTab;
  var otherTab = $('.Tab');
  otherTab.addClass('Tab').removeClass('ActiveTab');
  otherTab.click(function () {
    activeTab = otherTab;
    $(this) = activeTab;
  });
};
$(document).ready(main);
