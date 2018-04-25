
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
var showIds = [1371, 1850, 6393, 1825, 35144, 30416, 18198];
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
            console.log(jsonData);
        });


// Insert your actual API request URL below
fetch('https://api.tvmaze.com/shows/' + showId + '/episodesbydate?date=' + dateString)
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
    });

var nameSpan = document.querySelector('.name');
var summarySpan = document.querySelector('.summary')
var channelSpan = document.querySelector('.channel')
var timeSpan = document.querySelector('.time')
var originalSpan = document.querySelector('.original')
function render(data) {

//log the data in its entiertey
console.log(data);

//log the current temp
console.log(data.name);

//insert temp
nameSpan.innerText=data.name

//log wind windSpeed
console.log (data.summary)

//insert temp
summarySpan.innerText=data.summary

console.log (data.network.name)

//insert temp
channelSpan.innerText=data.network.name

console.log (data.schedule.time)

//insert temp
timeSpan.innerText=data.schedule.time

console.log (data.image.original)

//insert temp
originalSpan.innterText=data.image.original

}
