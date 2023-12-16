# Using a dictionary create a receipt for groceries that was just purchased. This should include the name and the amount for each item. As well as the total value of all the items. Print out your results

purchases = {
    "bread": 3.99,
    "cheese": 2.50,
    "butter": 4.25,
    "meat": 10.00,
    "chips": 2.00
}

print("This is the list of groceries:")

for item, cost in purchases.items():
    print(f"{item}: ${cost:.2f}")

receipt = purchases["bread"] + purchases["butter"] + purchases["cheese"] + purchases["chips"] + purchases["meat"]

print(f"Total cost of groceries is ${receipt:.2f}.")