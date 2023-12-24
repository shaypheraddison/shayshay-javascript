# Create a calculator
# This seems simple but we are going to make it just like a traditional
# calculator where the user can enter any values and any operand
# Example: 
    # input: 5 + 10 - 2 / 15 * 20 + 99999
    # output: the result of above
# make sure to handle any data type such as int and floats
# make sure to apply the correct mathmetical sequence to process the equation

question = input("Enter your math problem: ")
single_number = question.split()

def multiply():
    mult_index = single_number.index("*")
    num_1 = int(single_number[mult_index - 1])
    num_2 = int(single_number[mult_index + 1])
    return num_1 * num_2

def divide():
    div_index = single_number.index("/")
    num_1 = float(single_number[div_index - 1])
    num_2 = float(single_number[div_index + 1])
    return num_1 / num_2

def addition():
    add_index = single_number.index("+")
    num_1 = int(single_number[add_index - 1])
    num_2 = int(single_number[add_index + 1])
    return num_1 + num_2

def subtraction():
    sub_index = single_number.index("-")
    num_1 = int(single_number[sub_index - 1])
    num_2 = int(single_number[sub_index + 1])
    return num_1 - num_2

def check_div_mult_order():
    if single_number.index("/") < single_number.index("*"):
        return divide()
    else:
       return multiply()

def check_add_sub_order():
    if single_number.index("-") < single_number.index("+"):
       return subtraction()
    else:
       return addition()

for ops in single_number:
    if "*" in single_number:
        if single_number.index("/") < single_number.index("*"):
            b = check_div_mult_order()
            find_div = single_number.index("/")
            single_number[find_div] = " "
        a = multiply()
        find_mult = single_number.index("*")
        single_number[find_mult] = " "
    elif "/" in single_number:
        b = divide()
        find_div = single_number.index("/")
        single_number[find_div] = " "
    elif "+" in single_number:
        if single_number.index("-") < single_number.index("+"):
            d = check_add_sub_order()
            find_sub = single_number.index("-")
            single_number[find_sub] = " "
        c = addition()
        find_add = single_number.index("+")
        single_number[find_add] = " "
    elif "-" in single_number:
        d = subtraction()
        find_sub = single_number.index("-")
        single_number[find_sub] = " "

# solution = []

print(a + b + c + d)
print(5 + 10 - 2 / 15 * 20 + 99999)








# for ops in single_number:
#     if ops == "*":
#         multiply = single_number.index("*")
#         mult_equation = int(single_number[multiply - 1]) * int(single_number[multiply + 1])
#         single_number.append(mult_equation)
#         single_number.remove("*")
#     elif ops == "/":
#         divide = single_number.index("/")
#         div_equation = float(single_number[divide - 1]) / float(single_number[divide + 1])
#         single_number.append(div_equation)
#         single_number.remove("/")
#     elif ops == "+":
#         addition = single_number.index("+")
#         add_equation = int(single_number[addition - 1]) + int(single_number[addition + 1])
#         single_number.append(add_equation)
#         single_number.remove("+")
#     elif ops == "-":
#         subtraction = single_number.index("-")
#         sub_equation = int(single_number[subtraction - 1]) - int(single_number[subtraction + 1])
#         single_number.append(sub_equation)
#         single_number.remove("-")




# total = div_equation + add_equation + mult_equation + sub_equation
# print(total)