// # Create a calculator
// # This seems simple but we are going to make it just like a traditional
// # calculator where the user can enter any values and any operand
// # Example: 
//     # input: 5 + 10 - 2 / 15 * 20 + 99999
//     # output: the result of above
// # make sure to handle any data type such as int and floats
// # make sure to apply the correct mathmetical sequence to process the equation


const calcDisplay = document.querySelector("#display-box");

const numberButtons = document.querySelectorAll(".number");
const mathButtons = document.querySelectorAll(".math-button");
console.log(numberButtons);
console.log(mathButtons);


function displayValue(value) {
    calcDisplay.textContent = value;
};

function clickNumberButtons() {
    numberButtons.forEach(function (button) {
        button.addEventListener("click", function() {
            const buttonValue = button.textContent;
            displayValue(buttonValue);
        });
    });
};

clickNumberButtons()




