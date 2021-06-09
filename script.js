var weatherApiKey = "a16511f45dc81313f0cebd422a1505ad"
// get api info fetch
function getLocation(userInput) {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=${weatherApiKey}`, {
  "method": "GET"
})
  .then(response => {
    return response.json()
  })
  .then(function(data) {
    locationLat = data[0].lat
    locationLon = data[0].lon 
    console.log(locationLat, locationLon)
  })
}
// JSON so its readable, keys and values

// grab html elements which i want to change

// function to get weather data on input text
// current weather data api to get city lat/long
// one call api to get uv index and 7 day forecast
// optional: 5 day forecast one 

// function to set local storage for search history

// event listener on search
//// input text
//// use input text to call function to get data
//// set localstorage for search history
//// function to 
getLocation("Toronto")