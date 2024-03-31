// # create a array and loop over the array
const array1 = [1, 2, 3, 4, 5];
for (let num of array1) {
    console.log(num);
}

// # create a array and add one to each item of the array. Does not mutate the item.
const array2 = [1, 2, 3, 4, 5];
const array3 = []
for (let num of array2) {
    num += 1;
    array3.push(num);
}
console.log(array2);
console.log(array3);

// # create a array and add one to each item of the array. Make sure it mutates the original array.
const array4 = [10, 20, 30, 40];
for (num = 0; num < array4.length; num++) {
    array4[num] += 1;
}
console.log(array4);

// # create a array and loop backwards through the array
const array5 = ["backwards", "is", "array", "This"];
for (let item of array5.reverse()) {
    console.log(item);
}

// # create a array and only print out every other item
const array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (num = 0; num < array6.length; num+=2) {
    console.log(array6[num]);
}