const apiKey = 'YOUR_API_KEY_HERE';
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weather = document.getElementById('weather');

// Fetch weather data
async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === 200) {
      cityName.textContent = data.name;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      weather.textContent = `Weather: ${data.weather[0].description}`;
    } else {
      cityName.textContent = 'City not found';
      temperature.textContent = '';
      weather.textContent = '';
    }
  } catch (error) {
    cityName.textContent = 'Error fetching data';
    temperature.textContent = '';
    weather.textContent = '';
  }
}

// Event listener
searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeather(city);
  }
});
