var m = document.getElementsByClassName('move');
m.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseUp() {
    window.removeEventListener('mousemove', move, true);
}

function mouseDown(e) {
    window.addEventListener('mousemove', move, true);
}

function move(e) {
    m.style.top = e.clientY + 'px';
    m.style.left = e.clientX + 'px';
};

////////

$(document).bind('mousemove', function(e){
  console.log(e.pageX);
    $('#follower').css({
       left:  e.pageX,
       top:   e.pageY,
    });
});

$(document).bind('mousemove', function(e){
  console.log(e.pageX);
    $('#follower2').css({
       left:  e.pageX + 100,
       top:   e.pageY
    });

    $(document).bind('mousemove', function(e){
  console.log(e.pageX);
    $('#follower3').css({
       left:  e.pageX + 0,
       top:   e.pageY+80
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
       left:  e.pageX + 100,
       top:   e.pageY+80
    });
});
