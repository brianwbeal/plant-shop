$(document).ready(() => {

  // navigation
  // determine viewport width in pixels
  let viewportWidth = $(window).width();

  // for mobile display, hide the navigation links and only show the hamburger menu
  if (viewportWidth < 768) {
    $('nav').hide();
  }
  $(window).resize(() => {

    // when the window resizes, check viewport width to determine which menu to show
    viewportWidth = $(window).width();
    if (viewportWidth < 768) {
      $('nav').hide();
    } else {
      $('nav').show();
    }
  });

  // slide toggle navigation links on mobile when hamburger icon is clicked
  $('#header__nav--button').click(() => {
    $('nav').slideToggle();
  });


  // copyright
  // create new instance of the global Date object
  // and call the getFullYear() method on it
  const thisYear = (new Date()).getFullYear();

  // write current year value to document
  $('#currentYear').append(thisYear);
});
