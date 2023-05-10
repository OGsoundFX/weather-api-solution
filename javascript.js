// console.log("Hello World from the javascript.js file")

const url = "https://api.openweathermap.org/data/2.5/weather?lat=52.5200&lon=13.4050&appid=7b825c772cf3f2fbc4bb4a0673806a36"

fetch(url)
  .then(response => response.json())
  .then((data) => {
    // console.log(data)
    const weather = {
      "name": data.name,
      "description": data.weather[0].description,
      "temperature": (parseInt(data.main.temp - 273)),
      "icon": data.weather[0].icon
    }
    display(weather)
  })

const cityName = document.getElementById("city")
const description = document.getElementById("description")
const temperature = document.getElementById("temperature")
const icon = document.getElementById("icon")
const date = document.getElementById("date")

const display = (city) => {
  cityName.innerText = city.name
  description.innerText = city.description
  temperature.innerText = city.temperature
  icon.src = `https://openweathermap.org/img/w/${city.icon}.png`
  date.innerText = new Date().toDateString()
}
