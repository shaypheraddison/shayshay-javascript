// # Create a calculator
// # This seems simple but we are going to make it just like a traditional
// # calculator where the user can enter any values and any operand
// # Example: 
//     # input: 5 + 10 - 2 / 15 * 20 + 99999
//     # output: the result of above
// # make sure to handle any data type such as int and floats
// # make sure to apply the correct mathmetical sequence to process the equation

// get text into the display box
let displayBox = document.querySelector("#display-box");

function displayValue(x) {
    if (x !== "Enter") {
        displayBox.textContent += x;
        return x;
    };
}

// clear display when needed
function clearDisplay() {
    displayBox.textContent = "";
}

// evaluate the text in the display box and complete the equation
function doTheMath() {
    let equation = displayBox.textContent;
    // do something about the eval function! Remove it or sanitize it!
    let finalize = eval(equation);
    document.querySelector("#display-box").textContent = finalize;
    return finalize;
}

// make an object storing the buttons to reference with keystrokes
const button0 = document.querySelector("#button0")
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#button4")
const button5 = document.querySelector("#button5")
const button6 = document.querySelector("#button6")
const button7 = document.querySelector("#button7")
const button8 = document.querySelector("#button8")
const button9 = document.querySelector("#button9")
const buttonAdd = document.querySelector("#button-add")
const buttonMinus = document.querySelector("#button-minus")
const buttonMultiply = document.querySelector("#button-multiply")
const buttonDivide= document.querySelector("#button-divide")
const buttonDecimal = document.querySelector("#button-decimal")
const buttonResult = document.querySelector("#button-result")
const buttonClear = document.querySelector("#clear-button")


const allowedKeys = {
    '0': button0,
    '1': button1,
    '2': button2,
    '3': button3,
    '4': button4,
    '5': button5,
    '6': button6,
    '7': button7,
    '8': button8,
    '9': button9,
    '+': buttonAdd,
    '-': buttonMinus,
    '*': buttonMultiply,
    '/': buttonDivide,
    '.': buttonDecimal,
    'Enter': buttonResult,
    'Backspace': buttonClear
};

// make a function for pressing the key down
function keyboardStroke() {
    document.addEventListener("keydown", function(event) {
        const keyPressed = event.key;
        if (allowedKeys[keyPressed]) {
            displayValue(keyPressed);
            if (event.key === "Enter") {
                doTheMath();
            } else if (event.key === "Backspace") {
                clearDisplay();
            };
        };
    });
};
keyboardStroke();
