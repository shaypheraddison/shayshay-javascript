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

const weatherImageArray = [
    {index: 0, imageId: "image1", imageSource: "", elementId: "currentTemp"},
    {index: 1, imageId: "image2", imageSource: "", elementId: "secondTemp"},
    {index: 2, imageId: "image3", imageSource: "", elementId: "thirdTemp"},
    {index: 3, imageId: "image4", imageSource: "", elementId: "fourthTemp"},
];

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
async function cityValue() {
    const locationValue = locationInput.value;
    return await cityData(locationValue);
}

// Make a function that will simplify getting the temperature and displaying it properly
async function checkCityTemp() {
    const tempData = await cityValue();

    weatherImageArray.forEach(day => {
        const fahrenheit = Math.floor(tempData.list[day.index].main.temp);
        const displayTemp = document.getElementById(day.elementId);
        displayTemp.textContent = `${fahrenheit}℉`;
    });
}

async function displayForecast() {
    const data = await cityValue();
    const cityName = data.city.name

    const displayCityName = document.getElementById("cityName");
    displayCityName.textContent = cityName;
    checkCityTemp();
}

async function setAppImages() {
    const imageData = await cityValue();
    let weatherGifSrc = "";

    weatherImageArray.forEach(day => {
        const weatherId = imageData.list[day.index].weather[0].id;
        if (weatherIdNumbers.rainy.includes(weatherId)) {
            weatherImageArray.imageSource = weatherImg.Rainy;
            weatherGifSrc = backgroundGif.Rainy;
        } else if (weatherIdNumbers.snowy.includes(weatherId)) {
            weatherImageArray.imageSource = weatherImg.Snowy;
            weatherGifSrc = backgroundGif.Snowy;
        } else if (weatherIdNumbers.cloudy.includes(weatherId)) {
            weatherImageArray.imageSource = weatherImg.Cloudy;
            weatherGifSrc = backgroundGif.Cloudy;
        } else if (weatherIdNumbers.clear.includes(weatherId)) {
            weatherImageArray.imageSource = weatherImg.Sunny
            weatherGifSrc = backgroundGif.Sunny;
        } else {
            weatherImageArray.imageSource = weatherImg.Other;
            weatherGifSrc = backgroundGif.Other;
        }

        let iconImage = document.getElementById(day.imageId);
        iconImage.src = weatherImageArray.imageSource;
        document.body.style.backgroundImage = `url(${weatherGifSrc})`;
    });
}

// Create a main function that runs everything based on the event listener for clicking the submit button

searchButton.addEventListener("click", event => {
    displayForecast();
    setAppImages();
});

document.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        displayForecast();
        setAppImages();
    };
});