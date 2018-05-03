var container = document.querySelector('.container1')

var counter = 0;
var images = ['assets/media/snl1.png', 'assets/media/snl5.png', 'assets/media/snl6.png', 'assets/media/snl5.png']


window.addEventListener('mousemove', function() {
	counter++
	if (counter % 30 === 0) {
		var image = document.createElement('img')
		image.classList.add('image')
		container.appendChild(image)
		image.style.top = Math.random() * 600 + 'px'
		image.style.left = Math.random() * 800 + 'px'
    image.style.opacity = Math.random() * 0.7 + ''
    //image.style.height =  400 + 'px'
  //image.style.width = 800 + 'px'
 image.style.transform ='scale(' + Math.random() * 0.7 + ')rotate(' + Math.random() * 360 + 'deg)'


		image.src = images[ Math.round( Math.random() * 2) ]
	}
''
})
