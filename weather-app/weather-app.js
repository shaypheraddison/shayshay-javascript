// Take data from the api and display it to the specified locations on the webpage
// First thing to do is to 'fetch' the data from any weather api

//create a function that will change the images at a given grid spot

const sunnyImage = new Image();
sunnyImage.src = "Resources/sunny.png";

const cloudyImage = new Image();
cloudyImage.src = "Resources/cloudy.png";

const windyImage = new Image();
windyImage.src = "Resources/windy.png";

const rainyImage = new Image();
rainyImage.src = "Resources/rainy.png";

const snowyImage = new Image();
snowyImage.src = "Resources/snowy.png";

const imageArray = [sunnyImage, cloudyImage, windyImage, rainyImage, snowyImage];

const firstImage = document.getElementById("image1");
const secondImage = document.getElementById("image2");
const thirdImage = document.getElementById("image3");
const fourthImage = document.getElementById("image4");

const gridImages = {
    currentDay: firstImage,
    secondDay: secondImage,
    thirdDay: thirdImage,
    fourthDay: fourthImage
};
