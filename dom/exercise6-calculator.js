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
    let finalize = eval(equation);
    document.querySelector("#display-box").textContent = finalize;
    return finalize;
}

// make an object storing the buttons to reference with keystrokes
const allowedKeys = {
    '0': document.querySelector("#button0"),
    '1': document.querySelector("#button1"),
    '2': document.querySelector("#button2"),
    '3': document.querySelector("#button3"),
    '4': document.querySelector("#button4"),
    '5': document.querySelector("#button5"),
    '6': document.querySelector("#button6"),
    '7': document.querySelector("#button7"),
    '8': document.querySelector("#button8"),
    '9': document.querySelector("#button9"),
    '+': document.querySelector("#button-add"),
    '-': document.querySelector("#button-minus"),
    '*': document.querySelector("#button-multiply"),
    '/': document.querySelector("#button-divide"),
    '.': document.querySelector("#button-decimal"),
    'Enter': document.querySelector("#button-result"),
    'Backspace': document.querySelector("#clear-button")
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
