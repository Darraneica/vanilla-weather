//function for time

function displayTime(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

//function for displaying weather, temperature, and conditions
function displayWeather(response) {
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#conditions");
  let dateElement = document.querySelector("#date");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  console.log(response);
  descriptionElement.innerHTML = response.data.weather[0].description;
  dateElement.innerHTML = displayTime(response.data.dt * 1000);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "111a1c0ab68d74f7b1599be07028366e";
let city = "Meraux";
let units = "Metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}`;

axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeather);
