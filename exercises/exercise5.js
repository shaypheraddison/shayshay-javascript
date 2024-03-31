// # create an age validation for products
// # if the user tries to buy alcohol then their age must be 21 or over
// # if the user tries to buy tobacco then their age must be 18 or over
// # the inputs are item and birth year


const item = prompt("Would you like tobacco or alcohol?").toLowerCase();
const age = prompt("How old are you?");

if (item == "tobacco") {
    if (age >= 18) {
        alert("Be safe with your tobacco please.");
    } else if (age < 18) {
        alert("You need to be older to get tobacco.");
    } else {
        alert("Please enter a proper number for your age.");
    }
} else if (item == "alcohol") {
    if (age >= 21) {
        alert("Be safe with your alcohol please.");
    } else if (age < 21) {
        alert("You need to be older to get alcohol.");
    } else {
        alert("Please enter a proper number for your age.");
    }
} else {
    alert("Please choose between tobacco or alcohol.");
}
