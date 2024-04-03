// #Create a program that prints out the multiplication table from 1 to whatever the user inputs
// #in for loop take the input as the final number in the table
// #need to display 1 through the input number and the entire table as a result

const multNum = parseInt(prompt("Please choose a number from 1 - 15:"));

var times = "\n";
for (let num = 1; num <= multNum; num++) {
    for (let num2 = 1; num2 <= multNum; num2++) {
        times += (num * num2) + "  ";
    }
    times += "\n\n";
}
console.table(times);