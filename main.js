var main = function() {
  $('.Tab').click(function () {
    $(this).addClass('activeTab');
    $(this).removeClass('Tab');
  });
};
$(document).ready(main);
