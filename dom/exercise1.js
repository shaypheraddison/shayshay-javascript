/*
    Select / Get a single element by the following
    - p tag
    - class name
    - id name
*/

/*
    Select / Get all elements by the following
    - p tag
    - class name
    - id name
*/

const singleP = document.querySelector("p");
console.log(singleP);

const singleClass = document.querySelector("h1.headers");
console.log(singleClass);

const singleId = document.querySelector("#ul1")
console.log(singleId);

const allP = document.querySelectorAll("p");
console.log(allP);

const allClass = document.querySelectorAll("ul.listyBoyz");
console.log(allClass);

const allId = document.querySelectorAll("#ul2")
console.log(allId);

