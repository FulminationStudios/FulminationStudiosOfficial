var main = function() {
  
  $('.ActiveTab').click(function () {
    $(this).siblings().addClass('ActiveTab');
  });
};
$(document).ready(main);
