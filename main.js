var main = function() {
  hidePages();
  $('.Tab').first().addClass('ActiveTab');
  $('.Tab').click(function () {
    $(this).addClass('ActiveTab');
    $(this).siblings().removeClass('ActiveTab')
    if ($(this).hasClass('HomePage'))
  });
};
var hidePages = function() {
  $('.HomePage').hide();
  $('.NewsPage').hide();
  $('.ProjectsPage').hide();
  $('.AboutPage').hide();
  $('.BlogPage').hide();
}
$(document).ready(main);
