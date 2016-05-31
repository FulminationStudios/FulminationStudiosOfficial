var main = function() {
  
  $('.Tab').click(function () {
    $(this).addClass('ActiveTab');
    $(this).parent().children().removeClass('ActiveTab').addClass('Tab');
  });
};
$(document).ready(main);
