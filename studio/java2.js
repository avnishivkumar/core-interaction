var container = document.querySelector('.container2')

var counter = 0;
var images = ['assets/media/static.gif', 'assets/media/static1.gif', 'assets/media/static2.gif',]


window.addEventListener('mousemove', function() {
	counter++
	if (counter % 20 === 0) {
		var image = document.createElement('img')
		image.classList.add('static')
		container.appendChild(image)
		image.style.top = Math.random() * 600 + 'px'
		image.style.left = Math.random() * 800 + 'px'
    image.style.opacity = Math.random() * 0.7 + ''
    image.style.height =  400 + 'px'
  image.style.width = 800 + 'px'
 //images.style.transform ='scale(' + Math.random() * 0.7 + ')rotate(' + Math.random() * 360 + 'deg)'


		image.src = images[ Math.round( Math.random() * 2) ]
	}
''
})
