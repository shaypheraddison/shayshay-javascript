// when a user clicks a button get the text from an input element
const userClick = document.querySelector("#inputButton");

userClick.addEventListener("click", function() {
    const userInput = userClick.value;
    alert(userInput);
});

// when a user hits the enter button get the text from an input element
const userEnterKey = document.querySelector("#name");

userEnterKey.addEventListener("keydown", function() {
    const userInput2 = userEnterKey.value;
    alert(userInput2);
});

// when a user clicks a button set the text to the content of an input element
const userUpdateInput = document.querySelector("#inputText");
const userUpdateButton = document.querySelector("#updateText");
const userUpdateP = document.querySelector("#updateP");

userUpdateButton.addEventListener("click", function() {
    const newText = userUpdateInput.value;
    userUpdateP.textContent = newText;
});