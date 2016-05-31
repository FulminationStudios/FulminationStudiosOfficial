var main = function() {
  $('.HomePage').show();
  $('.NewsPage').hide();
  $('.ProjectsPage').hide();
  $('.AboutPage').hide();
  $('.BlogPage').hide();
  $('.Tab').first().addClass('ActiveTab');
  $('.Tab').click(function () {
    $(this).addClass('ActiveTab');
    $(this).siblings().removeClass('ActiveTab')
  });
};
$(document).ready(main);
