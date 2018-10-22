$( document ).ready(function() {
    console.log( "working!" );
});

$(document).mousemove(function(e) {
  $('.mousemove_rotate').css('transform', 'rotateX(0deg) rotateY(0deg)');

  var rotate_X;
  var rotate_Y;
  var invert = false;

  if (invert) {
    rotate_X = e.pageX;
    rotate_Y = e.pageY;
  } else if (!invert) {
    rotate_X = e.pageX;
    rotate_Y = -e.pageY;
  }

  $('#logo').css('transform', 'rotateX(' + rotate_Y + 'deg) rotateY(' + rotate_X + 'deg)')
});
