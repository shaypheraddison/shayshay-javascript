// Turn the text of a paragraph to another color
// Turn the text of a paragraph to another font
// Make the text of a paragraph hidden
// Remove the a paragraph

const colorP = document.querySelector("#firstP");
colorP.setAttribute("style", "color: orange");

const fontP = document.querySelector("#secondP");
fontP.setAttribute("style", "font-family: fantasy");

const hiddenP = document.querySelector("#thirdP");
hiddenP.setAttribute("style", "color: white");

const removeP = document.querySelector("#fourthP");
removeP.setAttribute("style", "display: none");