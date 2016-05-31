var main = function() {
  hidePages();
  $('.HomePage').show();
  $('.Tab').first().addClass('ActiveTab');
  $('.Tab').click(function () {
    $(this).addClass('ActiveTab');
    $(this).siblings().removeClass('ActiveTab');
    hidePages();
    if ($(this).hasClass('HomeTab')) {
      $('.HomePage').show();
    } else if ($(this).hasClass('NewsTab')) {
      $('.NewsPage').show();
    } else if ($(this).hasClass('ProjectsTab')) {
      $('.ProjectsPage').show();
    } else if ($(this).hasClass('AboutTab')) {
      $('.AboutPage').show();
    } else if ($(this).hasClass('BlogTab')) {
      $('.BlogPage').show();
    }
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
