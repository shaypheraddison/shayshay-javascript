// add the ability to when a user clicks a button the word "click" appears in the console
const clickMe = document.querySelector("#clickButton");

clickMe.addEventListener("click", function() {
    console.log("Button has been clicked !");
});

// add the ability to when a user clicks a button an alert happens on the page
const alertMe = document.querySelector("#alertButton");

alertMe.addEventListener("click", function() {
    alert("ALERT ALERT ALERT !!! ");
});

// add the ability to when a user clicks a button a paragraph element is deleted
const deleteMe = document.querySelector("#removeButton");

deleteMe.addEventListener("click", function() {
    const deleteP = document.querySelector("#fourthP");
    deleteP.remove(deleteMe);
});

// add the ability to when a user clicks a button a paragraph element is added
const addMe = document.querySelector("#addButton");

addMe.addEventListener("click", function() {
    const addP = document.createElement("p");
    const addText = document.createTextNode("This is a new paragraph made from a button !");
    addP.appendChild(addText);
    const lowerList = document.querySelector("#listH");
    document.body.insertBefore(addP, lowerList);
})