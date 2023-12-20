# create an age validation for products
# if the user tries to buy alcohol then their age must be 21 or over
# if the user tries to buy tobacco then their age must be 18 or over
# the inputs are item and birth year

birth_year = int(input("What is your birth year? \n"))
current_year = 2023
item_purchased = input("Are you wanting to buy alcohol, tobacco or both? \n").lower()

def buy_product():
    age = current_year - birth_year
    if age >= 21:
        print("You are old enough to purchase alcohol and/or tobacco.")
    elif age >= 18 and age < 21:
        print("You can only buy tobacco.")
    else:
        print("Get older nerd.")

if item_purchased == "tobacco" or item_purchased == "alcohol" or item_purchased == "both":
    buy_product()
else: 
    print("Please select between alcohol, tobacco or both")
