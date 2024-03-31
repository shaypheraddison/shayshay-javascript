// # add an item to a array
const addArray = [];
addArray.push("testing");
console.log(addArray);

// # remove an item from a array
const removeArray = [1, 2, 3, 4, 5, 10];
removeArray.pop();
console.log(removeArray);

// # add two arrays together
const array1 = ["test1", "test-1", "test 1"];
const array2 = ["test2", "test-2", "test 2"];
const newArray = array1.concat(array2);
console.log(newArray);

// # get the difference between two arrays(removing same unique values in both arrays)
const firstArray = [5, 10, 15, 20, 25];
const secondArray = [10, 20];
const resultArray = firstArray.filter(item => !secondArray.includes(item));
console.log(resultArray);

// # insert an item at a given position using a array
const myArray = [1, 2, 3, 5];
myArray.splice(3, 0, 4);
console.log(myArray);

// # remove an item at a given position using a array
const selectArray = [100, 99, 98, 66, 97, 96];
const arrayIndex = selectArray.indexOf(66);
selectArray.splice(arrayIndex, 1);
console.log(selectArray);

// # remove all items from a array
const delArray = [1, 2, 3, 4, 5];
delArray.splice(0);
console.log(delArray);

// # sort a array
const sortArray = [4, 6, 2, 3, 1, 5];
sortArray.sort();
console.log(sortArray);

// # reverse elements in a array
const startArray = [100, 99, 98, 97];
const revArray = startArray.reverse();
console.log(revArray);
