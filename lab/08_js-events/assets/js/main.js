
console.log("hello world!");

//doc element
console.dir (document);
console.log (document.body);

//accessing div via selector
var debtDiv = document.querySelector('.debt')
console.log(debtDiv);
var myDebt=200;
debtDiv.innerText = 'My Student debt is $' + myDebt;

//listen to button event

var button = document.querySelector ('button')
button.addEventListener('click', function () {
console.log ('i\'ve been clicked!');
myDebt += 100
debtDiv.innerText = 'My Student debt is $' + myDebt;
})

//click to change style
var block1 = document.querySelector('.block-1')
var blocks = document.querySelectorAll('.block')
block1.addEventListener('click', function () {
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = 'pink'
  }

})

var block2 = document.querySelector('.block-2')
var block2isActive = false
block2.addEventListener ('click', function () {
  if (block2isActive) {
 block2.classList.add('is-active')
} else {
  block2classList.remove ('is-active')
}
block2isActive = !block2isActive
})

//window event addEventListener
window.addEventListener ('click', function (event){
  var dot = document.createElement ('div')
  dot.classList.add ('dot')
  dot.style.top = event.pageY + 'px'
  dot.style.left = event.pageX + 'px'

  document.body.appendChild(dot)
})




  console.log( 'block 1 has been clicked')


  ///////////


  
