var container = document.querySelector('.container1')

var counter = 0;
var images = ['assets/media/snl1.png', 'assets/media/snl5.png', 'assets/media/snl6.png', 'assets/media/snl5.png']


window.addEventListener('mousemove', function() {
	counter++
	if (counter % 100 === 0) {
		var image = document.createElement('img')
		image.classList.add('image')
		container.appendChild(image)
		image.style.top = Math.random() * 1000 + 'px'
		image.style.left = Math.random() * 1000 + 'px'
    image.style.opacity = Math.random() * 0.7 + ''
    //image.style.height = Math.random() * 1000 + 'px'
  //  image.style.width = Math.random() * 1000 + 'px'
 image.style.transform = 'scale(' + Math.random() + ')'
 image.style.transform = 'rotate(' + Math.random() * 360 + 'deg)'
		image.src = images[ Math.round( Math.random() * 2) ]
	}
''
})
