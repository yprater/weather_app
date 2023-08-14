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

4. **Configure API Key:** In the `script.js` file, replace `YOUR_API_KEY` with your actual OpenWeatherMap API key.

5. **Run the App with a Local Web Server:** Due to CORS restrictions, you'll need to run the app using a local web server. You can do so by either:

    - **Using Python (Python 3):**  If you have Python 3 installed, you can start a local web server by running the following command in the repository directory: `python -m http.server`

    - **Using Node.js(http-server):** If you prefer Node.js, you can use the http-server package. Install it globally using npm (Node Package Manager): `npm install -g http-server`. Then, run the following command in the repository directory to start the local server:`http-server`     

6. **Run the App:** Open your web browser and navigate to http://localhost:8000 (or the port specified if you used a different port) to access the app served by the local web server. You can now use the app to check the weather for different cities without encountering CORS issues.

## Note

Please keep in mind that this app uses data from the OpenWeatherMap API. Be mindful of API usage limits and respect their terms of use.

Feel free to explore and share this app. If you encounter any issues or have suggestions for improvements, please let me know!

Enjoy checking the weather with Yuri's Weather Forecast App! ☀️❄💧⚡

## API Testing

We have a comprehensive set of API tests uding Postman to ensure the correctness of our applications API interactions. These tests allow us to validate the API responses, handing of different scenarios and overall reliabilty.

## How to Use the API Test Collection

To run the tests and validate the behavior of this weather app, you can follow these steps:

1. **Install Postman:** If you haven't already, download and install Postman on your local machine or sign into your Postman account on a web browser.
2. **Import the Collection:**
    - Open Postman
    - Click the Import button in the top left corner
    - Enter this URL: https://www.postman.com/pratery/workspace/yuri-s-weather-app-api-tests/request/29110280-5a848080-1b0b-4990-9c24-3837d29610bc?ctx=documentation
    - Click Continue and import the collection
3. **Run the Tests:**
    - Once the collection is imported, you'll see a folder named "Weather APP API Tests
    - Open the doler to reveal the test cases
    - Click on a test to view its details
    - Click the send button to execute the test
    - Check the results in the "Tests" tab of the response

Feel free to explore the API tests, and if you have any questions or suggestions, please don't hesitate to reach out.