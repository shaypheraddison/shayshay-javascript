# print out a pyramid using '*' as the "brick"
# your output should look like this
#      *
#     ***
#    *****
#   *******
# no copying this ascii image and printing it out
# one = "*"
# new_one = one.center(10)
# three = "*" * 3
# new_three = three.center(9)
# five = "*" * 5
# new_five = five.center(10)
# seven = "*" * 7
# new_seven = seven.center(9)
# print(new_one)
# print(new_three)
# print(new_five)
# print(new_seven)

# Thank you Python documentation for .center(). Looks ugly now but it sure does work ! 

for x in range(1,8,2):
    print(("*" * x).center(9))


