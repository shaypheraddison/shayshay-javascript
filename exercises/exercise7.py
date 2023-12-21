#Create a program that prints out the multiplication table from 1 to whatever the user inputs

num_input = int(input("Please enter a number: "))

#in for loop take the input as the final number in the table
# for number in range
#   multiply number by input
#   print table

for number in range(1, num_input + 1):
    number *= number
    print(number , end=" ")