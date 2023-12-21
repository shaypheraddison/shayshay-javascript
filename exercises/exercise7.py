#Create a program that prints out the multiplication table from 1 to whatever the user inputs

num_input = int(input("Please enter a number: "))

#in for loop take the input as the final number in the table
#need to display 1 through the input number and the entire table as a result
# for number in range
#   multiply number by input
#   print table

for number in range(1, num_input + 1):
    print(number, end="\t")
    for multiply in range(1, num_input + 1):
        print(number * multiply, end="\t")
    print()