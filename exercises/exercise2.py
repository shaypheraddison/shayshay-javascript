# create a deck of cards where the card is a string value

# king_of_hearts = "King of Hearts"
# king_of_clubs = "King of Clubs"
# king_of_diamonds = "King of Diamonds"
# king_of_spades = "King of Spades"
# print(king_of_clubs)
# print(king_of_diamonds)
# print(king_of_hearts)
# print(king_of_spades)

suits = ["Hearts", "Clubs", "Diamonds", "Spades"]
values = ["King", "Queen", "Jack", "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
for suit in suits:
    for value in values:
        print(f"{values} of {suit}")
