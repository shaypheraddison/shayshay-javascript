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
    
def replace_div():
    div_index = single_number.index("/")
    left_of_div = single_number.index(div_index - 1)
    right_of_div = single_number.index(div_index + 1)
    div_no_more = single_number[left_of_div:div_index:right_of_div] = " "
    return div_no_more

def replace_mult():
    mult_index = single_number.index("*")
    left_of_mult = single_number.index(mult_index - 1)
    right_of_mult = single_number.index(mult_index + 1)
    mult_no_more = single_number[left_of_mult:mult_index:right_of_mult] = " "
    return mult_no_more

def replace_sub():
    sub_index = single_number.index("-")
    left_of_sub = single_number.index(sub_index - 1)
    right_of_sub = single_number.index(sub_index + 1)
    sub_no_more = single_number[left_of_sub:sub_index:right_of_sub] = " "
    return sub_no_more

def replace_add():
    add_index = single_number.index("+")
    left_of_add = single_number.index(add_index - 1)
    right_of_add = single_number.index(add_index + 1)
    add_no_more = single_number[left_of_add:add_index:right_of_add] = " "
    return add_no_more


for ops in single_number:
    if "*" in single_number:
        if single_number.index("/") < single_number.index("*"):
            b = check_div_mult_order()
            replace_div()
        a = multiply()
        replace_mult()
    elif "/" in single_number:
        b = divide()
        replace_div()
    elif "+" in single_number:
        if single_number.index("-") < single_number.index("+"):
            d = check_add_sub_order()
            replace_sub()
        c = addition()
        replace_add()
    elif "-" in single_number:
        d = subtraction()
        replace_sub()


print(a + b + c + d)
print(5 + 10 - 2 / 15 * 20 + 99999)
