# Create a calculator
# This seems simple but we are going to make it just like a traditional
# calculator where the user can enter any values and any operand
# Example: 
    # input: 5 + 10 - 2 / 15 * 20 + 99999
    # output: the result of above
# make sure to handle any data type such as int and floats
# make sure to apply the correct mathmetical sequence to process the equation

# import operator
# operands = {
#     "+": operator.add(num_1, num_2),
#     "-": operator.sub(num_1, num_2),
#     "*": operator.mul(num_1, num_2),
#     "/": operator.truediv(num_1, num_2),
# }


question = input("Enter your math problem: ")
single_number = question.split()
total_char = len(single_number)
# print(single_number)
for ops in single_number:
    if ops == "*":
        multiply = single_number.index("*")
        mult_equation = int(single_number[multiply - 1]) * int(single_number[multiply + 1])
        single_number.append(mult_equation)
        single_number.remove("*")
    elif ops == "/":
        divide = single_number.index("/")
        div_equation = float(single_number[divide - 1]) / float(single_number[divide + 1])
        single_number.append(div_equation)
        single_number.remove("/")
    elif ops == "+":
        addition = single_number.index("+")
        add_equation = int(single_number[addition - 1]) + int(single_number[addition + 1])
        single_number.append(add_equation)
        single_number.remove("+")
    elif ops == "-":
        subtraction = single_number.index("-")
        sub_equation = int(single_number[subtraction - 1]) - int(single_number[subtraction + 1])
        single_number.append(sub_equation)
        single_number.remove("-")

for x in single_number:
    print(x)


# total = div_equation + add_equation + mult_equation + sub_equation
# print(total)