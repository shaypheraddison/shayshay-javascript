# add an item to a list
list_one = ["a", "b", "c"]
list_one.append("d")
print(list_one)

# remove an item from a list
list_of_things = ["bacon", "eggs", "milk"]
list_of_things.remove("eggs")
print(list_of_things)

# add two lists together
east_states = ["Florida", "Tennessee", "North Carolina", "New York"]
west_states = ["Washington", "California", "Oregon", "Nevada"]
# us_states = east_states + west_states   #this also worked but extend() looks nicer
east_states.extend(west_states)
print(east_states)

# get the difference between two lists(removing same unique values in both lists)
    #NO SETS
all = [1, 2, 3, 4, 5]
even = [2, 4]
for x in all:
    if x in even:
        all.remove(x)

print(all)

# insert an item at a given position using a list
teams = ["Titans", "Seahawks", "Ravens"]
teams.insert(1, "Chargers")
print(teams)

# remove an item at a given position using a list
least_fav = ["Yankeees", "Astros", "Angels"]
least_fav.pop(2)
print(least_fav)

# remove all items from a list
movies_to_watch = ["Grinch", "Home Alone", "The Santa Clause", "Harry Potter", "Christmas Vacation", "Die Hard"]
movies_to_watch.clear()
print(movies_to_watch)

# sort a list
num_in_order = [0, 1, 4, 5, 2, 3]
num_in_order.sort()
print(num_in_order)

# reverse elements in a list
backwards = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90]
backwards.reverse()
print(backwards)