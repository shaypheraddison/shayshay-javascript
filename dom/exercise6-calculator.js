// # Create a calculator
// # This seems simple but we are going to make it just like a traditional
// # calculator where the user can enter any values and any operand
// # Example: 
//     # input: 5 + 10 - 2 / 15 * 20 + 99999
//     # output: the result of above
// # make sure to handle any data type such as int and floats
// # make sure to apply the correct mathmetical sequence to process the equation

let displayBox = document.querySelector("#display-box");

function displayValue(x) {
    displayBox.textContent += x;
    return x;
}

function clearDisplay() {
    displayBox.textContent = "";
}


function doTheMath() {
    let equation = displayBox.textContent;
    let finalize = eval(equation);
    document.querySelector("#display-box").textContent = finalize;
    return finalize;
}







// const calcDisplay = document.querySelector("#display-box");
// const numberButtons = document.querySelectorAll(".number");
// const mathButtons = document.querySelectorAll(".math-button");

// // display value on display box
// function displayValue(value) {
//     calcDisplay.textContent = value;
// };

// // make a function that changes the number displayed
// function clickNumberButtons() {
//     numberButtons.forEach(function(button) {
//         button.addEventListener("click", function() {
//             let buttonValue = button.textContent;
//             displayValue(buttonValue);
//         });
//     });
// };
// clickNumberButtons();

// // make a function the adds the operator to the display
// function clickOperatorButtons() {
//     mathButtons.forEach(function(button) {
//         button.addEventListener("click", function () {
//             let operatorButton = button.textContent;
//             displayValue(operatorButton);
//         });
//     });
// };
// clickOperatorButtons();

// // make something that stores the clicked data
// let displayData = "";
// numberButtons.forEach(function(button) {
//     button.addEventListener("click", function () {
//         displayData += clickNumberButtons();
//         return displayData;
//     });
// });