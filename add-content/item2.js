$(document).ready(function() {
  let docHeight = $(document).height(),
    windowHeight = $(window).height(),
    scrollPercent;

  $(window).scroll(function() {
    scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 100;

    $('.scroll-progress').width(scrollPercent + '%');
  });
});
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})