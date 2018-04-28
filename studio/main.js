
////////

$(document).bind('mousemove', function(e){
  console.log(e.pageX);
    $('#follower').css({
      left:  e.pageX +560,
      top:   e.pageY+200,

    });
});

$(document).bind('mousemove', function(e){
  console.log(e.pageX);
    $('#follower2').css({
       left:  e.pageX - 600,
       top:   e.pageY -750,

    });

    $(document).bind('mousemove', function(e){
  console.log(e.pageX);
    $('#follower3').css({
      left:  e.pageX +100,
      top:   e.pageY -30,
    });
});

});
$(document).bind('mousemove', function(e){
  console.log(e.pageX);
    $('#follower4').css({
       left:  e.pageX + 100,
       top:   e.pageY+200
    });
});

$(document).bind('mousemove', function(e){
  console.log(e.pageX);
    $('#follower5').css({
       left:  e.pageX + 1000,
       top:   e.pageY+1000,
    });
});


$(document).on('mousemove', function(e) {
    $('#follower5').css({
      left:  e.pageX -300,
      top:   e.pageY -100,
        width: '+=5px',
        height: '+=5px'
    });
});

$(document).on('mousemove', function(e) {
    $('#follower6').css({
      left:  e.pageX -400,
      top:   e.pageY+200,
        width: '+=5px',
        height: '+=5px'
    });
});

$(document).on('mousemove', function(e) {
    $('#follower7').css({
      left:  e.pageX + 400,
      top:   e.pageY -300,
        width: '+=5px',
        height: '+=5px'
    });
});

$(document).on('mousemove', function(e) {
    $('#follower8').css({
      left:  e.pageX -400,
      top:   e.pageY -500,
        width: '+=5px',
        height: '+=5px'
    });
});
$(document).on('mousemove', function(e) {
    $('#follower9').css({
      left:  e.pageX +400,
      top:   e.pageY -300,
        width: '+=5px',
        height: '+=5px'
    });
});
$(document).on('mousemove', function(e) {
    $('#follower10').css({
      left:  e.pageX +100,
      top:   e.pageY -600,
        width: '+=5px',
        height: '+=5px'
    });
});

var mouseX = 0, mouseY = 0, limitX = 40-15, limitY = 40-15;
$(window).mousemove(function(e){
   mouseX = Math.min(e.pageX, limitX);
   mouseY = Math.min(e.pageY, limitY);
});


var follower = $("#cover4");
var xp = 100, yp = 1000;
$(document).on('mousemove', function(e) {

    xp += (mouseX - xp) / 1;
    yp += (mouseY - yp) / 1;
    follower.css({left:xp, top:yp});

});

// $(document).on('mousemove', function(e) {
//     $("#cover4").css({
//       left:  e.pageX -600,
//       top:   e.pageY - 420,
//         width: '+=5px',
//         height: '+=5px'
//     });
// });
// top: -100px;
// left: 120px;
$( function() {
    $( ".move" ).draggable();
  } );

  $( function() {
      $( ".floatleft" ).draggable();
    } );

    $( function() {
        $( ".floatright" ).draggable();
      } );

      
