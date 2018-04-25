console.log('hello world')
// Insert your actual API request URL below
fetch('https://api.openweathermap.org/data/2.5/weather?zip=10009&APPID=a2e3b22435f68a410cf1681ee268cd47&units=metric')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        render(jsonData);
    });

    //render function setup
var tempSpan = document.querySelector('.temp')

var windSpeedSpan = document.querySelector('.windspeed')

var windDirSpan = document.querySelector('.winddirection')

var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper')

var weatherVane = document.querySelector('.weather-vane')

function render(data) {

//log the data in its entiertey
console.log(data);

//log the current temp
console.log(data.main.temp);

//insert temp
tempSpan.innerText=data.main.temp

//log wind windSpeed
console.log (data.wind.speed)

//insert temp
windSpeedSpan.innerText=data.wind.speed

console.log (data.wind.deg)
windDirSpan.innerText=data.wind.deg

//set bg colour based on temp
document.body.style.backgroundColor = 'hsl('+ data.wind.deg +',50%,50%)'


//ritate the weather weatherVane based on winf direction

weatherVaneWrapper.style.transform = 'rotate(' + data.wind.deg + 'deg)'

//set animation duration of weather vane based on wind windSpeed

weatherVane.style.animationDuration = 5 / data.wind.speed + 's'

}
