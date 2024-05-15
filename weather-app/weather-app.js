// Take data from the api and display it to the specified locations on the webpage

// Create variables for the html elements that will be altered from the JS code. Also need one for the API key

const locationInput = document.getElementById("searchLocation");
const weatherBox = document.querySelector(".weatherDisplayBox");
const inputBox = document.getElementById("locationBox");
const searchButton = document.getElementById("searchButton");
const apiKey = "bebce22beee5345111cd44dd8326a9db";

const cloudyGif = "Resources/cloudy-gif.gif";
const sunnyGif = "Resources/sunny-gif.gif";
const rainyGif = "Resources/rainy-gif.gif";
const snowyGif = "Resources/snow-gif.gif";
const defaultGif = "Resources/default-bg.webp";

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

// Create functions that can be used later in the scope to prevent repeating

// Get the lattitude and longitude and all four days' forecast within a single function
async function cityData(zipCode) {
    const apiZip = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${apiKey}`;
    const zipResponse = await fetch(apiZip);
    const zipJson = await zipResponse.json();

    const lattitude = zipJson.lat;
    const longitude = zipJson.lon;

    const apiCity = `https://api.openweathermap.org/data/2.5/forecast?lat=${lattitude}&lon=${longitude}&cnt=4&appid=${apiKey}&units=imperial`;
    const cityResponse = await fetch(apiCity);
    const cityJson = await cityResponse.json();

    console.log(cityJson);

    return cityJson;
} 

// Get the location value to be used later in various functions
async function fetchLocation() {
    const locationValue = locationInput.value;
    return await cityData(locationValue);
}

// Make a function that will simplify getting the temperature and displaying it properly
async function checkCityTemp() {
    const tempData = await fetchLocation();
    const daysIndex = [
        {index: 0, elementId: "currentTemp"},
        {index: 1, elementId: "secondTemp"},
        {index: 2, elementId: "thirdTemp"},
        {index: 3, elementId: "fourthTemp"},
    ];

    daysIndex.forEach(day => {
        const fahrenheit = Math.floor(tempData.list[day.index].main.temp);
        const displayTemp = document.getElementById(day.elementId);
        displayTemp.textContent = `${fahrenheit}℉`;
    });
}

async function currentForecast() {
    const data = await fetchLocation();
    const cityName = data.city.name

    const displayCityName = document.getElementById("cityName");
    displayCityName.textContent = cityName;

    // corrected repeating code into a single function
    checkCityTemp();

    // convert this section into a function
    let weatherImageSrc = "";
    let weatherGifSrc = "";
    const weatherId = data.list[0].weather[0].id;
    
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
    // convert lines 102 - 132 into a function
}

// Create a function to gather the data for days 2, 3 and 4 and display them on the DOM

async function getOtherDayWeatherData() {
    const data2 = await fetchLocation();

    // convert this into a function
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
    // convert lines 164 - 214 into a function

}

// Create a main function that runs everything based on the event listener for clicking the submit button

searchButton.addEventListener("click", event => {
    currentForecast();
    getOtherDayWeatherData();
});

document.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        currentForecast();
        getOtherDayWeatherData();
    };
});