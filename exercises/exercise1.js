// # Using a object create a receipt for groceries that was just purchased. 
// This should include the name and the amount for each item. As well as the total value of all the items. 
// Print out your results

const receipt = {
    apples: 2.45,
    milk: 4.25,
    appleJuice: 3.99,
    cups: 12.50,
    dogFood: 24.99
};

for (item in receipt) {
    console.log(item);
    console.log(`$${receipt[item]}`);
}

const totalSum = receipt.apples + receipt.milk + receipt.appleJuice + receipt.cups + receipt.dogFood;
console.log(`Total: $${totalSum}`);