// Take data from the api and display it to the specified locations on the webpage

// Create variables for the html elements that will be altered from the JS code. Also need one for the API key

const locationInput = document.getElementById("searchLocation");
const weatherBox = document.querySelector(".weatherDisplayBox");
const inputBox = document.getElementById("locationBox");
const searchButton = document.getElementById("searchButton");
const apiKey = "bebce22beee5345111cd44dd8326a9db";

// Create variables for background images to change and display images to change as well

const backgroundGif = {
    "Cloudy": "Resources/cloudy-gif.gif",
    "Sunny": "Resources/sunny-gif.gif",
    "Windy": "Resources/windy-gif.gif",
    "Rainy": "Resources/rainy-gif.gif",
    "Snowy": "Resources/snow-gif.gif"
};

const weatherImg = {
    "Cloudy": "Resources/cloudy.png",
    "Sunny": "Resources/sunny.png",
    "Windy": "Resources/windy.png",
    "Rainy": "Resources/rainy.png",
    "Snowy": "Resources/snow.png"
};

const weatherIdNumbers = {
    rainy: [
        200, 201, 202, 210, 211, 212, 221, 230, 231, 232,
        300, 301, 302, 310, 311, 312, 313, 314, 321,
        500, 501, 502, 503, 504, 511, 520, 521, 522, 531
    ],
    snowy: [
        600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622
    ],
    cloudy: [
        801, 802, 803, 804
    ],
    clear: [
        800
    ]
};



// API requires LAT and LON coordinates. This function will obtain that data from the entered zip code and return it for future use

async function getCityData(zipCode) {
    const apiZipUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${apiKey}`;
    const response1 = await fetch(apiZipUrl);
    const responseLatLon = await response1.json();
    console.log(responseLatLon)
    const lat = responseLatLon.lat;
    const lon = responseLatLon.lon;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response2 = await fetch(apiUrl);
    const cityResponse = await response2.json();
    console.log(cityResponse);

    return cityResponse;
}; 

// Need to pull weather data from json format and return needed information to update current and future weather

async function getWeatherData() {
    const location = locationInput.value;
    const data = await getCityData(location);
    const cityName = data.name

    const displayCityName = document.getElementById("cityName");
    displayCityName.textContent = cityName;
    console.log(cityName);

    let kelvinTemp = data.main.temp;
    let celsiusTemp = kelvinTemp - 273;
    let fahrenheit = celsiusTemp * (9 / 5) + 32;
    fahrenheit = Math.floor(fahrenheit);
    const displayCurrentTemp = document.getElementById("currentTemp");
    displayCurrentTemp.textContent = fahrenheit;
    console.log(fahrenheit);

    const weatherId = data.weather[0].id;
    
    console.log(weatherId);
}

// Create a main function that runs everything based on the event listener for clicking the submit button

searchButton.addEventListener("click", event => {
    getWeatherData();
});