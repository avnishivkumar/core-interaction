var container = document.querySelector('.container2')

var counter = 0;
var images = ['assets/media/static.gif', 'assets/media/static1.gif', 'assets/media/static2.gif',]


window.addEventListener('mousemove', function() {
	counter++
	if (counter % 50 === 0) {
		var images = document.createElement('stat')
		images.classList.add('static')
		container.appendChild(images)
		images.style.top = Math.random() * 600 + 'px'
		images.style.left = Math.random() * 800 + 'px'
    images.style.opacity = Math.random() * 0.7 + ''
    images.style.height =  400 + 'px'
  images.style.width = 800 + 'px'
 //images.style.transform ='scale(' + Math.random() * 0.7 + ')rotate(' + Math.random() * 360 + 'deg)'


		images.src = images[ Math.round( Math.random() * 2) ]
	}
''
})
