// make all elements with a certain class turn to the color pink

const colorAll = document.querySelectorAll(".mainP");

for (let item = 0; item < colorAll.length; item++) {
    colorAll[item].setAttribute("style", "color: pink");
}

// make all elements with a certain class font larger

const bigAll = document.querySelectorAll(".headers");

for (let h = 0; h < bigAll.length; h++) {
    bigAll[h].setAttribute("style", "font-size: 100px");
}