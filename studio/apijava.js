
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
var showIds = [299, 1850, 58, 1825, 2415, 2488, 37546];
var showId = showIds[day];

// Get Show ID for today
fetch('https://api.tvmaze.com/shows/' + showId)
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
            renderShow(jsonData);
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
        renderEpisode(jsonData);
        console.log(jsonData);
    });

var nameSpan = document.querySelector('.name');
var summarySpan = document.querySelector('.summary')
var channelSpan = document.querySelector('.channel')
var timeSpan = document.querySelector('.time')
var originalSpan = document.querySelector('.original')
var airSpan = document.querySelector('.air')
var originalHome = document.querySelector('.originalhome')
var epinameSpan = document.querySelector('.epinamespan')
var dropdownContent1 = document.querySelector('.dropdown-content1')
var dropdownContent3 = document.querySelector('.dropdown-content3')
var dropdownContent2 = document.querySelector('.dropdown-content2')
var episumSpan = document.querySelector('.episumspan')
var episeasonSpan = document.querySelector('.episeasonspan')
var epinoSpan = document.querySelector('.epinospan')



//var htag = document.querySelector('h109')
function renderShow(data) {

  //log the data in its entiertey
  console.log(data);

  //log the current temp
  console.log(data.name);

  //insert temp
  nameSpan.innerText=data.name

  //log wind windSpeed
  console.log (data.summary)

  //insert temp
  summarySpan.innerHTML=data.summary

  console.log (data.network.name)

  //insert temp
  channelSpan.innerText=data.network.name

  console.log (data.schedule.time)

  //insert temp
  timeSpan.innerText=data.schedule.time



  console.log (data.image.original)


  //document.body.style.backgroundColor = 'hsl('+ data.rating.average * data.rating.average * data.rating.average * data.rating.average +',50%,50%)'
  nameSpan.style.fontSize = (30 * data.rating.average) +'px'
  dropdownContent1.style.backgroundColor = 'hsl('+ data.rating.average * data.rating.average * data.rating.average * data.rating.average +',50%,50%)'
  dropdownContent3.style.backgroundColor = 'hsl('+ data.rating.average * data.rating.average * data.rating.average * data.rating.average +',50%,50%)'
  dropdownContent2.style.backgroundColor = 'hsl('+ data.rating.average * data.rating.average * data.rating.average * data.rating.average +',50%,50%)'
  nameSpan.style.color = 'hsl('+ data.rating.average * data.rating.average * data.rating.average * data.rating.average +',50%,50%)'
  document.body.style.color = 'hsl('+ data.rating.average * data.rating.average * data.rating.average * data.rating.average +',50%,50%)'








  //insert temp
  originalSpan.src=data.image.original

  //originalSpan.transition=data.runtime

  //set animation duration of weather vane based on wind windSpeed

  originalSpan.style.animationDuration = data.runtime / 10 + 's'

}


//var htag = document.querySelector('h109')
//var htag = document.querySelector('h109')
function renderEpisode(data) {

  //log the data in its entiertey
  console.log(data);

  //log the current temp
  console.log(data["0"].name);

  //insert temp
  epinameSpan.innerText= data["0"].name
    episeasonSpan.innerText= data["0"].season
      epinoSpan.innerText= data["0"].number
        episumSpan.innerHTML= data["0"].summary
}
