export function getWeather() {
    const apiKey = 'YOUR_API_KEY';
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then (response => {
            if (!response.ok) {
                throw new Error('Failed to fetch weather data for ${city}');
            }
            return response.json();
        })
        .then (data => {
            if (data.cod !== 200) {
                throw new Error(data.message);
            }
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}