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
    num_1 = single_number[mult_index - 1]
    num_2 = single_number[mult_index + 1]
    if ' ' in single_number:
        single_number.remove(' ')
    else:
        pass
    return float(num_1) * float(num_2)

def divide():
    div_index = single_number.index("/")
    num_1 = single_number[div_index - 1]
    num_2 = single_number[div_index + 1]
    if ' ' in single_number:
        single_number.remove(' ')
    else:
        pass
    return float(num_1) / float(num_2)

def addition():
    add_index = single_number.index("+")
    num_1 = single_number[add_index - 1]
    num_2 = single_number[add_index + 1]
    if ' ' in single_number:
        single_number.remove(' ')
    else:
        pass
    return float(num_1) + float(num_2)

def subtraction():
    sub_index = single_number.index("-")
    num_1 = single_number[sub_index - 1]
    num_2 = single_number[sub_index + 1]
    if ' ' in single_number:
        single_number.remove(' ')
    else:
        pass
    return float(num_1) - float(num_2)

def check_div_mult_order():
    if single_number.index("/") < single_number.index("*"):
        if "/" not in single_number:
            pass
        return divide()
    else:
       return multiply()

def check_add_sub_order():
    if single_number.index("-") < single_number.index("+"):
       if "-" not in single_number:
           pass
       return subtraction()
    else:
       return addition()
    
def div_num_index():
    div_index = single_number.index("/")
    left_of_div = single_number[div_index - 1]
    left_div_index = single_number.index(left_of_div)
    right_of_div = single_number[div_index + 1]
    right_div_index = single_number.index(right_of_div)
    single_number[left_div_index:right_div_index] = " "
    return single_number
    # return div_no_more

def mult_num_index():
    mult_index = single_number.index("*")
    left_of_mult = single_number[mult_index - 1]
    left_mult_index = single_number.index(left_of_mult)
    right_of_mult = single_number[mult_index + 1]
    right_mult_index = single_number.index(right_of_mult)
    single_number[left_mult_index:right_mult_index] = " "
    return single_number
    # return mult_no_more

def sub_num_index():
    sub_index = single_number.index("-")
    left_of_sub = single_number[sub_index - 1]
    left_sub_index = single_number.index(left_of_sub)
    right_of_sub = single_number[sub_index + 1]
    right_sub_index = single_number.index(right_of_sub)
    single_number[left_sub_index:right_sub_index] = " "
    return single_number
    # return sub_no_more

def add_num_index():
    add_index = single_number.index("+")
    left_of_add = single_number[add_index - 1]
    left_add_index = single_number.index(left_of_add)
    right_of_add = single_number[add_index + 1]
    right_add_index = single_number.index(right_of_add) 
    single_number[left_add_index:right_add_index] = " "
    return single_number
    # return add_no_more

def answer_is():
    if ' ' in single_number:
        single_number.remove(' ')
    else:
        pass
    answer = float(single_number[0])
    return answer

for ops in single_number:
    if "*" in single_number:
        if "/" not in single_number:
            pass
        elif single_number.index("/") < single_number.index("*"):
            b = float(check_div_mult_order())
            div_index = single_number.index("/")
            div_num_index()
            single_number[div_index] = b
        a = float(multiply())
        mult_index = single_number.index("*")
        mult_num_index()
        single_number[mult_index] = a
    elif "/" in single_number:
        b = float(divide())
        div_index = single_number.index("/")
        div_num_index()
        single_number[div_index] = b
    elif "+" in single_number:
        if "-" not in single_number:
            pass
        elif single_number.index("-") < single_number.index("+"):
            d = check_add_sub_order()
            sub_index = single_number.index("-")
            sub_num_index()
            single_number[sub_index] = d
        c = addition()
        add_index = single_number.index("+")
        add_num_index()
        single_number[add_index] = c
    elif "-" in single_number:
        d = subtraction()
        sub_index = single_number.index("-")
        sub_num_index()
        single_number[sub_index] = d


print(f"The answer to your equation is: {answer_is():.3f}")
