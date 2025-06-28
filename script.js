const button = document.querySelector('.btn');
const cityInput = document.querySelector('.weather-app .search .search-input');
const temp = document.querySelector('.temp h1');
const feel = document.querySelector('.feel h1');
const wind = document.querySelector('.wind h1');
const humi = document.querySelector('.humidity h1');

button.addEventListener('click', function() {
  const cityName = cityInput.value;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7471e6bd59ae834e5364a782d4a53bde&units=metric`)
  .then(function (response) {
    console.log(response);
    feel.textContent = "Feels Like: " + response.data.main.feels_like + " °C";
    temp.textContent = "Actual Temperature: " + response.data.main.temp + " °C";
    wind.textContent = "Wind Speed: " + response.data.wind.speed + " km/hr";
    humi.textContent = "Humidity: " + response.data.main.humidity + " %";
  })
  .catch(function (error) {
    console.log(error);
    temp.textContent = "Error!";
    feel.textContent = "Error!";
    wind.textContent = "Error!";
    humi.textContent = "Error!";
  });
});