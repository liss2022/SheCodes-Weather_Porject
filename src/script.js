let now = new Date();
let h1 = document.querySelector("h1");

let hours = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let days = weekDays[now.getDay()];

h1.innerHTML = `${days} ${hours}:${minutes}`;

function cities(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#enter-city-input");

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;

  console.log(searchInput.value);
  let metricUnit = "metric";
  let apiKey = "647c7f64d4d8e2cb344d1165b1ce2c4e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}`;
  axios.get(`${apiUrl}&appid=${apiKey}&units=${metricUnit}`).then(showWeather);
}

function showWeather(response) {
  console.log(response);
  console.log(response.data.main.temp)

  let p = document.querySelector("#cityTemp");
  p.innerHTML = `${response.data.main.temp} °c`;
}

let searchEngine = document.querySelector("#enter-city-form");
searchEngine.addEventListener("submit", cities);

function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getPosition);
}

function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiKey = "647c7f64d4d8e2cb344d1165b1ce2c4e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);

  let p = document.querySelector("#cityTemp");
  p.innerHTML = response.data.main.temp;


  
}
let currentButton = document.querySelector("#location");
currentButton.addEventListener("click", currentLocation);