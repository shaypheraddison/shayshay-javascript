# create a dictionary and add a value to it
dictionary_1 = {}
dictionary_1.update({"color": "white"})
print(dictionary_1)

# create a dictionary and access a key/value from it
dictionary_2 = {
    "car": "toyota",
    "color": "white",
    "type": "SUV"
}
print(dictionary_2["car"])

# create a dictionary and delete a value from it
dictionary_3 = {
    "sport 1": "baseball",
    "sport 2": "golf",
    "sport 3": "football"
}
dictionary_3.pop("sport 3")
print(dictionary_3)

# create a dictionary and change a value from it
dictionary_4 = {
    "first": 44,
    "second": 25,
    "third": 17,
    "fourth": 55,
    "fifth": 69
}
dictionary_4.update({"fifth": "28"})
print(dictionary_4)