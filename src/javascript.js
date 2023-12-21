function RunTodayTime(dateNow) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[dateNow.getDay()];
  let hour = dateNow.getHours();
  let minute = dateNow.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  return `${day} ${hour}:${minute}`;
}

function updateCityTemp(response) {
  let currentMainTemp = Math.round(response.data.temperature.current);
  let updateMainTemp = document.querySelector("#main-temp");
  updateMainTemp.innerHTML = currentMainTemp;

  let typeCityEnter = response.data.city;
  if (typeCityEnter.length > 2) {
    let newCity = document.querySelector("h1");
    newCity.innerHTML = typeCityEnter;
  } else {
    alert("Please enter a valid city name");
  }
}

function searchCity(event) {
  event.preventDefault();

  let typeCity = document.querySelector("#search-box");
  let typeCityValue = typeCity.value;
  let apiKey = "143af7fd5b08cab06a8bf5bo4f3btde9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${typeCityValue}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(updateCityTemp);
}

let timeToday = document.querySelector("#time-today");
let now = new Date();
timeToday.innerHTML = RunTodayTime(now);

let city = document.querySelector("#search-city");
city.addEventListener("submit", searchCity);
