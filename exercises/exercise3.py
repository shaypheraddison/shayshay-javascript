# create a deck of cards where the cards are a dictionary
values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
for value in values:
    for suit in suits:
        card = {"Suit": suit, "Value" : value}
        print(card)

# card = {
#     "value": "King",
#     "suit": "Diamonds"
# }

# card_2 = {
#     "value": "King",
#     "suit": "Spades"
# }

# card_3 = {
#     "value": "King",
#     "suit": "Hearts"
# }

# card_4 = {
#     "value": "King",
#     "suit": "Clubs"
# }

# print(card)
# print(card_2)
# print(card_3)
# print(card_4)
#bring same value to the same dictionary