document.getElementById('getWeatherBtn').addEventListener('click', fetchWeather)
function fetchWeather(){
    const location = document.getElementById('location').value;
    const apiKey = "9617f0c32599439b623e173d942b9f24";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response =>{
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data =>{
        displayWeather(data)
    })
    .catch(error => {
            console.error('Fail to load weather data:', error);
        });
}

function displayWeather(data) {
    const weatherData = document.getElementById('weatherData');
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherData.innerHTML = `
        <h2 class="weather-col">${data.name}, ${data.sys.country}</h2>
        <img src="${iconUrl}">
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Visibility: ${data.visibility} </p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}