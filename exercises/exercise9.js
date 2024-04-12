// Create a traditional function and convert traditional function to arrow function
function helloName(name) {
    return "Hello" + " " + name + "!";
}

console.log(helloName("Steve"));

const helloName2 = (name2) => "Hello" + " " + name2 + "!";

console.log(helloName2("Greg"));

// Create a traditional function, with multiple parameters, and convert traditional function to arrow function
function getSum(num1, num2) {
    return num1 + num2;
}

console.log(getSum(10, 10));

const getSum2 = (num3, num4) => num3 + num4;

console.log(getSum2(5, 10));

// Create a traditional function and convert traditional with default parameters function to an arrow function with default parameters
function multiplyNums(num5, num6 = 2) {
    return num5 * num6;
}

console.log(multiplyNums(20));
console.log(multiplyNums(20, 5));

const multiplyNums2 = (num6, num7 = 5) => num6 * num7;

console.log(multiplyNums2(5));
console.log(multiplyNums2(2, 5));

// Create a traditional function and convert traditional function to arrow function with multiple lines
