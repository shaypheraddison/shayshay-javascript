// Take data from the api and display it to the specified locations on the webpage
// First thing to do is to 'fetch' the data from any weather api

//create a function that will change the images at a given grid spot

const locationInput = document.getElementById("searchLocation");
const weatherBox = document.querySelector(".weatherDisplayBox");
const inputBox = document.getElementById("locationBox");
const searchButton = document.getElementById("searchButton");
const apiKey = "62631cea2487c68825327dafba54dd27";

searchButton.addEventListener("click", event => {
    const location = locationInput.value;
    getZipLat(location);
    getZipLon(location);
    getCityData();
});


// API requires LAT and LON coordinates. This function will obtain that data from the entered zip code and return it for future use
async function getZipLat(zipCode){
    const apiZipUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${apiKey}`;
    const response = await fetch(apiZipUrl);
    // console.log(response);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    const lat = jsonResponse.lat;
    console.log(lat);
    return lat;
};

async function getZipLon(zipCode){
    const apiZipUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${apiKey}`;
    const response = await fetch(apiZipUrl);
    // console.log(response);
    const jsonResponse = await response.json();
    const lon = jsonResponse.lon;
    console.log(lon);
    return lon;
};

function getCityData() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${getZipLat}&lon=${getZipLon}&appid=${apiKey}`;
    console.log(apiUrl);
};






// const sunnyImage = new Image();
// sunnyImage.src = "Resources/sunny.png";

// const cloudyImage = new Image();
// cloudyImage.src = "Resources/cloudy.png";

// const windyImage = new Image();
// windyImage.src = "Resources/windy.png";

// const rainyImage = new Image();
// rainyImage.src = "Resources/rainy.png";

// const snowyImage = new Image();
// snowyImage.src = "Resources/snowy.png";

// const imageArray = [sunnyImage.src, cloudyImage.src, windyImage.src, rainyImage.src, snowyImage.src];

// const firstImage = document.getElementById("image1");
// const secondImage = document.getElementById("image2");
// const thirdImage = document.getElementById("image3");
// const fourthImage = document.getElementById("image4");

// const gridImages = {
//     currentDay: firstImage,
//     secondDay: secondImage,
//     thirdDay: thirdImage,
//     fourthDay: fourthImage
// };

// const weatherData = {
//     location: "Keller, TX",
//     currentWeather: "windy",
//     day2Weather: "cloudy",
//     day3Weather: "rainy",
//     day4Weather: "sunny"
// };
