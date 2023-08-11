export function getWeather() {
    const apiKey = 'YOUR_API_KEY';
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch weather data for ${city}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.cod !== 200) {
            throw new Error(data.message);
        }
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <div id="mapid" style="height: 300px;"></div>
        `;
        const map = L.map('mapid', {
            height: '100%',
            width: '100%',
        }).setView([data.coord.lat, data.coord.lon], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(map);
        L.marker([data.coord.lat, data.coord.lon]).addTo(map);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}
