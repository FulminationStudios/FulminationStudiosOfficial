var main = function() {
  
  $('.Tab').click(function () {
    $(this).addClass('ActiveTab');
    $(this).siblings().removeClass('ActiveTab').addClass('Tab');
  });
};
$(document).ready(main);
