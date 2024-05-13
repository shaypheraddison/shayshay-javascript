// Take data from the api and display it to the specified locations on the webpage

// Create variables for the html elements that will be altered from the JS code. Also need one for the API key

const locationInput = document.getElementById("searchLocation");
const weatherBox = document.querySelector(".weatherDisplayBox");
const inputBox = document.getElementById("locationBox");
const searchButton = document.getElementById("searchButton");
const apiKey = "bebce22beee5345111cd44dd8326a9db";
const apiKey2 = "047cf777409b3bed3802d38b91648d3a";

const cloudyGif = "Resources/cloudy-gif.gif";
const sunnyGif = "Resources/sunny-gif.gif";
const rainyGif = "Resources/rainy-gif.gif";
const snowyGif = "Resources/snow-gif.gif";
const defaultGif = "Resources/default-bg.avif";

const cloudyImg = "Resources/cloudy.png";
const sunnyImg = "Resources/sunny.png";
const rainyImg = "Resources/rainy.png";
const snowyImg = "Resources/snowy.png";
const otherImg = "Resources/other.png";

// Create variables for background images to change and display images to change as well

const backgroundGif = {
    "Cloudy": cloudyGif,
    "Sunny": sunnyGif,
    "Rainy": rainyGif,
    "Snowy": snowyGif,
    "Default": defaultGif
};

const weatherImg = {
    "Cloudy": cloudyImg,
    "Sunny": sunnyImg,
    "Rainy": rainyImg,
    "Snowy": snowyImg,
    "Other": otherImg
};

const weatherIdNumbers = {
    rainy: [
        200, 201, 202, 210, 211, 212, 221, 230, 231, 232,
        300, 301, 302, 310, 311, 312, 313, 314, 321,
        500, 501, 502, 503, 504, 511, 520, 521, 522, 531, 701
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

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    const response2 = await fetch(apiUrl);
    const cityResponse = await response2.json();
    console.log(cityResponse);

    return cityResponse;
}; 

async function getCityData2(zipcode2) { 
    const apiZipUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode2}&appid=${apiKey2}`;
    const response1 = await fetch(apiZipUrl);
    const responseLatLon = await response1.json();
    console.log(responseLatLon)
    const lat = responseLatLon.lat;
    const lon = responseLatLon.lon;

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=4&appid=${apiKey2}&units=imperial`;
    const response2 = await fetch(apiUrl);
    const cityResponse = await response2.json();
    console.log(cityResponse);

    return cityResponse;
}

// Need to pull weather data from json format and return needed information to update current and future weather

async function getCurrentWeatherData() {
    const location = locationInput.value;
    const data = await getCityData(location);
    const cityName = data.name

    const displayCityName = document.getElementById("cityName");
    displayCityName.textContent = cityName;
    console.log(cityName);

    let fahrenheit = data.main.temp
    fahrenheit = Math.floor(fahrenheit);
    const displayCurrentTemp = document.getElementById("currentTemp");
    displayCurrentTemp.textContent = fahrenheit;
    console.log(fahrenheit);

    let weatherImageSrc = "";
    let weatherGifSrc = "";
    const weatherId = data.weather[0].id;
    
    if (weatherIdNumbers.rainy.includes(weatherId)) {
        weatherImageSrc = weatherImg.Rainy;
    } else if (weatherIdNumbers.snowy.includes(weatherId)) {
        weatherImageSrc = weatherImg.Snowy;
    } else if (weatherIdNumbers.cloudy.includes(weatherId)) {
        weatherImageSrc = weatherImg.Cloudy;
    } else if (weatherIdNumbers.clear.includes(weatherId)) {
        weatherImageSrc = weatherImg.Sunny;
    } else {
        weatherImageSrc = weatherImg.Other;
    }

    if (weatherIdNumbers.rainy.includes(weatherId)) {
        weatherGifSrc = backgroundGif.Rainy;
    } else if (weatherIdNumbers.snowy.includes(weatherId)) {
        weatherGifSrc = backgroundGif.Snowy;
    } else if (weatherIdNumbers.cloudy.includes(weatherId)) {
        weatherGifSrc = backgroundGif.Cloudy;
    } else if (weatherIdNumbers.clear.includes(weatherId)) {
        weatherGifSrc = backgroundGif.Sunny;
    } else {
        weatherGifSrc = backgroundGif.Other;
    }

    const currentWeatherImg = document.getElementById("image1");
    currentWeatherImg.src = weatherImageSrc;
    document.body.style.backgroundImage = `url(${weatherGifSrc})`;

    console.log(weatherId);
}

// Create a function to gather the data for days 2, 3 and 4 and display them on the DOM

async function getOtherDayWeatherData() {
    const location2 = locationInput.value;
    const data2 = await getCityData2(location2);

    let day2Fahrenheit = data2.list[1].main.temp;
    day2Fahrenheit = Math.floor(day2Fahrenheit);

    let day3Fahrenheit = data2.list[2].main.temp;
    day3Fahrenheit = Math.floor(day3Fahrenheit);

    let day4Fahrenheit = data2.list[3].main.temp;
    day4Fahrenheit = Math.floor(day4Fahrenheit);

    const displayDay2Temp = document.getElementById("secondTemp");
    displayDay2Temp.textContent = day2Fahrenheit;

    const displayDay3Temp = document.getElementById("thirdTemp");
    displayDay3Temp.textContent = day3Fahrenheit;

    const displayDay4Temp = document.getElementById("fourthTemp");
    displayDay4Temp.textContent = day4Fahrenheit;

    console.log(day2Fahrenheit, day3Fahrenheit, day4Fahrenheit);

    let weatherImageSrc2 = "";
    let weatherImageSrc3 = "";
    let weatherImageSrc4 = "";
    const weatherId2 = data2.list[1].weather[0].id;
    const weatherId3 = data2.list[2].weather[0].id;
    const weatherId4 = data2.list[3].weather[0].id;
    
    if (weatherIdNumbers.rainy.includes(weatherId2)) {
        weatherImageSrc2 = weatherImg.Rainy;
    } else if (weatherIdNumbers.snowy.includes(weatherId2)) {
        weatherImageSrc2 = weatherImg.Snowy;
    } else if (weatherIdNumbers.cloudy.includes(weatherId2)) {
        weatherImageSrc2 = weatherImg.Cloudy;
    } else if (weatherIdNumbers.clear.includes(weatherId2)) {
        weatherImageSrc2 = weatherImg.Sunny;
    } else {
        weatherImageSrc2 = weatherImg.Other;
    }

    const currentWeatherImg2 = document.getElementById("image2");
    currentWeatherImg2.src = weatherImageSrc2;

    if (weatherIdNumbers.rainy.includes(weatherId3)) {
        weatherImageSrc3 = weatherImg.Rainy;
    } else if (weatherIdNumbers.snowy.includes(weatherId3)) {
        weatherImageSrc3 = weatherImg.Snowy;
    } else if (weatherIdNumbers.cloudy.includes(weatherId3)) {
        weatherImageSrc3 = weatherImg.Cloudy;
    } else if (weatherIdNumbers.clear.includes(weatherId3)) {
        weatherImageSrc3 = weatherImg.Sunny;
    } else {
        weatherImageSrc3 = weatherImg.Other;
    }

    const currentWeatherImg3 = document.getElementById("image3");
    currentWeatherImg3.src = weatherImageSrc3;

    if (weatherIdNumbers.rainy.includes(weatherId4)) {
        weatherImageSrc4 = weatherImg.Rainy;
    } else if (weatherIdNumbers.snowy.includes(weatherId4)) {
        weatherImageSrc4 = weatherImg.Snowy;
    } else if (weatherIdNumbers.cloudy.includes(weatherId4)) {
        weatherImageSrc4 = weatherImg.Cloudy;
    } else if (weatherIdNumbers.clear.includes(weatherId4)) {
        weatherImageSrc4 = weatherImg.Sunny;
    } else {
        weatherImageSrc4 = weatherImg.Other;
    }

    const currentWeatherImg4 = document.getElementById("image4");
    currentWeatherImg4.src = weatherImageSrc4;

}

// Create a main function that runs everything based on the event listener for clicking the submit button

searchButton.addEventListener("click", event => {
    getCurrentWeatherData();
    getOtherDayWeatherData();
});