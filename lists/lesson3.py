# create a list and loop over the list
looping_list = ["Shepard", 6, True]
for item in looping_list:
    print(item)

# create a list and add one to each item of the list. Does not mutate the item.
non_mutate = [1, 2, 3, 4]
new_non = non_mutate.copy()
for x in non_mutate:
    new_non.append(x + 1)
print(new_non)


# create a list and add one to each item of the list. Make sure it mutates the original list.
mutate = [10, 20, 30, 40, 50]
updated = [num+1 for num in mutate]  #THANK YOU PYTHON DOCUMENTATION FOR LIST COMPREHENSION !!
print(updated)

#original block I wrote for line 14. end result wasn't what I think was wanted
# mutate = [10, 20, 30, 40, 50]
# for num in mutate:
#     updated = []
#     num += 1
#     updated.append(num)
#     print(updated)

# create a list and loop backwards through the list
backwards = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
for i in reversed(backwards):
    print(i)

# create a list and only print out every other item
even = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
every_other = even[1::2]   #[start:end:step] 
print(every_other)