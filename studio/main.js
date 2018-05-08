
////////

$(document).bind('mousemove', function(e){
//  console.log(e.pageX);
    $('#follower').css({
      left:  e.pageX +560,
      top:   e.pageY+200,

    });
});

$(document).bind('mousemove', function(e){
//  console.log(e.pageX);
    $('#follower2').css({
       left:  e.pageX - 600,
       top:   e.pageY -750,

    });

    $(document).bind('mousemove', function(e){
//  console.log(e.pageX);
    $('#follower3').css({
      left:  e.pageX +100,
      top:   e.pageY -30,
    });
});

});
$(document).bind('mousemove', function(e){
//  console.log(e.pageX);
    $('#follower4').css({
       left:  e.pageX + 100,
       top:   e.pageY+200
    });
});

$(document).bind('mousemove', function(e){
//  console.log(e.pageX);
    $('#follower5').css({
       left:  e.pageX + 1000,
       top:   e.pageY+1000,
    });
});


$(document).on('mousemove', function(e) {
    $('#follower5').css({
      left:  e.pageX -500,
      top:   e.pageY -400,
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
      left:  e.pageX -300,
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

$(document).on('mousemove', function(e) {
    $('#follower11').css({
      left:  e.pageX +300,
      top:   e.pageY -100,
        width: '+=5px',
        height: '+=5px'
    });
});

function map (num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


var mouseX = 0, mouseY = 0, limitX = 40-15, limitY = 40-15;
$(window).mousemove(function(e){
   mouseX = Math.min(e.pageX, limitX);
   mouseY = Math.min(e.pageY, limitY);
});


var follower = $("#cover4");
var xp = 100, yp = 1000;
$(document).on('mousemove', function(e) {

//map(num, 0, 10, -50, 50)
//70,15
var newX = map(e.pageX, 0, $(window).width(), 45, 95)
var newY = map(e.pageY, 0, $(window).height(), -10, 40)
//40, -10
// follower.css({left: })

    // xp += (mouseX - xp) / 1;
    // yp += (mouseY - yp) / 1;
    // console.log(limitX)
    follower.css({left:newX, top:newY});

});




$(window).on('orientationchange', function(event) {
  //alert(event.aplha)

  $('#deviceorientation').text(event.alpha)
    $('#follower10').css({
      left:  event.alpha +10
    });
    $('#follower7').css({
      left:  event.alpha + 40
    });
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

      $( function() {
          $( ".original" ).draggable();
        } );



      // HELPER FUNCTION: function to pad numbers
      Number.prototype.pad = function(size) {
          var s = String(this);
          while (s.length < (size || 2)) {s = "0" + s;}
        	return s;
      }

      // get todays date
      var date = new Date();
      var day = date.getDay();
      var dateString = date.getFullYear() + '-' + (date.getMonth() + 1).pad(2) + '-' + date.getDate().pad(2);

      // Shows: sun, mon, tues, wed, thurs, fri, sat
      var showIds = [49, 1850, 58, 1825, 1864, 30416, 18198];
      var showId = showIds[day];

      // Get Show ID for today
      fetch('https://api.tvmaze.com/shows/' + showId)
          .then(function(response) {
              // Get the response and format it to JSON
              return response.json();
          })
          .then(function(jsonData) {
              // log the data
                  render(jsonData);
                //  console.log(jsonData);
              });


      // Insert your actual API request URL below
      fetch('https://api.tvmaze.com/shows/' + showId + '/episodesbydate?date=' + dateString)
          .then(function(response) {
              // Get the response and format it to JSON
              return response.json();
          })
          .then(function(jsonData) {
              // log the data
              //render(jsonData);
          //    console.log(jsonData);
          });

          var originalHome = document.querySelector('.originalhome')

          function render(data) {
            originalHome.src=data.image.original }   ;



            var images = ['bm.jpg', 'batesmotel.jpg', 'castle.jpg'];

            $('#follower5').css({'background-image': 'url(https://avnishivkumar.github.io/core-interaction/studio/assets/media/' + images[Math.floor(Math.random() * images.length)] + ')'});
            var images = ['100.jpg', 'fa3.jpg', 'fa11.jpg'];

            $('#follower9').css({'background-image': 'url(https://avnishivkumar.github.io/core-interaction/studio/assets/media/' + images[Math.floor(Math.random() * images.length)] + ')'});
            var images = ['fa14.jpg', 'feud.jpg', 'legion.jpg'];

            $('#follower10').css({'background-image': 'url(https://avnishivkumar.github.io/core-interaction/studio/assets/media/' + images[Math.floor(Math.random() * images.length)] + ')'});
            var images = ['p3.jpg', 'p7.jpg', 'p14.jpg'];
