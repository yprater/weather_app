# Yuri's Weather Forecast App

## Overview

Welcome to Yuri's Weather Forecast App! My name is Yuri and I'm a QA professional searching for his next role after being laid off by my previous employer on August 1st, 2023. This app was created to showcase my experience writing API test and using JavaScript, HTML and CSS. This simple web application allows users to get current weather information for a specific city. It's a great way to check your weather coniditons before planning your day.

## How it Works

1. **Enter City:** Type the name of a city in the input field provided (e.g., "Seattle").

2. **Click Button:** Click the button next to the field to fetch current weather data entered for the city.

3. **Weather Display:** The weather information, including the city name, temperature in Celsius, and weather description, will be displayed below the input field.

## Running the App Locally

To run the app on your local machine, follow these steps:

1. **Clone the Repository:** Clone this repository to your local machine using the following command: git clone https://github.com/yprater/weather_app.git

2. **Open the App:** Navigate to the repository directory on your local machine and open the `index.html` file in a web browser.

3. **Get Your API Key:** You'll need an API key to fetch weather data. Visit [OpenWeatherMap](https://openweathermap.org/) to sign up and obtain a free API key.

4. **Configure API Key:** In the `script.js` file, replace `config.apiKey` with your actual OpenWeatherMap API key.

5. **Run the App with a Local Web Server:** Due to CORS restrictions, you'll need to run the app using a local web server. You can do so by either:

    - **Using Python (Python 3):**  If you have Python 3 installed, you can start a local web server by running the following command in the repository directory: `python -m http.server`

    - **Using Node.js(http-server):** If you prefer Node.js, you can use the http-server package. Install it globally using npm (Node Package Manager): `npm install -g http-server`. Then, run the following command in the repository directory to start the local server:`http-server`     

6. **Run the App:** Open your web browser and navigate to http://localhost:8000 (or the port specified if you used a different port) to access the app served by the local web server. You can now use the app to check the weather for different cities without encountering CORS issues.

## Note

Please keep in mind that this app uses data from the OpenWeatherMap API. Be mindful of API usage limits and respect their terms of use.

Feel free to explore and share this app. If you encounter any issues or have suggestions for improvements, please let me know!

Enjoy checking the weather with Yuri's Weather Forecast App! ☀️